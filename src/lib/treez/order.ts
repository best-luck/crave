"use server";

import { getSessionData } from "../session/getSession";
import { ORDER_PRODUCT_TYPE } from "../types/treez/product";
import { treezRequest } from "./utils"

export const makeOrder = async (store: string, data: any, items: ORDER_PRODUCT_TYPE[]) => {
  "use server";
  const axios = await treezRequest(store);
  const session = await getSessionData();
  try {
    if (data) {
      const registerAddress = await axios.post("/customer/address", data);
    }
  } catch (err: any) {
    return {
      status: "Address",
      message: err.response.data.detail
    }
  }
  try {
    let body:any = {
      items,
      type: data.method,
      rewardDollars: 0
    }
    // if (data.method === "DELIVERY") {
    //   body["delivery_address"] = data;
    // } else {
    //   body["scheduled_date"] = data.date;
    // }
    const res = await axios.post("/order", body);
      return {
      status: "OK",
      data: res.data
    }
  } catch(err) {
    console.log(err);
    return {
      status: "FAIL"
    }
  }
}

export const getOrders = async (store: string, page: number = 0) => {
  const axios = await treezRequest(store);
  const res = await axios.get("/customer/orders/page/"+page);
  return res.data.data;
}

export const getOrder = async (store: string, id: string) => {
  const axios = await treezRequest(store);
  const res = await axios.get("/customer/orders/"+id);
  return res.data;
}