import { useStoreContext } from "@src/contexts/StoreContext";
import Category from "./category";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "@src/styles/swiper/swiper.min.css";
import "@src/styles/swiper/navigation.min.css";
import "@src/styles/swiper/scrollbar.min.css";
import "@src/styles/swiper/pagination.min.css";

export default function Categories({ images, size }: { images: any, size?: string }) {

  const { categories } = useStoreContext();
  const perView = size==="sm"?10:3;
  const _swiper = useRef<any>(null);

  const nextSwiper = () => {
    _swiper.current.allowSlideNext = true;
    _swiper.current?.slideNext();
  }
  const prevSwiper = () => {
    _swiper.current?.slidePrev();
  }

  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={size==="sm" ? {
          200: { slidesPerView: 2 },
          500: { slidesPerView: 3 },
          600: { slidesPerView: 6 },
          900: { slidesPerView: 8 },
          1200: { slidesPerView: 10 },
        }: {
          700: { slidesPerView: 2 },
          1000: { slidesPerView: perView },
          1200: { slidesPerView: 4 },
          1800: { slidesPerView: 4 },
        }}
        onSwiper={(swiper) => _swiper.current = swiper}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
      >
        {
          categories.map((category, index) => (
            <SwiperSlide
              key={`category-slider-${index}`}
            >
              <Category
                category={category.name}
                image=""
                size={size}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="flex justify-center gap-[80px] w-full mt-[40px]">
        <div onClick={prevSwiper} className="h-full flex items-center z-10 prev-nav">
          <div className="rounded-full flex justify-center items-center cursor-pointer w-[48px] h-[48px] text-white bg-[#FFFFFF0D] border border-[#FFFFFF33]">
            <FontAwesomeIcon icon={faChevronLeft} fontSize={24} />
          </div>
        </div>
        <div onClick={nextSwiper} className="h-full flex items-center z-10 next-nav">
          <div className="rounded-full flex justify-center items-center cursor-pointer w-[48px] h-[48px] text-white bg-[#FFFFFF0D] border border-[#FFFFFF33]">
            <FontAwesomeIcon icon={faChevronRight} fontSize={24} />
          </div>
        </div>
      </div>
    </div>
  );
}