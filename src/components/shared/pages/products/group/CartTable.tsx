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

export default function CartTable() {

  const router = useRouter();
  const items = [];
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
    !items.length ?
    <div>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>:
    <h1 className="font-bold text-xl text-gray-400">No Items Yet</h1>
  )
}