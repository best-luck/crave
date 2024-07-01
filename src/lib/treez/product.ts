"use server";

import { treezRequest } from "./utils"

export const getStoreProducts = async (store: string, searchParam: string="", filters: any = null, afterKey: any = null) => {
  const axios = await treezRequest(store);
  try {
    let body:any = {
      strictMedicalCustomerType: true
    }
    if (filters)
      body["filters"] = filters;
    if (afterKey)
      body["afterKey"] = afterKey;
    const res = await axios.post(`/menu/searchProducts${searchParam!==""?`?searchTerm=${searchParam}`:""}`, body);
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