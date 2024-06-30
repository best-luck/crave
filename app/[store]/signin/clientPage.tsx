"use client";

import AuthLayout from "@src/components/layout/authLayout";
import Button from "@src/components/shared/common/UI/button";
import Input from "@src/components/shared/common/UI/input/input";
import { useStoreContext } from "@src/contexts/StoreContext";
import { signIn } from "@src/lib/treez/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function ClientPage() {

  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { shortName } = useStoreContext();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await signIn(data, shortName);
    if (res.status === "OK") {
      router.push("/");
    } else {
      toast.error("Email or Password Incorrect!");
    }
    setIsLoading(false);
  }

  return (
    <AuthLayout>
      <form onSubmit={onSubmit}>
        <div className="w-full md:w-3/4 text-white mb-[32px]">
          <h1 className="text-[40px] md:text-[48px] text-center md:text-left font-bold mb-[24px]">Sign In</h1>
          <p className="text-center md:text-left mb-0 text-subtext">Signin to your account to use all benefits and features of Crave</p>
        </div>
        <div>
          <Input
            name="email"
            placeholder="your@email.com"
            label="Email"
            className="mb-[16px]"
            onChange={onChange}
          />
          <Input
            name="password"
            placeholder="Enter a password"
            label="Password"
            className="mb-[12px]"
            type="password"
            onChange={onChange}
          />
          <div className="flex justify-end mb-[32px]">
            <Link href="forgot-password">Forgot password?</Link>
          </div>
        </div>
        <Button onClick={() => {}} type="submit" className="w-full mb-[24px]" disabled={isLoading}>Sign in</Button>
        <p className="text-center mb-0 text-[14px]">
          <span className="me-[4px] text-subtext">Don&apos;t have an account?</span><Link href="signup">Sign up</Link>
        </p>
      </form>
    </AuthLayout>
  );
};