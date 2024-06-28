import { getStoreProducts } from "@src/lib/treez/product";
import ClientPage from "./clientPage";

export default async function Page({ params }: { params: { store: string } }) {

  const res = await getStoreProducts(params.store);

  return <ClientPage params={params} products={res.products} />
}