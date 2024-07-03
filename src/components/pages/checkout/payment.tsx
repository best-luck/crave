import Radio from "@src/components/shared/common/UI/input/radio";
import Image from "next/image";
import { useState } from "react";

export default function Payment() {

  const [paymentMethod, setPaymentMethod] = useState("Cash");

  return (
    <div className="mt-[45px]">
      <p className="text-[32px] font-bold">Payment</p>
      <div className="mt-[32px] border border-separatordark rounded-[4px]">
        <div className="p-[24px] border-b border-separatordark flex gap-[24px] items-center">
          <Radio
            name="payment_cash"
            checked={paymentMethod==="Cash"}
            onClick={() => setPaymentMethod("Cash")}
          />
          <Image
            src="/images/checkout/cash.png"
            width={48}
            height={32}
            alt="cash"
          />
          <span className="font-medium text-[16px]">Cash</span>
        </div>
      </div>
    </div>
  )
};