"use client";

import ProductSummary from "@src/components/pages/product/summary";
import ProductsSlier from "@src/components/shared/pages/products/group/slider";
import { useStoreContext } from "@src/contexts/StoreContext";
import { getStoreProducts } from "@src/lib/treez/product";
import { TREEZ_PRODUCT_TYPE } from "@src/lib/types/treez/product";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ClientPage({ product }: { product: TREEZ_PRODUCT_TYPE }) {

  const [recommendedProducts, setRecommendedProducts] = useState<TREEZ_PRODUCT_TYPE[]>([]);
  const store = useStoreContext();

  useEffect(() => {
    (async() => {
      const filters = {
        brand: {
          values: [product.brand]
        }
      };
      const res = await getStoreProducts(store.shortName, "", filters);
      setRecommendedProducts(res.products);
    })();
  }, []);

  return (
    <div className="text-white">
      <div className="bg-primary flex px-[48px] py-[32px] gap-[49px]">
        <ProductSummary
          product={product}
        />
        <div className="flex-1">
          <Image
            src={product.largeImage||"/images/products/default.png"}
            width={50}
            height={50}
            layout="responsive"
            alt="product"
          />
        </div>
      </div>
      <div className="container mt-[80px]">
        <p className="text-[32px] font-semibold mb-[48px]">{product.brand} recommendation</p>
        <ProductsSlier
          products={recommendedProducts}
        />
      </div>
    </div>
  );
}