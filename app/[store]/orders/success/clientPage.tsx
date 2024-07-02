"use client";

import Button from "@src/components/shared/common/UI/button";
import { useStoreContext } from "@src/contexts/StoreContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ClientPage() {

  const { shortName } = useStoreContext();
  const router = useRouter();

  const gotoHome = () => {
    router.push(`/${shortName}`);
  }

  return (
    <div className="py-[177px] md:py-[230px] flex flex-col justify-center text-white w-[339px] m-auto items-center">
      <Image
        width={100}
        height={100}
        className="w-[95px] h-[99px]"
        src="/images/order/success.png"
        alt="success"
      />
      <p className="mt-[30px] font-bold text-[40px]">Success</p>
      <Button className="mt-[32px] w-full" onClick={gotoHome}>Back to Home page</Button>
    </div>
  );
}