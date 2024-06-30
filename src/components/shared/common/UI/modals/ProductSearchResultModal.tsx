import { stringSearchProducts } from "@src/lib/dutchie/products";
import { ProductType } from "@src/lib/types/product";
import { useEffect, useRef, useState } from "react";
import Product from "@src/components/shared/pages/products/product";
import useLocalStorage from "@src/hooks/useLocalStorage";
import { getStoreProducts } from "@src/lib/treez/product";
import { useStoreContext } from "@src/contexts/StoreContext";
import ProductsSlier from "@src/components/shared/pages/products/group/slider";
import { TREEZ_PRODUCT_TYPE } from "@src/lib/types/treez/product";
import Button from "../button";
import useComponentVisible from "@src/hooks/useComponentVisible";
import { useRouter } from "next/navigation";

interface Props {
  query: string;
  hideModal: () => void;
}

export default function ProductSearchResultModal({ query, hideModal }: Props) {

  const [products, setProducts] = useState<TREEZ_PRODUCT_TYPE[]>([]);
  const [queries, setQuries] = useLocalStorage<string[]>("queries", []);
  const [category, setCategory] = useState("");
  const { shortName, categories } = useStoreContext();
  const { ref, isComponentVisible } = useComponentVisible(true);
  const router = useRouter();

  useEffect(() => {
    (async() => {
      if (query) {
        setQuries([query, ...queries].slice(0, 5));
      }
      let filter: any = {};
      if (category) {
        filter["productTypeName"] = {
          values: [category]
        }
      }
      const res = await getStoreProducts(shortName, query, filter);
      setProducts(res.products);
    })();
  }, [query]);
  useEffect(() => {
    if (!isComponentVisible)
      hideModal();
  }, [isComponentVisible]);
  const viewAll = () => {
    router.push(`/${shortName}/catalogue`);
  }

  return (
    <div className="fixed z-[99999] top-[140px] px-[43px] w-full left-0">
      <div
        className="bg-[#1B0024] rounded-[4px] p-[24px] flex flex-col md:flex-row gap-y-[24px]"
        ref={ref}>
        <div className="min-w-[254px] text-[16px] font-semibold">
          <div className="flex flex-col gap-y-[16px]">
            <p className="text-subtext">Search History</p>
            {
              queries.map((query, idx) => <p key={`search-history-${idx}`}>{query}</p>)
            }
          </div>
          <div className="flex flex-col gap-y-[16px] mt-[32px]">
            <p className="text-subtext">Categories</p>
            {
              categories.map((_category, idx) => <p key={`search-category-${idx}`} className={`cursor-pointer ${_category.name===category?'text-white':'text-subtext'}`} onClick={() => setCategory(_category.name)}>{_category.name}</p>)
            }
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between mb-[16px] ">
            <span className="text-semibold text-[32px]">Found Products</span>
            <Button onClick={viewAll}>View all</Button>
          </div>
          <ProductsSlier
            products={products}
            breakpoints={{
              0: { slidesPerView: 1 },
              1000: { slidesPerView: 2 },
              1500: { slidesPerView: 3 },
            }}
          />
        </div>
      </div>
    </div>
  );
}