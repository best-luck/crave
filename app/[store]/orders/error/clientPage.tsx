"use client";

import Button from "@src/components/shared/common/UI/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ClientPage() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  }

  return (
    <div className="py-[177px] md:py-[230px] flex flex-col justify-center text-white w-[339px] m-auto items-center">
      <Image
        width={100}
        height={100}
        className="w-[95px] h-[99px]"
        src="/images/order/fail.png"
        alt="fail"
      />
      <p className="mt-[30px] font-bold text-[40px]">Error</p>
      <Button className="mt-[32px] w-full" onClick={goBack}>Back</Button>
    </div>
  );
}