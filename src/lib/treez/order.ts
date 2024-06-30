"use server";

import { getSessionData } from "../session/getSession";
import { ORDER_PRODUCT_TYPE } from "../types/treez/product";
import { treezRequest } from "./utils"

export const makeOrder = async (store: string, type: string, items: ORDER_PRODUCT_TYPE[]) => {
  "use server";
  const axios = await treezRequest(store);
  const session = await getSessionData();
  console.log(session.user);
  try {
    let body:any = {
      items,
      type,
      rewardDollars: 0
    }
    const res = await axios.post("/order", body);
    return {
      status: "OK",
      data: res.data
    }
  } catch(err) {
    return {
      status: "FAIL"
    }
  }
}