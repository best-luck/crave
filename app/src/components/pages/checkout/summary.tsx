import Button from "@src/components/shared/common/UI/button";
import Input from "@src/components/shared/common/UI/input/input";

export default function CheckoutSummary() {
  return (
    <div className="w-[413px] rounded-[4px] border border-[#FFFFFF33] p-[24px]">
      <p className="pb-[24px] border-b border-[#FFFFFF33] text-[32px] font-bold">Order Summary</p>
      <div className="text-[16px] flex flex-col gap-y-[16px] mt-[24px] pb-[24px] border-b border-[#FFFFFF33]">
        <div className="flex justify-between">
          <span>Product's price</span>
          <span>$100.00</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>$10.00</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>
      </div>
      <div className="my-[24px] flex justify-between font-semibold text-[20px]">
        <span>Total</span>
        <span>$110.00</span>
      </div>
      <Button onClick={() => {}} className="w-full">Order & Pay</Button>
    </div>
  );
}