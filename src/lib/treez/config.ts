"use server";

import { treezRequest } from "./utils"

export const getEcommerceConfig = async (store: string) => {
  const axios = await treezRequest(store);
  try {
    const res = await axios.get("/config");
    return {
      status: "OK",
      config: res.data.data
    }
  } catch(err) {
    return {
      status: "FAIL"
    }
  }
}