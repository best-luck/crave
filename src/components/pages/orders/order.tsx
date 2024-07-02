import Button from "@src/components/shared/common/UI/button";
import { ORDER_TYPE } from "@src/lib/types/treez/cart";
import Image from "next/image";
import Link from "next/link";

export default function Order({ order }: { order: ORDER_TYPE }) {
  return (
    <div className="border border-separatordark rounded-[4px] bg-[#FFFFFF0D] p-[24px] flex justify-between mb-[24px ]">
      <div className="flex flex-col">
        <p className="text-[14px] text-subtext"><Link href={`orders/${order.orderId}`}>#{order.orderId}</Link></p>
        <p className="mt-[7px] font-medium text-[18px]"></p>
        {/* <div className="mt-[24px] gap-[21px] flex">
          <Image
            src="/images/products/default.png"
            width={72}
            height={72}
            className="w-[72px] h-[72px]"
            alt="product"
          />
          <Image
            src="/images/products/default.png"
            width={72}
            height={72}
            className="w-[72px] h-[72px]"
            alt="product"
          />
          <Image
            src="/images/products/default.png"
            width={72}
            height={72}
            className="w-[72px] h-[72px]"
            alt="product"
          />
          <Image
            src="/images/products/default.png"
            width={72}
            height={72}
            className="w-[72px] h-[72px]"
            alt="product"
          />
        </div> */}
      </div>
      <div className="flex flex-col">
        <p className="text-[14px] text-subtext text-right">{new Date(order.dateCreated).toDateString()}</p>
        <p className="mt-[7px] font-medium text-[18px] text-right">{order.status}</p>
        {/* <Button className="mt-auto" onClick={() => {}}>Subscribe</Button> */}
      </div>
    </div>
  );
}