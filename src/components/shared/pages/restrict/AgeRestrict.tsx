'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useState } from "react";

interface Props {
  confirmModal: () => void;
}

export default function AgeRestrictComponent(props: Props) {

  const { confirmModal } = props;
  const [underAge, setUnderAge] = useState<boolean>(false);

  return (
    <div className="rounded-lg bg-black text-white items-center justify-center flex flex-col justify-center w-[404px] h-[366px] agegate-wrapper py-[48px] px-[54.5px]">
      {
        !underAge ? <>
          <Image
            src="/images/logo.png"
            width={108}
            height={50}
            alt="logo"
            />
          <h2 className="font-semibold text-[32px] mt-[24px] text-center">Welcome to Crave</h2>
          <h3 className="mt-[8px] font-medium text-[16px]">Are you over 21 years of age?</h3>
          <div className="flex flex-col text-black justify-center mt-[32px] font-medium gap-[16px] w-full">
            <button
              className="uppercase rounded-[4px] h-[50px] w-full bg-white"
              onClick={confirmModal}
            >
              Yes
            </button>
            <button
              className="uppercase border rounded-[4px] h-[50px] bg-white"
              onClick={() => setUnderAge(true)}
            >
              No
            </button>
          </div>
        </> : <>
        <h1 className="uppercase font-bold text-2xl mx-3 md:text-xl mt-3 text-center">
          WE&rsquo;RE SORRY, WE TAKE SERIOUSLY OUR RESPONSIBILITY TO LIMIT WEBSITE ACCESS TO ADULTS 21 YEARS AND OLDER OR HAVE A MEDICAL CARD.
        </h1>
        <button
          className="uppercase bg-transparent border rounded-lg px-3 py-2 mt-3"
          onClick={() => setUnderAge(false)}
        >
          Back
        </button>
        </>
      }
    </div>
  );
}
