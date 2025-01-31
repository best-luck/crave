"use server";

import axios from "axios";
import { getSessionData } from "../session/getSession";
import { setSessionData } from "../session/setSession";

const treezCraveannaborAxios = axios.create({
  baseURL: "https://headless.treez.io/v2.0/dispensary/craveannarbor/ecommerce/",
  headers: {
    client_id: process.env.craveannarbor_client_id as string,
    client_secret: process.env.craveannarbor_client_secret as string
  }
});

const treezCravemonroeAxios = axios.create({
  baseURL: "https://headless.treez.io/v2.0/dispensary/cravemonroe/ecommerce/",
  headers: {
    client_id: process.env.cravemonroe_client_id as string,
    client_secret: process.env.cravemonroe_client_secret as string
  }
});

treezCraveannaborAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    "use server";
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const session = await getSessionData();
      let refreshToken = null;
      if (session.user.craveannabor) {
        refreshToken = session.user.craveannabor.tokens.refreshToken;
      }
      if (refreshToken) {
        try {
          const response = await treezCraveannaborAxios.get(`token/${refreshToken}`);
          const newAccessToken = response.data.accessToken;
          let user = session.user;
          user['craveannabor'].tokens.token = newAccessToken;
          await setSessionData("user", user);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return treezCraveannaborAxios(originalRequest);
        } catch (error) {
        }
      }
    }
    return Promise.reject(error);
  }
);

treezCravemonroeAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    "use server";
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry && !originalRequest.url.startsWith("/token/")) {
      originalRequest._retry = true;
      const session = await getSessionData();
      let refreshToken = null;
      if (session.user.cravemonroe) {
        refreshToken = session.user.cravemonroe.tokens.refreshToken;
        try {
          const response = await treezCravemonroeAxios.get(`/token/${refreshToken}`);
          const newAccessToken = response.data.token;
          console.log(newAccessToken, '--------');
          let user = session.user;
          user['cravemonroe'].tokens.token = newAccessToken;
          // await setSessionData("user", user);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return treezCravemonroeAxios(originalRequest);
        } catch (_error: any) {
          // await setSessionData("user", null);
        }
      }
    }
    return Promise.reject(error);
  }
);

export const treezRequest = async (store: string) => {
  let axiosInstance = null;
  if (store === "cravemonroe") {
    axiosInstance = treezCravemonroeAxios;
  } else {
    axiosInstance = treezCraveannaborAxios;
  }
  const session = await getSessionData();
  if (session.user && session.user[store] && session.user[store].tokens) {
    axiosInstance.defaults.headers.common.Authorization = "Bearer " + session.user[store].tokens.token;
  }
  return axiosInstance;
}