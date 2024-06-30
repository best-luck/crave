"use client";

import AuthLayout from "@src/components/layout/authLayout";
import Button from "@src/components/shared/common/UI/button";
import Input from "@src/components/shared/common/UI/input/input";
import Link from "next/link";

export default function ClientPage() {
  return (
    <AuthLayout>
      <form>
        <div className="w-full md:w-3/4 text-white mb-[32px]">
          <h1 className="text-[40px] md:text-[48px] text-center md:text-left font-bold mb-[24px]">Forgot your password?</h1>
          <p className="text-center md:text-left mb-0 text-subtext">Simply enter your E-mail to recover it</p>
        </div>
        <div>
          <Input
            name="email"
            placeholder="your@email.com"
            label="Email"
            className="mb-[16px]"
          />
        </div>
        <Button onClick={() => {}} className="w-full mb-[24px]">Send</Button>
        <p className="text-center mb-0 text-[14px]">
          <span className="me-[4px] text-subtext">Oh wait. I remember now.</span><Link href="signin">Login</Link>
        </p>
      </form>
    </AuthLayout>
  );
};