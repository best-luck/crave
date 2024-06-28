import Input from "@src/components/shared/common/UI/input/input";
import Image from "next/image";

export default function Community() {
  return (
    <div className="flex mt-[80px] gap-[32px]">
      <div className="bg-secondary rounded-[4px] min-w-[575px] px-[79.5px] flex items-center flex-col justify-center">
        <p className="text-[32px] font-semibold ">Join Our Community</p>
        <p>Become a valued member of our community and unlock special deals, latest updates and exclusive rewards.</p>
        <form className="mt-[32px] w-full">
          <Input
            label="Name"
            name="name"
            placeholder="Enter name"
          />
          <Input
            label="Email"
            name="email"
            placeholder="your@email.com"
            type="email"
            className="mt-[16px]"
          />
        </form>
      </div>
      <Image
        layout="responsive"
        width={100}
        height={50}
        src="/images/home/subscribe.png"
        alt="community"
      />
    </div>
  );
}