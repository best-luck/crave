import { getOrders } from "@src/lib/treez/order";
import ClientPage from "./clientPage";

export default async function Page({ params: { store } }: { params: { store: string } }) {
  const orders = await getOrders(store);

  return <ClientPage orders={orders} />
}