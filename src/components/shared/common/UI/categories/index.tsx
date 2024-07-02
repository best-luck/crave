import { useStoreContext } from "@src/contexts/StoreContext";
import Category from "./category";
import { Swiper, SwiperSlide } from "swiper/react";
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
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const perView = size==="sm"?10:3;

  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        breakpoints={{
          1000: { slidesPerView: perView },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
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
        <div ref={navigationPrevRef} className="h-full flex items-center z-10 prev-nav">
          <div className="rounded-full flex justify-center items-center cursor-pointer w-[48px] h-[48px] text-white bg-[#FFFFFF0D] border border-[#FFFFFF33]">
            <FontAwesomeIcon icon={faChevronLeft} fontSize={24} />
          </div>
        </div>
        <div ref={navigationNextRef} className="h-full flex items-center z-10 next-nav">
          <div className="rounded-full flex justify-center items-center cursor-pointer w-[48px] h-[48px] text-white bg-[#FFFFFF0D] border border-[#FFFFFF33]">
            <FontAwesomeIcon icon={faChevronRight} fontSize={24} />
          </div>
        </div>
      </div>
    </div>
  );
}