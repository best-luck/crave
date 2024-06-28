"use client";

import { getRetailerId } from "@src/lib/functions/client/helper";
import { RETAILER_ID } from "@src/lib/static/vars";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Brand({
  brand,
  image,
  size
}: {
  brand: string;
  image?: string;
  size?: string;
}) {

  const router = useRouter();
  const retailerId = RETAILER_ID;
  const viewCategory = () => {
    // if (category === "all")
    //   router.push(`/shop`)
    // else
    //   router.push(`/shop/category/${category}`)
  }

  if (size === "sm") {
    return (
      <div className="max-w-[100px]"
        onClick={viewCategory}>
        <Image
          src={image||"/images/categories/default.png"}
          width={100}
          height={100}
          alt="category"
          className="w-[100px] h-[100px]"
        />
        <p className="font-semibold font-[14px] font-semibold text-center mt-[12px] line-clamp-2">{brand}</p>
      </div>  
    )
  }

  return (
    <div className="w-[332px] h-[332px] flex items-end text-white p-[9px]"
      onClick={viewCategory}
      style={{backgroundImage: `url(${image||"/images/categories/default.png"})`}}>
      <div className="bg-secondary w-full inline-flex justify-between items-center h-[50px] px-[16px] py-[14px]">
        <p className="font-semibold">{brand}</p>
        <p>120 products</p>
      </div>
    </div>
  );
}