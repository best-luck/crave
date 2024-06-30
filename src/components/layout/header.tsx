"use client";

import Image from "next/image";
import SearchBox from "../shared/common/UI/searchbox";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown, faCartShopping, faChevronDown, faClose, faStore, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../shared/common/UI/menu/sidebar";
import { useState } from "react";
import { useCartContext } from "@src/contexts/CartContext";
import { useRouter } from "next/navigation";
import { useStoreContext } from "@src/contexts/StoreContext";
import Icon from "../shared/common/UI/icon/icon";

export default function Header() {

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const { cart, store } = useCartContext();
  const { categories, brands, shortName } = useStoreContext();
  const router = useRouter();

  const viewCart = () => {
    router.push(`/${store}/cart`);
  }
  const viewUser = () => {
    router.push(`/${store}/signin`);
  }

  return <>
    <header className="bg-dark sticky top-0 w-full z-30 text-white border-b border-primary">
      <div className="bg-primary flex justify-center sm:justify-between container text-[14px] pt-[10px] pb-[7px]">
        <div className="hidden sm:block">Daily 7:00-15:00 Friday - day off</div>
        <div className="hidden sm:block">+1-801-975-9500</div>
        <div>25% OFF Verano, Encore, & more brands: Shop Now</div>
      </div>
      <div className="header-main flex gap-x-[77px] container text-[16px] relative h-[90px] items-stretch bg-dark">
        <div className="flex items-center">
          <span className="lg:hidden mr-3 lg:mr-0 cursor-pointer" onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
            { isSidebarVisible ? <Icon icon={faClose} /> : <Icon icon={faBars} /> }
          </span>
          <Link href="/">
            <Image alt="logo" src="/images/logo.png" width={145} height={32}></Image>
          </Link>
        </div>
        <div className="hidden lg:flex items-stretch gap-x-[38px]">
          <div className="group cursor-pointer flex items-center">
            <FontAwesomeIcon icon={faStore} fontSize={24} />
            <span className="mx-[8px]">Choose your store</span>
            <FontAwesomeIcon icon={faChevronDown} fontSize={20} />
            <ul className="absolute hidden w-[200px] bg-dark text-white rounded-[4px] p-[10px] group-hover:block top-[100%]">
              <li className="mb-[8px]">
                <Link href="/cravemonroe">Monroe</Link>
              </li>
              <li className="">
                <Link href="/craveannabor">Annarbor</Link>
              </li>
            </ul>
          </div>
          <div className="group cursor-pointer flex items-center text-[16px]">
            <span className="mr-[8px]">Store</span>
            <FontAwesomeIcon icon={faChevronDown} fontSize={20} />
            <div className="absolute hidden w-[608px] h-[462px] overflow-auto bg-dark group-hover:flex top-[100%] p-[24px] gap-[24px] rounded-[4px]">
              <ul className="flex flex-col gap-y-[16px] w-[180px]">
                <li className="text-subtext">By category</li>
                {
                  categories.map(category => <li key={`category-${category.name}`} className={`category-${category.id}`}><Link href={`/${shortName}/category/${category.name}`}>{category.name}</Link></li>)
                }
              </ul>
              <div className="flex-auto">
                <p className="">By brand</p>
                <div className="mt-[16px] flex flex-wrap gap-[16px] justify-between items-stretch">
                  {
                    brands.map(brand => <Link href={`/${shortName}/brand/${brand}`} key={`store-brand-${brand}`}>
                      <div className="bg-secondary rounded-[4px] border border-separatordark cursor-pointer w-[108px] h-full">
                        <div className="p-[4px]">
                          <Image
                            layout="responsive"
                            width={100}
                            height={100}
                            className="rounded-[4px]"
                            src="/images/categories/default.png"
                            alt="brand"
                          />
                        </div>
                        <p className="text-center py-[8px] text-[14px]">{brand}</p>
                      </div>
                    </Link>)
                  }
                </div>
              </div>
            </div>
          </div>
          <Link href="/blog" className="flex items-center">Blog</Link>
        </div>
        <div className="flex items-center flex-auto gap-[24px]">
          <SearchBox
            placeholder="Search for products, brands and more..."
            />
          <div className="cursor-pointer" onClick={viewUser}>
            <FontAwesomeIcon icon={faUserCircle} fontSize={24} />
          </div>
          <div className="flex gap-[11px] items-center cursor-pointer" onClick={viewCart}>
            <FontAwesomeIcon icon={faCartShopping} fontSize={24} />
            <div>
              <p className="font-medium text-[14px] text-subtext mb-[2px]">{cart.products.length} Items</p>
              <p className="text-[16px] font-semibold">${cart.total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      {
        isSidebarVisible &&
          <Sidebar
            hide={() => setIsSidebarVisible(false)}
          />
      }
    </header>
  </>;
}