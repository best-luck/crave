'use client';

import { faTrash } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image";
import "./style.scss";
import { PRODUCT_CART_TYPE } from "@src/lib/types/treez/product";
import Icon from "@src/components/shared/common/UI/icon/icon";
import Counter from "@src/components/shared/common/UI/input/counter";
import { useCartContext } from "@src/contexts/CartContext";

interface ProductProps {
  product: PRODUCT_CART_TYPE
}

export default function CartItem({ product }: ProductProps) {

  const { removeItemFromCart } = useCartContext();

  const removeItem = () => {
    removeItemFromCart(product.product);
  }

  return (
    <div className="pb-[24px] border-b border-separatordark mb-[24px] ">
      <div className="flex gap-[24px]">
        <Image
          src={`${product?.product.largeImage||'/images/products/default.png'}`}
          width={145}
          height={138}
          className="w-[145px] h-[138px] "
          alt="Product"
        />
        <div className="flex-auto flex flex-col">
          <div className="flex justify-between">
            <div>
              <p className="font-medium text-[18px]">{ product?.product.productList[0].productName }</p>
              <p className="text-subtext text-[14px]">Strength: { product?.product.productList[0].weight }g</p>
            </div>
            <div>
              <Icon icon={faTrash} className="cursor-pointer" onClick={removeItem} />
            </div>
          </div>
          <div className="flex justify-between items-center mt-auto">
            <Counter
              defaultValue={product?.quantity||1}
            />
            <span className="text-[20px] font-semibold">${ product?.product.productList[0].priceSell }</span>
          </div>
        </div>
      </div>
    </div>
  );
}
