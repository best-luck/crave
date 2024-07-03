"use client";

import { useStoreContext } from "@src/contexts/StoreContext";
import { getRetailerId } from "@src/lib/functions/client/helper";
import { RETAILER_ID } from "@src/lib/static/vars";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Category({
  category,
  image,
  size
}: {
  category: string;
  image?: string;
  size?: string;
}) {

  const router = useRouter();
  const { shortName } = useStoreContext();
  const viewCategory = () => {
    router.push(`/${shortName}/category/${category}`)
  }

  if (size === "sm") {
    return (
      <>
      <div className="border-x border-t rounded-t border-[#FFFFFF33] flex px-[4px] h-[108px] py-[4px] justify-center aligns-center cursor-pointer bg-[#260E2F]"
        onClick={viewCategory}>
        <Image
          src={image||"/images/categories/default.png"}
          width={100}
          height={100}
          alt="category"
          className="object-contain"
        />
      </div>  
      <p className="border-x border-b rounded-b border-[#FFFFFF33] font-semibold capitalize font-[14px] py-[8px] text-center bg-[#36014B]">{category}</p>
      </>
    )
  }

  return (
    <div className="w-[332px] h-[332px] flex items-end text-white p-[9px] cursor-pointer"
      onClick={viewCategory}
      style={{backgroundImage: `url(${image||"/images/categories/default.png"})`}}>
      <div className="bg-secondary w-full inline-flex justify-between items-center h-[50px] px-[16px] py-[14px]">
        <p className="font-semibold">{category}</p>
        <p>120 products</p>
      </div>
    </div>
  );
}