import { getStoreProducts } from "@src/lib/treez/product";
import ClientPage from "./clientPage";

export default async function Page({ params: { category, store } }:  { params: { category: string, store: string } } ) {

  const res = await getStoreProducts(store, "", { productTypeName: { values: [category] } });

  return <ClientPage products={res.products} category={decodeURI(category)} />
}