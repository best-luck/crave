"use client";

import "./style.scss";
import CartItem from "../product/cartitem";
import { ORDER_TICKET_ITEM_TYPE } from "@src/lib/types/treez/cart";
import Image from "next/image";

export default function OrderTable({ products }: { products: ORDER_TICKET_ITEM_TYPE[] }) {
  
  return (
    products.length ?
    <div>
      {
        products.map((product, idx) => (
          <div className="pb-[24px] border-b border-separatordark mb-[24px] " key={`cart-product-${idx}`}>
            <div className="flex gap-[24px]">
              <Image
                src='/images/products/default.png'
                width={145}
                height={138}
                className="w-[145px] h-[138px] "
                alt="Product"
              />
              <div className="flex-auto flex flex-col">
                <div className='flex justify-between w-full'>
                  <p className="font-medium text-[18px]">{ product.name }</p>
                  <p>${product.priceSell}</p>
                </div>
                <p className="text-subtext text-[14px]">Strength: { product.weight }g</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>:
    <h2 className="font-bold text-xl text-gray-400">No Items Yet</h2>
  )
}