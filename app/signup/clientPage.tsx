"use client";

import AuthLayout from "@src/components/layout/authLayout";
import Button from "@src/components/shared/common/UI/button";
import Checkbox from "@src/components/shared/common/UI/input/checkbox";
import Input from "@src/components/shared/common/UI/input/input";
import { signUp } from "@src/lib/treez/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function ClientPage() {

  const [data, setData] = useState({
    email: "",
    fullname: "",
    phone: "",
    password: ""
  });
  const router = useRouter();

  const updateData = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signUp(data);
    if (result.status === "OK") {
      router.push("/verify-email");
    }
  }

  return (
    <AuthLayout>
      <form onSubmit={submitForm}>
        <div className="w-3/4 text-white mb-[32px]">
          <h1 className="text-[48px] font-bold mb-[24px]">Sign Up</h1>
          <p className="mb-0 text-subtext">Signin to your account to use all benefits and features of Crave</p>
        </div>
        <div>
          <Input
            name="fullname"
            placeholder="Your name"
            label="Full Name"
            className="mb-[16px]"
            onChange={updateData}
          />
          <Input
            name="email"
            placeholder="your@email.com"
            label="Email"
            className="mb-[16px]"
            type="email"
            onChange={updateData}
          />
          <Input
            name="phone"
            placeholder="4567891230"
            label="Phone Number"
            className="mb-[16px]"
            type="number"
            onChange={updateData}
          />
          <Input
            name="password"
            placeholder="Enter a password"
            label="Password"
            className="mb-[12px]"
            type="password"
            onChange={updateData}
          />
          <div className="flex mb-[32px] items-center gap-[12px]">
            <Checkbox
              name="agree-terms"
            />
            <span className="text-[14px] text-subtext">Agree with <Link href="/terms-of-use" className="text-white">Terms of use</Link> and <Link className="text-white" href="privacy-policy">Privacy policy</Link></span>
          </div>
        </div>
        <Button onClick={() => {}} className="w-full mb-[24px]" type="submit">Sign Up</Button>
        <p className="text-center mb-0 text-[14px]">
          <span className="me-[4px] text-subtext">Already have an account?</span><Link href="/signin">Sign in</Link>
        </p>
      </form>
    </AuthLayout>
  );
};