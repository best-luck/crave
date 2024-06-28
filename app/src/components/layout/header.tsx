"use client";

import Image from "next/image";
import SearchBox from "../shared/common/UI/searchbox";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown, faCartShopping, faChevronDown, faStore, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../shared/common/UI/menu/sidebar";
import { useState } from "react";
import { useCartContext } from "@src/contexts/CartContext";

export default function Header() {

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const { cart } = useCartContext();

  return <>
    <header className="bg-dark sticky top-0 w-full z-30 text-white border-b border-primary">
      <div className="bg-primary flex justify-between px-container text-[14px] pt-[10px] pb-[7px]">
        <div>Daily 7:00-15:00 Friday - day off</div>
        <div>+1-801-975-9500</div>
        <div>25% OFF Verano, Encore, & more brands: Shop Now</div>
      </div>
      <div className="header-main flex gap-x-[77px] px-container py-[29px] text-[16px]">
        <div className="flex items-center">
          <span className="lg:hidden mr-3 lg:mr-0 cursor-pointer" onClick={() => setIsSidebarVisible(true)}>
            <FontAwesomeIcon icon={faBars} fontSize={30} />
          </span>
          <Link href="/">
            <Image alt="logo" src="/images/logo.png" width={145} height={32}></Image>
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-x-[38px]">
          <div className="relative group cursor-pointer">
            <FontAwesomeIcon icon={faStore} fontSize={24} />
            <span className="mx-[8px]">Choose your store</span>
            <FontAwesomeIcon icon={faChevronDown} fontSize={20} />
            <ul className="absolute hidden w-full bg-primary text-white rounded-[4px] p-[10px] group-hover:block">
              <li className="mb-[8px]">
                <Link href="/cravemonroe">Monroe</Link>
              </li>
              <li className="">
                <Link href="/craveannabor">Annarbor</Link>
              </li>
            </ul>
          </div>
          <Link href="/deals">Shop</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/deals">Stores</Link>
        </div>
        <div className="flex items-center flex-auto gap-[24px]">
          <SearchBox
            placeholder="Search for products, brands and more..."
            />
          <div>
            <FontAwesomeIcon icon={faUserCircle} fontSize={24} />
          </div>
          <div className="flex gap-[11px] items-center">
            <FontAwesomeIcon icon={faCartShopping} fontSize={24} />
            <div>
              <p className="font-medium text-[14px] text-subtext mb-[2px]">{cart.products.length} Items</p>
              <p className="text-[16px] font-semibold">${cart.total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
    {
      isSidebarVisible &&
        <Sidebar
          hide={() => setIsSidebarVisible(false)}
        />
    }
  </>;
}