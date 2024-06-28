"use client";

import CheckoutSummary from "@src/components/pages/checkout/summary";
import ContactInfoForm from "@src/components/pages/checkout/contact";
import Payment from "@src/components/pages/checkout/payment";
import Shipping from "@src/components/pages/checkout/contact";

export default function ClientPage() {
  return (
    <div className="flex gap-[80px] text-white pt-[70px] px-[80px]">
      <div className="flex-auto">
        <ContactInfoForm />
        <Shipping />
        <Payment />
      </div>
      <div className="w-[413px]">
        <CheckoutSummary />
      </div>
    </div>
  );
}