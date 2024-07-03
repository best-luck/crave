"use client";

import CheckoutSummary from "@src/components/pages/checkout/summary";
import ContactInfoForm from "@src/components/pages/checkout/contact";
import Payment from "@src/components/pages/checkout/payment";
import Shipping from "@src/components/pages/checkout/shipping";
import { FormEvent, useState } from "react";
import { makeOrder } from "@src/lib/treez/order";
import { useStoreContext } from "@src/contexts/StoreContext";
import { useCartContext } from "@src/contexts/CartContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ClientPage() {

  const { shortName, pickupAddresses } = useStoreContext();
  const { cart, clearCart } = useCartContext();
  const [data, setData] = useState();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log('here');
    e.preventDefault();
    const items = cart.products.map(product => ({productId: product.product.productList[0].productId, quantity: product.quantity}));
    setIsLoading(true);
    const res = await makeOrder(shortName, pickupAddresses[0], items);
    setIsLoading(false);
    if (res.status === "Address") {
      toast.error(res.message);
    } else if (res.status === "OK") {
      clearCart();
      router.push(`/${shortName}/orders/success`);
    } else {
      router.push(`/${shortName}/orders/error`);
    }
  }

  return (
    <form className="flex flex-col lg:flex-row gap-x-[80px] gap-y-[24px] text-white pt-[70px] px-[16px] md:px-[80px]" onSubmit={onSubmit}>
      <div className="flex-auto">
        <ContactInfoForm />
        <Shipping onChangeData={(_data) => setData(_data)} />
        <Payment />
      </div>
      <div className="w-full lg:w-[413px]">
        <CheckoutSummary loading={isLoading} />
      </div>
    </form>
  );
}