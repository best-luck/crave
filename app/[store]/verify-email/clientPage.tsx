"use client";

import AuthLayout from "@src/components/layout/authLayout";
import Button from "@src/components/shared/common/UI/button";
import { useAuthContext } from "@src/contexts/AuthContext";
import { useStoreContext } from "@src/contexts/StoreContext";
import { sendVerifyCode, verifyAuthCode } from "@src/lib/treez/auth";
import { ChangeEvent, FormEvent, KeyboardEvent, forwardRef, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const _DigitInput = (props: { idx: number, onChange: (e: KeyboardEvent<HTMLInputElement>, idx: number)=>void }, ref: React.Ref<HTMLInputElement>) => {

  const { idx, onChange } = props;

  return (
    <input
      className="w-[64px] h-[80px] text-[64px] rounded-[4px] border-separatordark bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      type="number"
      minLength={1}
      maxLength={1}
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => onChange(e, idx)}
      ref={ref}
    />
  );
};

export const DigitInput = forwardRef(_DigitInput);

export default function ClientPage() {

  const digit1 = useRef<HTMLInputElement>(null);
  const digit2 = useRef<HTMLInputElement>(null);
  const digit3 = useRef<HTMLInputElement>(null);
  const digit4 = useRef<HTMLInputElement>(null);
  const digit5 = useRef<HTMLInputElement>(null);
  const digitRefs = [digit1, digit2, digit3, digit4, digit5];
  const [isLoading, setIsLoading] = useState(false);
  const { shortName } = useStoreContext();
  const { user } = useAuthContext();

  const digitInput = (e: KeyboardEvent<HTMLInputElement>, idx: number) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.key === "Backspace") {
      e.currentTarget.value = "";
      if (idx > 0) {
        digitRefs[idx - 1].current?.focus();
      }
    } else if(e.key >= "0" && e.key <= "9") {
      e.currentTarget.value = e.key;
      if (idx < 4) {
        digitRefs[idx + 1].current?.focus();
      }
    }
  }

  const resendVerifyCode = async () => {
    const res = await sendVerifyCode(shortName);
    if (res.status === "OK") {
      toast.success("We've sent verify code!");
    } else {
      toast.error("We couldn't send verify code. Please try again later!")
    }
  }

  const submitVerifyCode = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const code = (digitRefs[0].current?.value||"")+(digitRefs[1].current?.value||"")+(digitRefs[2].current?.value||"")+(digitRefs[3].current?.value||"")+(digitRefs[4].current?.value||"")
    if (code.length === 5) {
      const res = await verifyAuthCode(code, shortName);
    }
    setIsLoading(false);
  }

  return (
    <AuthLayout>
      <form onSubmit={submitVerifyCode}>

        <div className="w-full md:w-3/4 text-white mb-[32px]">
          <h1 className="text-[40px] md:text-[48px] text-center md:text-left font-bold mb-[24px]">Verify your email address</h1>
          <p className="text-center md:text-left mb-0 text-subtext ">We emailed you a five-digit code to {user?.email}. Enter the code below to confirm your email address</p>
        </div>
        <div className="my-[32px]">
          <p className="font-medium font-[16px]">Security Code</p>
          <div className="flex gap-[8px] mt-[16px]">
            <DigitInput
              ref={digit1}
              idx={0}
              onChange={digitInput}
            />
            <DigitInput
              ref={digit2}
              idx={1}
              onChange={digitInput}
            />
            <DigitInput
              ref={digit3}
              idx={2}
              onChange={digitInput}
            />
            <span className="font-medium text-[60px] text-separatordark">-</span>
            <DigitInput
              ref={digit4}
              idx={3}
              onChange={digitInput}
            />
            <DigitInput
              ref={digit5}
              idx={4}
              onChange={digitInput}
            />
          </div>
        </div>
        <Button type="submit" onClick={() => {}} className="w-full mb-[24px]" disabled={isLoading}>Verify Email</Button>
      </form>
      <div className="text-[14px] flex gap-[4px] justify-center">
        <span className="text-subtext">Didn&apos;t get an email?</span> <button className="bg-transparent outline-none" onClick={resendVerifyCode} >Resend</button>
      </div>
    </AuthLayout>
  );
};