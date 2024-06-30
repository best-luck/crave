import Button from "@src/components/shared/common/UI/button";
import Input from "@src/components/shared/common/UI/input/input";
import Image from "next/image";

export default function Community() {
  return (
    <div className="flex mt-[80px] gap-[32px] flex-col md:flex-row">
      <div className="bg-secondary rounded-[4px] w-full md:min-w-[575px] flex items-center flex-col justify-center p-[16px] md:py-[56px] md:px-[79.5px]">
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
          <Button className="w-full mt-[32px]" onClick={() => {}}>Subscribe</Button>
        </form>
      </div>
      <div className="flex-auto">
        <Image
          layout="responsive"
          width={100}
          height={50}
          src="/images/home/subscribe.png"
          alt="community"
        />
      </div>
    </div>
  );
}