import Button from "@src/components/shared/common/UI/button";
import { useStoreContext } from "@src/contexts/StoreContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BuyNow() {

  const router = useRouter();
  const { shortName } = useStoreContext();

  const shopAll = () => {
    router.push(`/${shortName}/catalogue`);
  }

  return (
    <div className="bg-cover bg-center w-full h-[926px] mt-[80px] flex items-center justify-center" style={{backgroundImage: 'url(/images/home/buy-now.png)'}}>
      <div className="w-[535px] flex flex-col justify-center items-center">
        <p className="text-[32px] font-bold">Cannabis by</p>
        <div className="mx-[32px]">
          <Image
            src="/images/logo-lg.png"
            layout="responsive"
            width={100}
            height={50}
            alt="logo"
            className="mt-[24px]"
          />
        </div>
        <p className="mt-[23px] text-center font-[16px]">
          Cannabis continues its rise in popularity as more and more states legalize its use either as a medical or recreational drug.
        </p>
        <Button onClick={shopAll} className="bg-white text-primary font-semibold mt-[40px]" text="Shop All" />
      </div>
    </div>
  );
}