"use client";

import { faHistory, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import History from "@src/components/pages/orders/history";
import Button from "@src/components/shared/common/UI/button";
import Icon from "@src/components/shared/common/UI/icon/icon";
import { useStoreContext } from "@src/contexts/StoreContext";
import { treezLogout } from "@src/lib/treez/auth";
import { ORDER_TYPE } from "@src/lib/types/treez/cart";
import { useRouter } from "next/navigation";

export default function ClientPage({ orders }: { orders: ORDER_TYPE[] }) {

  const { shortName } = useStoreContext();
  const router = useRouter();
  
  if (orders === null) {
    logOut();
  }

  async function logOut() {
    const res = await treezLogout(shortName);
    router.push(`/${shortName}/signin`);
  }

  return (
    <div className="px-[80px] gap-[80px] flex text-white pt-[40px]">
      <div className="w-[220px] flex flex-col gap-y-[20px]">
        <Button onClick={() => {}} className="bg-transparent py-0 px-0">
          <div className='flex items-center gap-[4px]'>
            <Icon icon={faHistory} />
            <span>Order History</span>
          </div>
        </Button>
        <Button onClick={logOut} className="bg-transparent py-0 px-0 mt-auto">
          <div className='flex items-center gap-[4px]'>
            <Icon icon={faRightToBracket} />
            <span>LogOut</span>
          </div>
        </Button>
      </div>
      <div className="flex-auto">
        <History orders={orders} />
      </div>
    </div>
  );
}