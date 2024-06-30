"use client";

import CartSummary from "@src/components/pages/cart/summary";
import Button from "@src/components/shared/common/UI/button";
import Input from "@src/components/shared/common/UI/input/input";
import CartTable from "@src/components/shared/pages/products/group/CartTable";
import { useCartContext } from "@src/contexts/CartContext";

export default function ClientPage() {

  const { cart } = useCartContext();

  return (
    <div className="pt-[70px] px-[16px] md:px-[80px] text-white flex gap-x-[80px] gap-y-[40px] flex-col lg:flex-row">
      <div className="flex-auto">
        <div className="flex justify-between items-center mb-[32px]">
          <h1 className="font-bold text-[32px]">Shopping cart</h1>
          <span className="inline-block h-[38px] rounded-[4px] bg-primary py-[8px] px-[25px]">{cart.products.length} items</span>
        </div>
        <CartTable />
      </div>
      <CartSummary />
    </div>
  );
}