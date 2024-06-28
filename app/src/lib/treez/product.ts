"use server";

import { treezRequest } from "./utils"

export const getStoreProducts = async (store: string) => {
  const axios = await treezRequest(store);
  try {
    const res = await axios.post("/menu/searchProducts", {strictMedicalCustomerType: false});
    return {
      status: "OK",
      products: res.data.data
    }
  } catch(err) {
    console.log(err, store);
    return {
      status: "FAIL"
    }
  }
}