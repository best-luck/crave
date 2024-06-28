import { PRODUCT_CART_TYPE } from "@src/lib/types/treez/product";
import Image from "next/image";

export default function CheckoutProduct({ product }: { product: PRODUCT_CART_TYPE }) {
  return (
    <div className="flex text-white gap-[24px]">
      <Image
        width={80}
        height={80}
        className="w-[80px] h-[80px]"
        alt="image"
        src={product.product.largeImage||"/images/products/default.png"}
      />
      <div className="flex-auto">
        <div className="flex justify-between">
          <span className="font-medium text-[18px] w-[200px] truncate">{ product.product.productList[0].productName }</span>
          <span className="text-[14px] text-subtext">Qty: {product.quantity}</span>
        </div>
        <div className="mt-[9px] flex justify-between">
          <span className="text-[14px] text-subtext">Strength: {product.product.productList[0].weight}g</span>
          <span className="font-medium text-[20px]">${(product.quantity * parseFloat(product.product.productList[0].priceSell)).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}