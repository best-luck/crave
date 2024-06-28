import Input from "@src/components/shared/common/UI/input/input";
import Link from "next/link";

export default function ContactInfoForm() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-[32px] font-bold">Contact info</p>
        <div className="text-[14px]">
          <span className="text-subtext mr-[8px]">Already have an account?</span>
          <Link href="/signin">Login</Link>
        </div>
      </div>
      <div className="flex gap-[24px] mt-[32px]">
        <Input
          placeholder="your@email.com"
          type="email"
          name="email"
          className="w-full"
        />
        <Input
          placeholder="+1"
          name="phone"
          className="w-full"
        />
      </div>
    </div>
  );
}