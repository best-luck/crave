 import { faChevronDown, faChevronUp, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useStoreContext } from "@src/contexts/StoreContext";
import { useState } from "react";

export default function Sidebar({ hide }: { hide: () => void }) {

  const { categories, brands, shortName } = useStoreContext();
  const [isStoresVisible, setIsStoresVisible] = useState(false);
  const [isStoreDetailsVisible, setIsStoreDetailsVisible] = useState(false);

  return (
    <div className={`top-[100%] h-screen w-screen flex z-40 animate-in slide-in-from-left text-white`}>
      <div className={`flex flex-col w-full h-screen overflow-y-auto bg-dark pt-[40px] px-container`} tabIndex={-1} aria-labelledby="drawer-navigation-label">
      <div className="group cursor-pointer flex items-center mb-[21px] border-b border-separatordark pb-[14px]" onClick={() => setIsStoresVisible(!isStoresVisible)}>
        <div className="flex justify-between w-full">
          <FontAwesomeIcon icon={faStore} fontSize={24} />
          <span className="mx-[8px]">Choose your store</span>
          <FontAwesomeIcon icon={isStoresVisible ? faChevronUp : faChevronDown} className="ml-auto" fontSize={20} />
        </div>
      </div>
      {
        isStoresVisible ? <ul className="w-full bg-dark text-white rounded-[4px]">
          <li className="mb-[20px]">
            <Link href="/cravemonroe">Monroe</Link>
          </li>
          <li className="mb-[22px]">
            <Link href="/craveannabor">Annarbor</Link>
          </li>
        </ul> : ''
      }
      <div className="group cursor-pointer flex items-center text-[16px] mb-[21px] border-b border-separatordark pb-[14px]" onClick={() => setIsStoreDetailsVisible(!isStoreDetailsVisible)}>
        <div className="flex justify-between w-full">
          <span className="mr-[8px]">Store</span>
          <FontAwesomeIcon icon={isStoreDetailsVisible ? faChevronUp : faChevronDown} fontSize={20} />
        </div>
      </div>
      {
        isStoreDetailsVisible ? (
          <div className="overflow-auto bg-dark gap-[24px] rounded-[4px]">
            <ul className="flex flex-col gap-y-[16px] w-[180px]">
              <li className="text-subtext">By category</li>
              {
                categories.map(category => <li key={`category-${category.name}`} className={`category-${category.id}`}><Link href={`/${shortName}/category/${category.name}`}>{category.name}</Link></li>)
              }
            </ul>
            <div className="flex-auto">
              <p className="mt-[24px]">By brand</p>
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
        ) : ""
      }
      <Link href="/blog" className="flex items-center mb-[21px] border-b border-separatordark pb-[14px]">Blog</Link>
      </div>
    </div>
  )
}