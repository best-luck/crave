import { getOrder } from "@src/lib/treez/order";
import ClientPage from "./clientPage";

export default async function Page({ params: { id, store } }: { params:{ id: string, store: string  } }) {

  const order = await getOrder(store, id);

  return (
    <ClientPage order={order} />
  );
}