"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { GoogleReviews } from "@src/lib/types/googlereviews";
import Icon from "@src/components/shared/common/UI/icon/icon";
import Input from "@src/components/shared/common/UI/input/input";
import Button from "../shared/common/UI/button";

export default async function Footer({ reviews }: { reviews: GoogleReviews[] }) {
  const featureBG = {
    backgroundImage: 'url("/images/home-bg.webp")',
    backgroundSize:'cover'
  };

  return (
    <footer className="bg-dark px-container pt-[47.77px] text-white pb-[73px]">
      <div className="flex pb-1 border-b border-secondary pb-[64px]">
        <div>
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
            <li className="mb-[12px]"><a href="">Home</a></li>
            <li className="mb-[12px]"><a href="">Shop</a></li>
            <li className="mb-[12px]"><a href="">Deals</a></li>
            <li className="mb-[12px]"><a href="">Blog</a></li>
            <li className="mb-[12px]"><a href="">Stores</a></li>
          </ul>
          <ul>
            <li className="uppercase font-bold font-medium text-white mb-[16px] font-[20px]">Profile</li>
            <li className="mb-[12px]"><a href="">Log in</a></li>
            <li className="mb-[12px]"><a href="">Sign up</a></li>
          </ul>
        </div>
        <div className="ml-auto">
          <div className="font-medium text-[24px]">Join our club</div>
          <div className="flex mt-[24px] gap-[8px]">
            <Input
              placeholder="email"
              name="email"
              />
            <Button text="Subscribe" onClick={() => {}}></Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-white text-sm flex-wrap mt-[32px] font-medium text-[14px] text-[#FFFFFF99]">
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
