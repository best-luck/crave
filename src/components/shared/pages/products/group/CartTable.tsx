"use client";

import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartProductType } from "@src/lib/types/checkout";
import Image from "next/image";

import "./style.scss";
import { getRetailerId } from "@src/lib/functions/client/helper";
import { removeItemFromCart } from "@src/lib/actions/frontend/checkout";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Icon from "@src/components/shared/common/UI/icon/icon";
import Counter from "@src/components/shared/common/UI/input/counter";
import CartItem from "../product/cartitem";
import { useCartContext } from "@src/contexts/CartContext";

export default function CartTable() {

  const router = useRouter();
  const { cart } = useCartContext();
  console.log(cart);
  const removeItem = (itemId: string) => {
    removeItemFromCart(itemId)
      .then(() => {
        router.refresh();
        toast.success('Item removed from cart!');
      })
      .catch(err => {

      });
  }
  
  return (
    cart.products.length ?
    <div>
      {
        cart.products.map((product, idx) => <CartItem key={`cart-product-${idx}`} product={product} />)
      }
    </div>:
    <h2 className="font-bold text-xl text-gray-400">No Items Yet</h2>
  )
}