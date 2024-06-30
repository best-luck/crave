"use server";

import { getStoreProducts } from "@src/lib/treez/product";
import ClientPage from "./clientPage";
import { getSessionData } from "@src/lib/session/getSession";

export default async function Page({ params }: { params: { name: string } }) {

  const session = await getSessionData()
  const res = await getStoreProducts(session.store||"cravemonroe", params.name);
  const product = res.products[0];

  return <ClientPage product={product} />
}