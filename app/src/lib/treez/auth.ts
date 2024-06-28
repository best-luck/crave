"use server";

import { getSessionData } from "../session/getSession";
import { setSessionData } from "../session/setSession";
import { treezRequest } from "./utils";

export async function signIn({ email, password }: { email: string, password: string }) {
  const monroeAxios = await treezRequest("cravemonroe");
  try {
    const data = {
      email,
      password
    };
    console.log(data);
    const res = await monroeAxios.post("/login", data);
    const { firstName, lastName, tokens } = res.data;
    if (res.status === 200) {
      await setSessionData("user", {
        email,
        password,
        fullname: firstName + " " + lastName,
        tokens
      });
      return {
        status: "OK"
      }
    }
  } catch(err) {
    console.log(err);
  }
  return {
    status: "FAIL",
  }
}

export async function signUp({ email, password, phone, fullname } : { email: string, password: string, phone: string, fullname: string }) {
  const monroeAxios = await treezRequest("cravemonroe");
  try {
    const data = {
      email,
      phone,
      birthday: "2000-01-01",
      firstName: fullname.split(" ")[0],
      lastName: fullname.split(" ")[1],
      customerType: "ADULT"
    };
    const res = await monroeAxios.post("/customer/signup", data);
    if (res.status === 200) {
      await setSessionData("user", {
        ...data,
        id: res.data.id,
        password
      });
      await sendVerifyCode();
      return {
        status: "OK"
      }
    }
  } catch(err) {
    console.log(err);
  }
  return {
    status: "FAIL",
  }
}

export async function forgotPassword(data: { email: string }) {

}

export async function updatePassword(data: { token: string, password: string }) {

}

export async function sendVerifyCode() {
  const session = await getSessionData();
  if (session.user) {
    const monroeAxios = await treezRequest("cravemonroe");
    try {
      const res = await monroeAxios.get(`/customer/${session.user.id}/code`);
      if (res.status === 200) {
        return {
          status: "OK",
        }
      }
    } catch(err) {
      console.log(err);
    }
  }
  return {
    status: "FAIL"
  }
}

export async function verifyAuthCode(code: string) {
  const session = await getSessionData();
  if (session.user) {
    const monroeAxios = await treezRequest("cravemonroe");
    try {
      const res = await monroeAxios.get(`/customer/${session.user.id}/code/${code}`);
      if (res.status === 200) {
        await setPassword(session.user.password);
        await setSessionData("user", {
          ...session.user,
          tokens: res.data.tokens
        });

        return {
          status: "OK",
        }
      }
    } catch(err) {
      console.log(err);
    }
  }
  return {
    status: "FAIL"
  }
}

export async function setPassword(password: string) {
  const monroeAxios = await treezRequest("cravemonroe");
  try {
    const res = monroeAxios.post("/customer/activate", {
      password
    });
    return {
      status: "OK"
    }
  } catch(err) {
    return {
      status: "FAIL"
    }
  }
}