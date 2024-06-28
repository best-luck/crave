import BannerSwiper from "./sub/bannerswiper";

const banners = [
  {
    id: 1,
    heading: "Be sure to get 20% off all items!",
    subheading: "",
    image: "/images/banner/banner1.png",
    mobile_image: "/images/banner/banner1.png",
    link: "",
    cta: "Buy now",
  },
  {
    id: 2,
    heading: "Be sure to get 20% off all items!",
    subheading: "",
    image: "/images/banner/banner1.png",
    mobile_image: "/images/banner/banner1.png",
    link: "",
    cta: "Buy now",
  },
  {
    id: 3,
    heading: "Be sure to get 20% off all items!",
    subheading: "",
    image: "/images/banner/banner1.png",
    mobile_image: "/images/banner/banner1.png",
    link: "",
    cta: "Buy now",
  },
];

export default async function Banner() {

  return (
    <div className="banners-container">
      <div className="home-banners">
        { banners.length ? <BannerSwiper banners={banners} /> : '' }
      </div>
    </div>
  );
}
