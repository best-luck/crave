"use client";

import Image from "next/image";
import { faInstagram, faFacebook, faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Icon from "@src/components/shared/common/UI/icon/icon";
import Input from "@src/components/shared/common/UI/input/input";
import Button from "../shared/common/UI/button";
import { useStoreContext } from "@src/contexts/StoreContext";

export default async function Footer() {
  const { shortName } = useStoreContext();

  return (
    <footer className="bg-dark container pt-[47.77px] text-white pb-[73px] border-t border-separatordark mt-[120px]">
      <div className="flex flex-col-reverse md:flex-row pb-1 border-b border-secondary pb-[64px] gap-y-[24px]">
        <div className="gap-y-[24px] flex flex-col sm:flex-row">
          <div className="pb-[26px] border-b border-secondary sm:border-none sm:pb-0">
            <Image alt="logo" src="/images/logo.png" width={181} height={39.81} />
            <div className="flex gap-x-[8px] mt-[32.42px] mr-[117px]">
              <Icon icon={faFacebook} />
              <Icon icon={faInstagram} />
              <Icon icon={faTwitter} />
              <Icon icon={faTelegram} />
            </div>
          </div>
          <div className="flex font-[16px] text-subtext gap-[48px]">
            <ul>
              <li className="uppercase font-bold font-medium text-white mb-[16px] font-[20px]">Explore</li>
              <li className="mb-[12px]"><Link href={`/${shortName}`}>Home</Link></li>
              <li className="mb-[12px]"><Link href={`/${shortName}/catalogue`}>Shop</Link></li>
              <li className="mb-[12px]"><Link href="/blog">Blog</Link></li>
            </ul>
            <ul>
              <li className="uppercase font-bold font-medium text-white mb-[16px] font-[20px]">Profile</li>
              <li className="mb-[12px]"><Link href={`/${shortName}/signin`}>Log in</Link></li>
              <li className="mb-[12px]"><Link href={`/${shortName}/signup`}>Sign up</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-b border-secondary pb-[26px] mb-[24px] ml-0 md:border-none md:ml-auto md:pb-0 md:mb-0">
          <div className="font-medium text-[24px]">Join our club</div>
          <div className="flex-col flex sm:flex-row mt-[24px] gap-[8px]">
            <Input
              placeholder="Email"
              name="email"
              />
            <Button text="Subscribe" onClick={() => {}}></Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[17px] sm:flex-row justify-between text-white text-sm flex-wrap mt-[32px] font-medium text-[14px] text-[#FFFFFF99]">
        <span>© 2024 Hashly.com. All Right Reserved.</span>
        <div className="flex gap-1 w-full md:w-auto">
          <ul className="flex gap-x-[32px]">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service">Terms of Services</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
