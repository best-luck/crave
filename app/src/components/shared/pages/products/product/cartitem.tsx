'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { ProductType, ProductVariantType } from "../../../../../lib/types/product";
import Image from "next/image";
import { getRetailerId } from "@src/lib/functions/client/helper";
import "./style.scss";
import Link from 'next/link';
import { useState } from "react";
import { addItemToCart, removeItemFromCart } from "@src/lib/actions/frontend/checkout";
import { usePathname, useSearchParams } from "next/navigation";
import { RETAILER_ID } from "@src/lib/static/vars";
import { CartProductType } from "@src/lib/types/checkout";
import Select from "@src/components/shared/common/UI/select";
import { quantityOptions } from "../details/ProductMain";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { TREEZ_PRODUCT_TYPE } from "@src/lib/types/treez/product";
import Icon from "@src/components/shared/common/UI/icon/icon";
import Counter from "@src/components/shared/common/UI/input/counter";

interface ProductProps {
  product?: TREEZ_PRODUCT_TYPE
}

export default function CartItem({ product }: ProductProps) {

  return (
    <div className="pb-[24px] border-b border-separatordark mb-[24px] ">
      <div className="flex gap-[24px]">
        <Image
          src="/images/products/default.png"
          width={145}
          height={138}
          className="w-[145px] h-[138px] "
          alt="Product"
        />
        <div className="flex-auto flex flex-col">
          <div className="flex justify-between">
            <div>
              <p className="font-medium text-[18px]">Name</p>
              <p className="text-subtext text-[14px]">Strength: 3.5g</p>
            </div>
            <div>
              <Icon icon={faTrash} />
            </div>
          </div>
          <div className="flex justify-between items-center mt-auto">
            <Counter
              defaultValue={0}
            />
            <span className="text-[20px] font-semibold">$12.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
