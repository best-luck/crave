'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCheck, faPlus, faRemove } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image";
import "./style.scss";
import Link from 'next/link';
import { TREEZ_PRODUCT_TYPE } from "@src/lib/types/treez/product";
import Button from "@src/components/shared/common/UI/button";
import { useCartContext } from "@src/contexts/CartContext";
import Icon from "@src/components/shared/common/UI/icon/icon";

interface ProductProps {
  product: TREEZ_PRODUCT_TYPE;
  selectProduct?: () => void;
}

export default function ProductCart({ product, selectProduct }: ProductProps) {

  const { cart, addItemToCart, removeItemFromCart } = useCartContext();
  const isAdded = cart.products.findIndex(_product => _product.product.productList[0].productId === product.productList[0].productId)!==-1;

  const addToCart = () => {
    addItemToCart(product, 1);
  }
  const removeFromCart = () => {
    removeItemFromCart(product);
  }

  return (
    <div className="bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-[9px] text-white h-full w-[332px] flex flex-col">
      <div className="flex justify-center">
        <Link href={`/shop/product/${product.productList[0].productName}`}>
          <Image
            src={product.largeImage||"/images/products/default.png"}
            alt=""
            width={200}
            height={250}
            layout="responsive"
            style={{maxHeight: 150, height: 150, width: 200}}
            className="rounded-[4px]"
          />
        </Link>
      </div>
      <div className="p-[7px]">
        <p className="mt-[17px] text-[14px] font-semibold">
          {product.categoryName}
        </p>
        <p className="font-bold font-[18px] mt-[8px] line-clamp-2">
          {product.productList[0].productName}
        </p>
        <div className='mt-[12px] mb-[26px]'>
          {
            product.subTypes.map(subType => <span className="bg-primary inline-flex justify-center items-center rounded-[4px] px-[12px] w-[116px] h-[24px] text-[12px]">{subType}</span>)
          }
        </div>
      </div>
      <div className="mt-auto flex justify-between">
        <div>
          <p className="text-[20px] font-bold">${product.productList[0].pricing.price_sell}</p>
          <p className="mt-[8px] text-[12px] text-subtext">THC {product.thc}%</p>
        </div>
        <div>
          <span className="mr-[16px]">{product.productList[0].weight}g</span>
          {
            !isAdded ?
              <Button className="h-[48px]" onClick={addToCart}><FontAwesomeIcon icon={faCartPlus} fontSize={24} /></Button> :
              <Button className="h-[48px]" onClick={removeFromCart}><FontAwesomeIcon icon={faRemove} fontSize={24} /></Button>
          }
        </div>
      </div>
    </div>
  );
}
