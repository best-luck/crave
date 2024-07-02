import { ORDER_TYPE } from "@src/lib/types/treez/cart";
import Order from "./order";

export default function History({ orders }: { orders: ORDER_TYPE[] }) {
  return (
    <div>
      <h1 className="font-[32px] font-bold">Order History</h1>
      <div className="mt-[30px]">
        {
          orders.map(order => <Order key={`order-${order.orderId}`} order={order} />)
        }
      </div>
    </div>
  );
}