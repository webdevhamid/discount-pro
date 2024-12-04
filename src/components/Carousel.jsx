// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Slides
import slide1 from "../assets/slide-1.jpg";
import slide2 from "../assets/slide-2.jpg";
import slide3 from "../assets/slide-3.jpg";

import "../index.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
      >
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${slide1})` }}
            className="bg-no-repeat bg-center bg-cover h-[600px] w-full relative overlay"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full lg:w-8/12 p-1 md:p-3 lg:p-5">
              <div className="flex flex-col gap-3 lg:gap-6 p-2 lg:p-5 text-center">
                <h1 className="md:text-4xl text-2xl lg:text-5xl font-bold text-white leading-10">
                  Shop Smarter and Save Big with E-Commerce Coupons
                </h1>
                <p className="text-gray-50 w-4/5 lg:w-2/3 mx-auto lg:text-xl md:text-lg text-sm">
                  Discover unbeatable discounts on top e-commerce brands. Redeem your coupon codes
                  today and enjoy savings on every purchase.
                </p>
                <Link
                  to="/brands"
                  className="btn bg-primary border-none text-white hover:bg-white hover:text-black w-fit px-16 mx-auto text-lg"
                >
                  Get your coupons 🎁
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${slide2})` }}
            className="bg-no-repeat bg-center bg-cover h-[600px] w-full relative overlay"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full lg:w-8/12 p-1 md:p-3 lg:p-5">
              <div className="flex flex-col gap-3 lg:gap-6 p-2 lg:p-5 text-center">
                <h1 className="md:text-4xl text-2xl lg:text-5xl font-bold text-white leading-10">
                  Dine In or Out with Incredible Food Deals
                </h1>
                <p className="text-gray-50 w-4/5 lg:w-2/3 mx-auto lg:text-xl md:text-lg text-sm">
                  Get exclusive deals on food delivery and dining out. Use our coupons to savor your
                  favorite meals at pocket-friendly prices.
                </p>
                <Link
                  to="/brands"
                  className="btn bg-primary border-none text-white hover:bg-white hover:text-black w-fit px-16 mx-auto text-lg"
                >
                  Get your coupons 🎁
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${slide3})` }}
            className="bg-no-repeat bg-center bg-cover h-[600px] w-full relative overlay"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full lg:w-8/12 p-1 md:p-3 lg:p-5">
              <div className="flex flex-col gap-3 lg:gap-6 p-2 lg:p-5 text-center">
                <h1 className="md:text-4xl text-2xl lg:text-5xl font-bold text-white leading-10">
                  Travel Worry-Free with Amazing Ride Discounts
                </h1>
                <p className="text-gray-50 w-4/5 lg:w-2/3 mx-auto lg:text-xl md:text-lg text-sm">
                  Save big on your next trip with coupons for ride-sharing and travel services.
                  Redeem your codes now and travel smarter.
                </p>
                <Link
                  to="/brands"
                  className="btn bg-primary border-none text-white hover:bg-white hover:text-black w-fit px-16 mx-auto text-lg"
                >
                  Get your coupons 🎁
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
