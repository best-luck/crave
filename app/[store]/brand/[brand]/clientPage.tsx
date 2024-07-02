"use client";

import { TREEZ_PRODUCT_TYPE } from "@src/lib/types/treez/product";
import Products from "./products";
import Breadcrumb from "@src/components/layout/breadcrumb";

export default function ClientPage({ products, brand }:  { products: TREEZ_PRODUCT_TYPE[], brand: string }) {

  const _brand = decodeURI(brand);

  return (
    <div className="text-white">
      <Breadcrumb
        link={`Homepage/Catalogue/${_brand}`}
      />
      <div className="container">
        <Products
          brand={_brand}
          products={products}
        />
      </div>
    </div>
  );
}