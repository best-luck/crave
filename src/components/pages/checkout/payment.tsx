import Radio from "@src/components/shared/common/UI/input/radio";
import Image from "next/image";

export default function Payment() {
  return (
    <div className="mt-[45px]">
      <p className="text-[32px] font-bold">Payment</p>
      <div className="mt-[32px] border border-separatordark rounded-[4px]">
        <div className="p-[24px] border-b border-separatordark flex gap-[24px] items-center">
          <Radio
            name="payment_cash"
            checked={true}
          />
          <Image
            src="/images/checkout/cash.png"
            width={48}
            height={32}
            alt="cash"
          />
          <span className="font-medium text-[16px]">Cash</span>
        </div>
        <div className="p-[24px] flex gap-[24px] items-center">
          <Radio
            name="payment_treez"
            checked={false}
          />
          <Image
            src="/images/checkout/treez.png"
            width={48}
            height={32}
            alt="cash"
          />
          <div>
            <p className="font-medium text-[16px]">Treez</p>
            <p className="mt-[9px] text-[14px] text-subtext">
              Make checkout easier with TreezPay. Securely link your bank account one time, and enable one-click payments for all future purchases.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};