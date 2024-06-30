import { getStoreProducts } from "@src/lib/treez/product";
import ClientPage from "./clientPage";

export default async function Page({ params: { brand, store } }:  { params: { brand: string, store: string } } ) {

  const res = await getStoreProducts(store, "", { brand: { values: [brand] } });

  return <ClientPage products={res.products} brand={brand} />
}