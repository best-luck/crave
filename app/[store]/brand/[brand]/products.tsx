import ProductFilter from "@src/components/pages/catalogue/ProductFilter";
import List from "@src/components/shared/pages/products/group/list";
import { useStoreContext } from "@src/contexts/StoreContext";
import { getStoreProducts } from "@src/lib/treez/product";
import { TREEZ_PRODUCT_TYPE } from "@src/lib/types/treez/product";
import { useRef, useState } from "react";

export default function Products({ products, brand }: { products: TREEZ_PRODUCT_TYPE[], brand: string }) {
  const [filteredProducts, setFilteredProducts] = useState<TREEZ_PRODUCT_TYPE[]>(products);
  const { shortName } = useStoreContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isQueryEnd, setIsQueryEnd] = useState(false);
  const categoriesRef = useRef<string[]>([]);
  const brandsRef = useRef<string[]>([brand]);

  const filterProducts = async (categories: string[], brands: string[]) => {
    categoriesRef.current = categories;
    setIsLoading(true);
    const res = await getStoreProducts(shortName, "", {
      productTypeName:  {
        values: categoriesRef.current
      },
      brand: {
        values: brandsRef.current
      }
    });
    setFilteredProducts(res.products);
    setIsLoading(false);
  }

  const loadMore = async () => {
    setIsLoadingMore(true);
    const res = await getStoreProducts(shortName, "", {
      productTypeName:  {
        values: categoriesRef.current,
      },
      brand: {
        values: brandsRef.current
      },
    }, filteredProducts[filteredProducts.length - 1].afterKey);
    if (res.products.length === 0)
      setIsQueryEnd(true);
    setFilteredProducts([...products, ...res.products]);
    setIsLoadingMore(false);
  }

  return (
    <div className="mt-[80px]">
      <div className="pb-[32px] border-b border-secondary">
        <ProductFilter
          filterProducts={filterProducts}
          hideBrandFilter={true}
        />
      </div>
      <div className="pt-[58px]">
        <List
          products={filteredProducts}
          isLoading={isLoading}
          loadMore = {loadMore}
          isLoadingMore={isLoadingMore}
          isQueryEnd={isQueryEnd}
        />
      </div>
    </div>
  );
}