"use client";

import Banner from "@src/components/layout/banner";
import BuyNow from "@src/components/pages/home/buy-now";
import Community from "@src/components/pages/home/community";
import Video from "@src/components/pages/home/video";
import Button from "@src/components/shared/common/UI/button";
import Categories from "@src/components/shared/common/UI/categories";
import ProductsSlier from "@src/components/shared/pages/products/group/slider";
import { TREEZ_PRODUCT_TYPE } from "@src/lib/types/treez/product";

export default function ClientPage({ products }: { products: TREEZ_PRODUCT_TYPE[] }) {

  return (
    <>
      <Banner />
      <div className="px-container text-white mt-[80px]">
        <div>
          <div className="flex justify-between items-center mb-[54px]">
            <h2 className="font-semibold text-[32px]">Our Categories</h2>
            <Button onClick={() => {}}>Shop All</Button>
          </div>
          <Categories
            images = {{}}
          />
        </div>
        <div className="mt-[80px]">
          <div className="flex justify-between items-center mb-[54px]">
            <h2 className="font-semibold text-[32px]">Best-selling products</h2>
            <Button onClick={() => {}}>Shop All</Button>
          </div>
          <ProductsSlier
            products={products}
          />
        </div>
        <Video />
        <BuyNow />
        <Community />
      </div>
    </>
  );
}