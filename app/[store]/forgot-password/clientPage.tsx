"use client";

import AuthLayout from "@src/components/layout/authLayout";
import Button from "@src/components/shared/common/UI/button";
import Input from "@src/components/shared/common/UI/input/input";
import { useStoreContext } from "@src/contexts/StoreContext";
import { forgotPassword } from "@src/lib/treez/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function ClientPage() {

  const [email, setEmail] = useState("");
  const { shortName } = useStoreContext();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await forgotPassword({ email }, shortName);
    if (res.status === "OK") {
      toast.success("Check your inbox");
      router.push(`/${shortName}/new-password`);
    } else {
      toast.error("Something went wrong. Please try again later!");
    }
    setIsLoading(false);
  }

  return (
    <AuthLayout>
      <form onSubmit={onSubmit}>
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
            onChange={onChange}
          />
        </div>
        <Button onClick={() => {}} type="submit" className="w-full mb-[24px]" disabled={isLoading}>Send</Button>
        <p className="text-center mb-0 text-[14px]">
          <span className="me-[4px] text-subtext">Oh wait. I remember now.</span><Link href="signin">Login</Link>
        </p>
      </form>
    </AuthLayout>
  );
};