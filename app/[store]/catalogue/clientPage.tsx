"use client";

import ProductFilter from "@src/components/pages/catalogue/ProductFilter";
import Community from "@src/components/pages/home/community";
import Brands from "@src/components/shared/common/UI/brands";
import Categories from "@src/components/shared/common/UI/categories";
import List from "@src/components/shared/pages/products/group/list";
import { useStoreContext } from "@src/contexts/StoreContext";
import { getStoreProducts } from "@src/lib/treez/product";
import { TREEZ_PRODUCT_TYPE } from "@src/lib/types/treez/product";
import { useState } from "react";
import Products from "./products";

export default function ClientPage({ params, products }: { params: { store: string }, products: TREEZ_PRODUCT_TYPE[] }) {

  return (
    <div className="container text-white pt-[31px]">
      <Categories
        images = {{}}
        size="sm"
      />
      <div className="mt-[32px]">
        <Brands
          images={{}}
          size="sm"
        />
      </div>
      <Products
        products={products}
      />
      <Community />
    </div>
  );
}