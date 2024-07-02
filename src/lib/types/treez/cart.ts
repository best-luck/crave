import { PRODUCT_CART_TYPE } from "./product";

export interface TREEZ_CART_TYPE {
  products: PRODUCT_CART_TYPE[];
  total: number;
  tax: number;
}

export interface ORDER_TYPE {
  orderId: string;
  status: string;
  orderNumber: string;
  dateCreated: string;
  lastUpdatedAt: string;
  hash: string;
}

export interface ORDER_TICKET_TYPE {
  "resultCode": string,
  "resultReason": string,
  "orderId": string,
  "type": string,
  "status": string,
  "orderNumber": string,
  "customerId": number,
  "customerType": string,
  address: {
    id: number;
    street: string;
    city: string;
    state: string;
    country: string;
    county: string;
    type: string;
    zip: string;
    comment: string;
  },
  items: ORDER_TICKET_ITEM_TYPE[],
  "subTotal": string,
  "adjustedSubTotal": string,
  "tax": string,
  "total": string,
  "deliveryCost": string,
  "discount": string,
  "tierDiscount": string,
  "payByPoints": string,
  historyResults: ORDER_TICKET_HISTORY[],
  dateCreated: string,
};

export interface ORDER_TICKET_HISTORY {
  status: string;
  description: string;
  date: string;
  user: string;
  userId: string;
}


export interface ORDER_TICKET_ITEM_TYPE {
  id: string;
  "productId": string,
  "type": string,
  "subtype": string,
  "brand": string,
  "name": string,
  "quantity": number,
  "originalQuantity": number,
  "weight": number,
  "size": string,
  "unitType": string,
  "barcodes": string,
  "priceSell": string,
  "tax": number,
  "lineIndex": number,
  "discountDescription": string,
  "originalPrice": number,
  "unitId": string,
  "packageId": string,
  "packageLabel": string,
  "refundedQuantity": number,
  "locationId": string,
  "deli": boolean
}

export interface ORDER_DETAIL_TYPE {
  ticket: ORDER_TICKET_TYPE;
}