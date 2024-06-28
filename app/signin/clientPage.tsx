"use client";

import AuthLayout from "@src/components/layout/authLayout";
import Button from "@src/components/shared/common/UI/button";
import Input from "@src/components/shared/common/UI/input/input";
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


  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await signIn(data);
      if (res.status === "OK") {
        router.push("/");
      }
    } catch (err) {
      toast.error("Email or Password Incorrect!");
    }
  }

  return (
    <AuthLayout>
      <form onSubmit={onSubmit}>
        <div className="w-3/4 text-white mb-[32px]">
          <h1 className="text-[48px] font-bold mb-[24px]">Sign In</h1>
          <p className="mb-0 text-subtext">Signin to your account to use all benefits and features of Crave</p>
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
        <Button onClick={() => {}} type="submit" className="w-full mb-[24px]">Sign in</Button>
        <p className="text-center mb-0 text-[14px]">
          <span className="me-[4px] text-subtext">Don't have an account?</span><Link href="signup">Sign up</Link>
        </p>
      </form>
    </AuthLayout>
  );
};