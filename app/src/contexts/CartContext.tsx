"use client";

import useLocalStorage from "@src/hooks/useLocalStorage";
import { TREEZ_CART_TYPE } from "@src/lib/types/treez/cart";
import { TREEZ_CONFIG_TYPE } from "@src/lib/types/treez/config";
import { PRODUCT_CART_TYPE, TREEZ_PRODUCT_TYPE } from "@src/lib/types/treez/product";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface CART {
  cart: TREEZ_CART_TYPE;
  addItemToCart: (product: TREEZ_PRODUCT_TYPE, quantity: number) => void;
  removeItemFromCart: (product: TREEZ_PRODUCT_TYPE) => void;
  updateItemInCart: (product: TREEZ_PRODUCT_TYPE, quantity: number) => void;
}

const CartContext = createContext<CART>({
  cart: {
    products: [],
    total: 0
  },
  addItemToCart: (product: TREEZ_PRODUCT_TYPE, quantity: number) => {},
  removeItemFromCart: (product: TREEZ_PRODUCT_TYPE) => {},
  updateItemInCart: (product: TREEZ_PRODUCT_TYPE, quantity: number) => {},
});

export function CartContextProvider({ children, store } : { children: ReactNode, store: string }) {
  const [cart, setCart] = useLocalStorage<TREEZ_CART_TYPE>(
    `${store}-cart`,
    {
      products: [],
      total: 0
    }
  );

  const calculate = (products: PRODUCT_CART_TYPE[]) : number=> {
    return products.reduce((total, product:PRODUCT_CART_TYPE) => total+parseFloat(product.product.productList[0].priceSell)*product.quantity, 0);
  }

  const addItemToCart = (product: TREEZ_PRODUCT_TYPE, quantity: number) => {
    const products = [...cart.products, { product, quantity }];
    const total = calculate(products);
    setCart({
      total,
      products,
    });
  }
  const removeItemFromCart = (product: TREEZ_PRODUCT_TYPE) => {
    const products = cart.products.filter(_product => _product.product.productList[0].productId !== product.productList[0].productId);
    const total = calculate(products);
    setCart({
      total,
      products,
    });
  }
  const updateItemInCart = (product: TREEZ_PRODUCT_TYPE, quantity: number) => {
    const products = cart.products.map(_product => _product.product.productList[0].productId === product.productList[0].productId ? ({..._product, quantity}) : _product);
    const total = calculate(products);
    setCart({
      total,
      products,
    });
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        updateItemInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  return context;
}

export default CartContext;