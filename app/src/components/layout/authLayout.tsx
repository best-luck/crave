import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="px-container items-center flex pt-[48px] pb-[80px] text-white gap-x-[80px] border-b border-secondary">
      <div className="min-w-[500px]">
        {children}
      </div>
      <Image
        width={100}
        height={100}
        layout="responsive"
        src="/images/auth/placeholder.png"
        alt="auth-placeholder"
        />
    </div>
  );
}
