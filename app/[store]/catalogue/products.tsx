import ProductFilter from "@src/components/pages/catalogue/ProductFilter";
import List from "@src/components/shared/pages/products/group/list";
import { useStoreContext } from "@src/contexts/StoreContext";
import { getStoreProducts } from "@src/lib/treez/product";
import { TREEZ_PRODUCT_TYPE } from "@src/lib/types/treez/product";
import { useState } from "react";

export default function Products({ products }: { products: TREEZ_PRODUCT_TYPE[] }) {
  const [filteredProducts, setFilteredProducts] = useState<TREEZ_PRODUCT_TYPE[]>(products);
  const { shortName } = useStoreContext();
  const [isLoading, setIsLoading] = useState(false);

  const filterProducts = async (categories: string[], brands: string[]) => {
    setIsLoading(true);
    const res = await getStoreProducts(shortName, "", {
      productTypeName:  {
        values: categories,
      },
      brand: {
        values: brands
      }
    });
    setFilteredProducts(res.products);
    setIsLoading(false);
  }

  return (
    <div className="mt-[80px]">
      <p className="font-bold text-[32px]">Best selling products</p>
      <div className="mt-[48px] pb-[32px] border-b border-secondary">
        <ProductFilter
          filterProducts={filterProducts}
        />
      </div>
      <div className="pt-[58px]">
        <List
          products={filteredProducts}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}