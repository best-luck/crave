import axios from "axios";
import { getSessionData } from "../session/getSession";

const treezCraveannaborAxios = axios.create({
  baseURL: "https://headless.treez.io/v2.0/dispensary/partnersandbox2/ecommerce/",
  headers: {
    client_id: process.env.craveannarbor_client_id as string,
    client_secret: process.env.craveannarbor_client_secret as string
  }
});

const treezCravemonroeAxios = axios.create({
  baseURL: "https://headless.treez.io/v2.0/dispensary/partnersandbox2/ecommerce/",
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
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const session = await getSessionData();
      const refreshToken = session.user.tokens.refreshToken;
      if (refreshToken) {
        try {
          const response = await treezCraveannaborAxios.get(`token/${refreshToken}`);
          const newAccessToken = response.data.accessToken;
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
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const session = await getSessionData();
      const refreshToken = session.user.tokens.refreshToken;
      if (refreshToken) {
        try {
          const response = await treezCravemonroeAxios.get(`token/${refreshToken}`);
          const newAccessToken = response.data.token;
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return treezCravemonroeAxios(originalRequest);
        } catch (error) {
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
  }
  axiosInstance = treezCraveannaborAxios;
  const session = await getSessionData();
  if (session.user.tokens) {
    axiosInstance.defaults.headers.common.Authorization = "Bearer " + session.user.tokens.token;
  }
  return axiosInstance;
}