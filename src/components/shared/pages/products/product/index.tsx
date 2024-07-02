import { TREEZ_PRODUCT_TYPE } from "@src/lib/types/treez/product";
import { ProductDisplayType, ProductType } from "../../../../../lib/types/product";
import ProductCart from "./cart";
import ProductListing from "./listing";
import ProductShow from "./show";

export default function Product({ display, product, selectProduct, isFetching }: { display: ProductDisplayType, product: TREEZ_PRODUCT_TYPE, selectProduct?: () => void, isFetching?: boolean }) {
  return (
    display==="Cart" ?
      <div><ProductCart product={product} selectProduct={selectProduct} isFetching={isFetching} /></div> : <></>
  );
}
