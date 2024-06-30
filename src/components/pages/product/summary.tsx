
import { useMemo, useState } from "react";
import { TREEZ_PRODUCT_TYPE } from "@src/lib/types/treez/product";
import { useCartContext } from "@src/contexts/CartContext";
import Button from "@src/components/shared/common/UI/button";
import Icon from "@src/components/shared/common/UI/icon/icon";
import Counter from "@src/components/shared/common/UI/input/counter";
import { faFacebook, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductSummary({ product }: { product: TREEZ_PRODUCT_TYPE }) {

  const [quantity, setQuantity] = useState(1);
  const { addItemToCart, cart, removeItemFromCart } = useCartContext();
  const isAdded = useMemo(() => {
    return cart.products.findIndex(_product => _product.product.productList[0].productId === product.productList[0].productId) === -1;
  }, [cart, product]);

  const onQuantityChange = (q: number) => {
    setQuantity(q);
  }
  const addItem = () => {
    addItemToCart(product, quantity);
  }
  const removeItem = () => {
    removeItemFromCart(product);
  }

  return (
    <div className="bg-[#1B0024] flex-1 p-[32px] flex flex-col">
      <div className="flex gap-[8px]">
        {
          product.classifications.map(classification => classification?<span key={`classification-${classification}`} className="bg-primary font-medium text-[14px] h-[40px] inline-flex justify-center items-center px-[10px]">{classification}</span>:'')
        }
      </div>
      <h1 className="text-[32px] font-semibold mt-[16px]">{product.productList[0].productName}</h1>
      <p className="mt-[8px] text-subtext text-[16px] font-semibold">{product.type}</p>
      <p className="mt-[32px] text-[24px] font-bold">${product.productList[0].priceSell}</p>
      <p className="mt-[32px] text-[24px] font-semibold">Product Description</p>
      <p className="mt-[16px] text-[16px]">{product.longDescription}</p>
      {
        product.effects.length ? <div>
          <p className="text-[16px] font-semibold mt-[16px]">Effects</p>
          <div className="flex">
            {
              product.effects.map(effect => !effect?<span key={`effect-${effect}`} className="bg-secondary font-medium text-[14px] h-[40px] inline-flex justify-center items-center px-[10px]">effect</span>:'')
            }
          </div>
        </div> : ''
      }
      <div className="flex gap-[8px] mt-[24px]">
        <Icon icon={faFacebook} />
        <Icon icon={faTelegram} />
        <Icon icon={faTwitter} />
      </div>
      <div className="mt-[32px] flex gap-[8px] mt-auto">
        <Counter
          defaultValue={1}
          className="h-[50px] flex-1"
          onChange={onQuantityChange}
        />
        {
          isAdded ? (
            <Button onClick={addItem} className="bg-secondary flex-1"><FontAwesomeIcon icon={faCartShopping} /><span className="ml-[10px] font-medium text-[16px]">Add to cart</span></Button>
          ): (
            <Button onClick={removeItem} className="bg-secondary flex-1"><FontAwesomeIcon icon={faRemove} /><span className="ml-[10px] font-medium text-[16px]">Remove</span></Button>
          )
        }
      </div>
    </div>
  );
}