"use server";

import { headers } from "next/headers";
import { getSessionData } from "../session/getSession";
import { setSessionData } from "../session/setSession";
import { treezRequest } from "./utils";

export async function signIn({ email, password }: { email: string, password: string }, store: string) {

  const monroeAxios = await treezRequest(store);
  try {
    const data = {
      email,
      password
    };
    const res = await monroeAxios.post("/login", data);
    const { firstName, lastName, tokens } = res.data;
    if (res.status === 200) {
      const session = await getSessionData();
      const _user = session.user||{};
      await setSessionData("user", {
        ..._user,
        [store]: {
          email,
          password,
          firstName,
          lastName,
          tokens
        }
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

export async function signUp({ email, password, phone, fullname } : { email: string, password: string, phone: string, fullname: string }, store: string) {
  const monroeAxios = await treezRequest(store);
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
      const session = await getSessionData();
      let user: any = {};
      if (session.user) {
        user = {
          ...session.user
        }
        user[store] = {
          ...data,
          id: res.data.id,
          password
        }
        await setSessionData("user", user);
      }
      await sendVerifyCode(store);
      return {
        status: "OK"
      }
    }
  } catch(err: any) {
    console.log(err);
    return {
      status: "FAIL",
      message: err.response.data.detail||err.response.data.description
    }
  }
}

export async function forgotPassword({ email }: { email: string }, store: string) {
  const monroeAxios = await treezRequest(store);
  try {
    const res = await monroeAxios.post(`/login/forgotpassword`, { email });
    return {
      status: "OK"
    };
  } catch(err) {
    return {
      status: "FAIL"
    };
  }
}

export async function updatePassword(data: { retrieveToken: string, password: string }, store: string) {
  const monroeAxios = await treezRequest(store);
  try {
    const res = await monroeAxios.post(`/login/newpassword`, data);
    return {
      status: "OK"
    };
  } catch(err: any) {
    return {
      status: "FAIL",
      msg: err.response.data.detail
    }
  } 
}

export async function sendVerifyCode(store: string) {
  const session = await getSessionData();
  console.log(session.user);
  if (session.user && session.user[store]) {
    const user = session.user[store];
    const monroeAxios = await treezRequest(store);
    try {
      const res = await monroeAxios.get(`/customer/${user.id}/code`);
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

export async function verifyAuthCode(code: string, store: string) {
  const session = await getSessionData();
  if (session.user && session.user[store]) {
    const user = session.user[store];
    const monroeAxios = await treezRequest(store);
    try {
      const res = await monroeAxios.get(`/customer/${user.id}/code/${code}`);
      if (res.status === 200) {
        const _user = {
          ...user,
          tokens: res.data.tokens
        };
        await setSessionData("user", {
          ...session.user,
          [store]: _user
        });
        await setPassword(user.password, store);

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

export async function setPassword(password: string, store: string) {
  const monroeAxios = await treezRequest(store);
  try {
    const session = await getSessionData();
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

export async function treezLogout(store: string) {
  const session = await getSessionData();
  const user = session.user;
  user[store] = null;
  await setSessionData("user", user);
  return {
    status: "OK"
  }
}