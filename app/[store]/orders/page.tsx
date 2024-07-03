import { getOrders } from "@src/lib/treez/order";
import ClientPage from "./clientPage";

export default async function Page({ params: { store } }: { params: { store: string } }) {
  async function _getOrders() {
    try {
      const _orders = await getOrders(store);
      return _orders;
    } catch(err) {
      return null;
    }
  }
  const orders = await _getOrders();

  return <ClientPage orders={orders} />
}