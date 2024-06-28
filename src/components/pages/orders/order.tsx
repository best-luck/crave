import Button from "@src/components/shared/common/UI/button";
import Image from "next/image";

export default function Order() {
  return (
    <div className="border border-separatordark rounded-[4px] bg-[#FFFFFF0D] p-[24px] flex justify-between mb-[24px ]">
      <div className="flex flex-col">
        <p className="text-[14px] text-subtext">#230721-8917SX</p>
        <p className="mt-[7px] font-medium text-[18px]">$124.00</p>
        <div className="mt-[24px] gap-[21px] flex">
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
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-[14px] text-subtext text-right">12.11.2023, 11:00 AM</p>
        <p className="mt-[7px] font-medium text-[18px] text-right">Packaging</p>
        <Button className="mt-auto" onClick={() => {}}>Subscribe</Button>
      </div>
    </div>
  );
}