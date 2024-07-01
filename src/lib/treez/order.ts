"use server";

import { getSessionData } from "../session/getSession";
import { ORDER_PRODUCT_TYPE } from "../types/treez/product";
import { treezRequest } from "./utils"

export const makeOrder = async (store: string, data: any, items: ORDER_PRODUCT_TYPE[]) => {
  "use server";
  const axios = await treezRequest(store);
  const session = await getSessionData();
  try {
    let body:any = {
      items,
      type: data.method,
      rewardDollars: 0
    }
    if (data.method === "DELIVERY") {
      body["delivery_address"] = data;
    } else {
      body["scheduled_date"] = data.date;
    }
    const res = await axios.post("/order", body);
    console.log(res.data);
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