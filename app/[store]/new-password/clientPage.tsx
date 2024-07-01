"use client";

import AuthLayout from "@src/components/layout/authLayout";
import Button from "@src/components/shared/common/UI/button";
import Input from "@src/components/shared/common/UI/input/input";
import { useStoreContext } from "@src/contexts/StoreContext";
import { updatePassword } from "@src/lib/treez/auth";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function ClientPage() {

  const [data, setData] = useState({
    retrieveToken: "",
    password: ""
  });
  const { shortName } = useStoreContext();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await updatePassword(data, shortName);
    if (res.status === "OK") {
      router.push(`/${shortName}/signin`);
    } else {
      toast.error(res.msg);
    }
  }
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
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
            name="retrieveToken"
            placeholder="Code"
            label="Verification Code"
            className="mb-[16px]"
            onChange={onChange}
            required={true}
          />
          <Input
            name="password"
            placeholder="New Password"
            label="Enter a password"
            className="mb-[16px]"
            onChange={onChange}
            required={true}
            type="password"
          />
        </div>
        <Button onClick={() => {}} type="submit" className="w-full mb-[24px]" disabled={isLoading}>Update password</Button>
      </form>
    </AuthLayout>
  );
};