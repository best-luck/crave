"use client";

import CheckoutSummary from "@src/components/pages/checkout/summary";
import ContactInfoForm from "@src/components/pages/checkout/contact";
import Payment from "@src/components/pages/checkout/payment";
import Shipping from "@src/components/pages/checkout/shipping";
import { FormEvent } from "react";
import { makeOrder } from "@src/lib/treez/order";
import { useStoreContext } from "@src/contexts/StoreContext";
import { useCartContext } from "@src/contexts/CartContext";

export default function ClientPage() {

  const { shortName } = useStoreContext();
  const { cart } = useCartContext();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const items = cart.products.map(product => ({productId: product.product.productList[0].productId, quantity: product.quantity}));
    const res = await makeOrder(shortName, "DELIVERY", items);
    console.log(res.data);
  }

  return (
    <form className="flex flex-col lg:flex-row gap-x-[80px] gap-y-[24px] text-white pt-[70px] px-[16px] md:px-[80px]" onSubmit={onSubmit}>
      <div className="flex-auto">
        <ContactInfoForm />
        <Shipping />
        <Payment />
      </div>
      <div className="w-full lg:w-[413px]">
        <CheckoutSummary />
      </div>
    </form>
  );
}