import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Product from "../product";
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// Import Swiper styles
import "@src/styles/swiper/swiper.min.css";
import "@src/styles/swiper/navigation.min.css";
import "@src/styles/swiper/scrollbar.min.css";
import "@src/styles/swiper/pagination.min.css";
import "./slider-style.scss";
import { TREEZ_PRODUCT_TYPE } from '@src/lib/types/treez/product';

export default function ProductsSlier({ products, breakpoints }: { products: TREEZ_PRODUCT_TYPE[], breakpoints?: any }) {

  const _swiper = useRef<any>(null);

  const nextSwiper = () => {
    _swiper.current?.slideNext();
  }
  const prevSwiper = () => {
    _swiper.current?.slidePrev();
  }
  
  return (
    <div className="product-slider relative text-white">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={breakpoints||{
          300: { slidesPerView: 1 },
          900: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
          1400: { slidesPerView: 4 },
        }}
        onSwiper={(swiper) => _swiper.current = swiper}
        onSlideChange={() => {}}        
      >
        {
          products.map((product, index) => (
            <SwiperSlide
              key={`product-slider-${index}`}
            >
              <Product
                display="Cart"
                product={product}
                selectProduct={() => {}}
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