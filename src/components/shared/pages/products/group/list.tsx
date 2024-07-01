import Product from "../product";
import { SpecialType } from "@src/lib/types/specials";
import Special from "../../specials/special";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "next/navigation";
import { TREEZ_PRODUCT_TYPE } from "@src/lib/types/treez/product";
import Button from "@src/components/shared/common/UI/button";

interface Props {
  products: TREEZ_PRODUCT_TYPE[];
  isLoading?: boolean;
  loadMore?: () => void;
  isLoadingMore?: boolean;
  isQueryEnd?: boolean;
}

export default function List(props: Props) {
  const { products, isLoading } = props;

  return (
    <div className="flex-1">
      {
        products.length ? (
          <div className="products-grid-container flex flex-wrap gap-[16px] justify-between">
            {
              products.map((product, index) => (
                <Product
                  display="Cart"
                  product={product}
                  key={`product-list-${product.productList[0].productId}-${index}`}
                />
              ))
            }
          </div>
        ) : (
          <p>
            No Products
          </p>
        )
      }
      {
        (!props.isQueryEnd && products.length && props.loadMore && props.products[props.products.length - 1].afterKey) ? <div className="mt-[48px] flex justify-center"><Button disabled={props.isLoadingMore} className="bg-transparent border-secondary border" onClick={props.loadMore}>Load More</Button></div> : ''
      }
    </div>
  );
}