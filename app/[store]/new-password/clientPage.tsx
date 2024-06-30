"use client";

import AuthLayout from "@src/components/layout/authLayout";
import Button from "@src/components/shared/common/UI/button";
import Input from "@src/components/shared/common/UI/input/input";

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
            name="code"
            placeholder="Code"
            label="Verification Code"
            className="mb-[16px]"
          />
          <Input
            name="password"
            placeholder="New Password"
            label="Enter a password"
            className="mb-[16px]"
          />
        </div>
        <Button onClick={() => {}} className="w-full mb-[24px]">Update password</Button>
      </form>
    </AuthLayout>
  );
};