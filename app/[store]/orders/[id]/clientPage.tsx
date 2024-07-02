"use client";

import OrderSummary from "@src/components/pages/orders/summary";
import OrderTable from "@src/components/shared/pages/products/group/OrderTable";
import { ORDER_DETAIL_TYPE } from "@src/lib/types/treez/cart";

export default function ClientPage({ order }: { order: ORDER_DETAIL_TYPE }) {
  const ticket = order.ticket;

  return (
    <div className="pt-[70px] px-[16px] md:px-[80px] text-white flex gap-x-[80px] gap-y-[40px] flex-col lg:flex-row">
      <div className="flex-auto">
        <p className="font-semibold text-[24px]">#{ticket.orderId}</p>
        <p className="mt-[8px] text-subtext">{new Date(ticket.dateCreated).toISOString()}</p>
        <div className="flex justify-between items-center mb-[32px]">
          <h1 className="font-bold text-[32px]">List of products</h1>
          <span className="inline-block h-[38px] rounded-[4px] bg-primary py-[8px] px-[25px]">{ticket.items.length} items</span>
        </div>
        <OrderTable products={ticket.items} />
      </div>
      <OrderSummary ticket={ticket} />
    </div>
  );
}