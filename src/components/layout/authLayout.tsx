import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container items-center flex pt-[48px] text-white gap-x-[80px] ">
      <div className="w-full md:w-[500px]">
        {children}
      </div>
      <div className="flex-auto hidden md:block">
        <Image
          width={100}
          height={100}
          layout="responsive"
          src="/images/auth/placeholder.png"
          alt="auth-placeholder"
          />
      </div>
    </div>
  );
}
