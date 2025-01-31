import Button from "@src/components/shared/common/UI/button";
import Input from "@src/components/shared/common/UI/input/input";
import { useCartContext } from "@src/contexts/CartContext";
import { useRouter } from "next/navigation";

export default function CartSummary() {

  const { cart } = useCartContext();
  const router = useRouter();

  const checkout = () => {
    router.push("checkout");
  }

  return (
    <div className="w-full lg:w-[413px] rounded-[4px] border border-[#FFFFFF33] p-[24px]">
      <p className="pb-[24px] border-b border-[#FFFFFF33] text-[32px] font-bold">Cart Summary</p>
      <form className="mt-[24px]">
        <div className="flex gap-[8px]">
          <Input
            name="promo_code"
            placeholder="Promo code"
            className="flex-auto"
          />
          <Button onClick={() => {}} >Apply</Button>
        </div>
      </form>
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
        <span>${(cart.tax + cart.total).toFixed(2)}</span>
      </div>
      <Button onClick={checkout} className="w-full">Checkout</Button>
    </div>
  );
}