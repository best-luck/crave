import Button from "@src/components/shared/common/UI/button";
import CheckoutProduct from "@src/components/shared/pages/products/product/checkout";
import { useCartContext } from "@src/contexts/CartContext";

export default function CheckoutSummary() {

  const { cart } = useCartContext();

  return (
    <div className="w-[413px]">
      <div className="rounded-[4px] border border-[#FFFFFF33] p-[24px]">
        <p className="pb-[24px] border-b border-[#FFFFFF33] text-[32px] font-bold">Order Summary</p>
        <div className="text-[16px] flex flex-col gap-y-[16px] mt-[24px] pb-[24px] border-b border-[#FFFFFF33]">
          <div className="flex justify-between">
            <span>Product&apos;s price</span>
            <span>${cart.total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${cart.tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>
        </div>
        <div className="my-[24px] flex justify-between font-semibold text-[20px]">
          <span>Total</span>
          <span>${(cart.tax+cart.total).toFixed(2)}</span>
        </div>
        <Button onClick={() => {}} className="w-full">Order & Pay</Button>
      </div>
      <div className="mt-[64px]">
        <p className="font-bold text-[32px]">Products</p>
        <div className="mt-[24px] flex flex-col gap-y-[16px]">
          {
            cart.products.map((product, idx) => <CheckoutProduct product={product} key={`checkout-product-${idx}`} />)
          }
        </div>
      </div>
    </div>
  );
}