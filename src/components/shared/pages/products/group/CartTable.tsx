"use client";

import "./style.scss";
import CartItem from "../product/cartitem";
import { useCartContext } from "@src/contexts/CartContext";

export default function CartTable() {

  const { cart } = useCartContext();
  
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