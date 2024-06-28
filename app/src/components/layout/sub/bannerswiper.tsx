"use client";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "@src/styles/swiper/swiper.min.css";
import "@src/styles/swiper/navigation.min.css";
import "@src/styles/swiper/scrollbar.min.css";
import "@src/styles/swiper/pagination.min.css";
import Image from "next/image";
import { BannerType } from '@src/lib/database/banners';
import "./style.scss";
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from '@src/components/shared/common/UI/button';
import Link from 'next/link';

interface SwiperProps {
  banners: BannerType[]
}

export default function BannerSwiper({ banners }: SwiperProps) {

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <>
    <div ref={navigationPrevRef} className="h-full top-0 absolute flex items-center z-10 prev-nav">
        <div className="rounded-full flex justify-center items-center cursor-pointer w-[48px] h-[48px] text-white bg-[#FFFFFF0D] border border-[#FFFFFF33]">
        <FontAwesomeIcon icon={faChevronLeft} fontSize={24} />
      </div>
    </div>
    <div ref={navigationNextRef} className="h-full top-0 absolute flex items-center z-10 next-nav">
      <div className="rounded-full flex justify-center items-center cursor-pointer w-[48px] h-[48px] text-white bg-[#FFFFFF0D] border border-[#FFFFFF33]">
        <FontAwesomeIcon icon={faChevronRight} fontSize={24} />
      </div>
    </div>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onBeforeInit={(swiper: any) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      }}
    >
      {
        banners.map((banner: BannerType, index: number) => (
          <SwiperSlide
            key={`product-slider-${banner.id}`}
          >
            <div className="w-full h-[500px] rounded-[20px] bg-cover bg-no-repeat bg-primary" style={{backgroundImage: `url('${banner.image}')`}}>
              <div className="w-[800px] flex justify-center items-center flex-col m-auto h-full">
                <Image
                  src="/images/logo-lg.png"
                  layout="responsive"
                  width={100}
                  height={100}
                  alt="logo"
                />
                <p className="mt-[31px] mb-[32px] text-center text-white">{banner.heading}</p>
                <Link className="rounded-[4px] w-[180px] h-[50px] text-black bg-white flex justify-center items-center font-semibold" href={banner.link}>{banner.cta}</Link>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
      
    </Swiper>
    </>
  );
}