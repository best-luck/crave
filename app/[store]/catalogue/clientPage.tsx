"use client";

import ProductFilter from "@src/components/pages/catalogue/ProductFilter";
import Community from "@src/components/pages/home/community";
import Brands from "@src/components/shared/common/UI/brands";
import Categories from "@src/components/shared/common/UI/categories";
import List from "@src/components/shared/pages/products/group/list";
import { getStoreProducts } from "@src/lib/treez/product";
import { TREEZ_PRODUCT_TYPE } from "@src/lib/types/treez/product";

export default async function ClientPage({ params, products }: { params: { store: string }, products: TREEZ_PRODUCT_TYPE[] }) {

  return (
    <div className="px-container text-white pt-[31px]">
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
      <div className="mt-[80px]">
        <p className="font-bold text-[32px]">Best selling products</p>
        <div className="mt-[48px] pb-[32px] border-b border-secondary">
          <ProductFilter />
        </div>
        <div className="pt-[58px]">
          <List
            products={products}
          />
        </div>
      </div>
      <Community />
    </div>
  );
}