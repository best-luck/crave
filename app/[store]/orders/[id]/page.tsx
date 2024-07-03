import { getOrder } from "@src/lib/treez/order";
import ClientPage from "./clientPage";

export default async function Page({ params: { id, store } }: { params:{ id: string, store: string  } }) {

  let order = null;
  try {
    order = await getOrder(store, id);
  } catch(err) {
    
  }

  return (
    <ClientPage order={order} />
  );
}