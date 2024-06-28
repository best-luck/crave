import { PRODUCT_CART_TYPE } from "./product";

export interface TREEZ_CART_TYPE {
  products: PRODUCT_CART_TYPE[];
  total: number;
}