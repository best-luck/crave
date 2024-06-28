"use client";

import { faHistory, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import History from "@src/components/pages/orders/history";
import Button from "@src/components/shared/common/UI/button";
import Icon from "@src/components/shared/common/UI/icon/icon";

export default function ClientPage() {
  return (
    <div className="px-[80px] gap-[80px] flex text-white pt-[40px]">
      <div className="w-[220px] flex flex-col gap-y-[20px]">
        <Button onClick={() => {}} className="bg-transparent px-0 py-0">
          <div className='flex items-center gap-[4px]'>
            <Icon icon={faUser} />
            <span>My Account</span>
          </div>
        </Button>
        <Button onClick={() => {}} className="bg-transparent py-0 px-0">
          <div className='flex items-center gap-[4px]'>
            <Icon icon={faHistory} />
            <span>Order History</span>
          </div>
        </Button>
        <Button onClick={() => {}} className="bg-transparent py-0 px-0 mt-auto">
          <div className='flex items-center gap-[4px]'>
            <Icon icon={faRightToBracket} />
            <span>LogOut</span>
          </div>
        </Button>
      </div>
      <div className="flex-auto">
        <History />
      </div>
    </div>
  );
}