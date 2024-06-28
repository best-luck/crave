import Product from "../product";
import { SpecialType } from "@src/lib/types/specials";
import Special from "../../specials/special";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "next/navigation";
import { TREEZ_PRODUCT_TYPE } from "@src/lib/types/treez/product";

interface Props {
  products: TREEZ_PRODUCT_TYPE[];
}

export default function List(props: Props) {
  const { products } = props;

  return (
    <div className="flex-1">
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
    </div>
  );
}