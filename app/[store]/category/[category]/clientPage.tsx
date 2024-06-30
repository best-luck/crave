"use client";

import { TREEZ_PRODUCT_TYPE } from "@src/lib/types/treez/product";
import Products from "./products";
import Breadcrumb from "@src/components/layout/breadcrumb";

export default function ClientPage({ products, category }:  { products: TREEZ_PRODUCT_TYPE[], category: string }) {
  return (
    <div className="text-white">
      <Breadcrumb
        link={`Homepage/Catalogue/${category}`}
      />
      <div className="container">
        <Products
          category={category}
          products={products}
        />
      </div>
    </div>
  );
}