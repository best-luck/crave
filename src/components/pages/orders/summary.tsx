import Button from "@src/components/shared/common/UI/button";
import Input from "@src/components/shared/common/UI/input/input";
import { ORDER_TICKET_TYPE } from "@src/lib/types/treez/cart";

export default function OrderSummary({ ticket }: { ticket: ORDER_TICKET_TYPE }) {

  return (
    <div className='w-full lg:w-[413px]'>
      <div className="w-full rounded-[4px] border border-[#FFFFFF33] p-[24px]">
        <p className="pb-[24px] border-b border-[#FFFFFF33] text-[32px] font-bold">Order Summary</p>
        <div className="text-[16px] flex flex-col gap-y-[16px] mt-[24px] pb-[24px] border-b border-[#FFFFFF33]">
          <div className="flex justify-between">
            <span>Product&apos;s price</span>
            <span>${ticket.subTotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${ticket.tax}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>
        </div>
        <div className="my-[24px] flex justify-between font-semibold text-[20px]">
          <span>Total</span>
          <span>${ticket.total}</span>
        </div>
      </div>
      <div className=" rounded-[4px] border border-[#FFFFFF33] p-[24px]">
        <p className="pb-[24px] border-b border-[#FFFFFF33] text-[32px] font-bold">Shipping Details</p>
        <div className="mt-[27px]">
          <p>{ticket.address.street}</p>
          <p>{ticket.address.city}, {ticket.address.state} {ticket.address.zip}, USA</p>
        </div>
      </div>
    </div>
  );
}