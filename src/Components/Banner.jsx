// import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Keyboard,
} from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      keyboard={true}
      modules={[Autoplay, EffectFade, Navigation, Pagination, Keyboard]}
      className="container"
    >
      <SwiperSlide>
        <div className="relative w-full">
          <img
            className="h-[70vh] md:h-[90vh] w-screen "
            src="/img/2.jpg"
            alt=""
          />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 px-10 lg:pl-12 w-full md:w-1/2">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                Discover Your Dream Home Today
              </h1>
              <p className="text-xs lg:text-base text-justify">
                Welcome to Real Estate, where exceptional living begins. Explore
                our curated collection of homes, each a unique sanctuary waiting
                to be discovered. From stylish urban apartments to serene
                countryside estates, find the perfect property that resonates
                with your lifestyle. Your journey to home starts here—seamless,
                personalized, and extraordinary. Let&apos;s turn your dream into
                an address.
              </p>
              <div>
                <button className="btn btn-sm md:btn-md btn-primary mr-5">
                  Discover More
                </button>
                <button className="btn btn-sm md:btn-md btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full">
          <img
            className="h-[70vh] md:h-[90vh] w-screen "
            src="/img/3.jpg"
            alt=""
          />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 px-10 lg:pl-12 w-full md:w-1/2">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                Discover Your Dream Home Today
              </h1>
              <p className="text-xs lg:text-base text-justify">
                Welcome to Real Estate, where exceptional living begins. Explore
                our curated collection of homes, each a unique sanctuary waiting
                to be discovered. From stylish urban apartments to serene
                countryside estates, find the perfect property that resonates
                with your lifestyle. Your journey to home starts here—seamless,
                personalized, and extraordinary. Let&apos;s turn your dream into
                an address.
              </p>
              <div>
                <button className="btn btn-sm md:btn-md btn-primary mr-5">
                  Discover More
                </button>
                <button className="btn btn-sm md:btn-md btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full">
          <img
            className="h-[70vh] md:h-[90vh] w-screen "
            src="/img/1.jpg"
            alt=""
          />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 px-10 lg:pl-12 w-full md:w-1/2">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                Discover Your Dream Home Today
              </h1>
              <p className="text-xs lg:text-base text-justify">
                Welcome to Real Estate, where exceptional living begins. Explore
                our curated collection of homes, each a unique sanctuary waiting
                to be discovered. From stylish urban apartments to serene
                countryside estates, find the perfect property that resonates
                with your lifestyle. Your journey to home starts here—seamless,
                personalized, and extraordinary. Let&apos;s turn your dream into
                an address.
              </p>
              <div>
                <button className="btn btn-sm md:btn-md btn-primary mr-5">
                  Discover More
                </button>
                <button className="btn btn-sm md:btn-md btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full">
          <img
            className="h-[70vh] md:h-[90vh] w-screen "
            src="/img/4.jpg"
            alt=""
          />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 px-10 lg:pl-12 w-full md:w-1/2">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                Discover Your Dream Home Today
              </h1>
              <p className="text-xs lg:text-base text-justify">
                Welcome to Real Estate, where exceptional living begins. Explore
                our curated collection of homes, each a unique sanctuary waiting
                to be discovered. From stylish urban apartments to serene
                countryside estates, find the perfect property that resonates
                with your lifestyle. Your journey to home starts here—seamless,
                personalized, and extraordinary. Let&apos;s turn your dream into
                an address.
              </p>
              <div>
                <button className="btn btn-sm md:btn-md btn-primary mr-5">
                  Discover More
                </button>
                <button className="btn btn-sm md:btn-md btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full">
          <img
            className="h-[70vh] md:h-[90vh] w-screen "
            src="/img/5.jpg"
            alt=""
          />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 px-10 lg:pl-12 w-full md:w-1/2">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                Discover Your Dream Home Today
              </h1>
              <p className="text-xs lg:text-base text-justify">
                Welcome to Real Estate, where exceptional living begins. Explore
                our curated collection of homes, each a unique sanctuary waiting
                to be discovered. From stylish urban apartments to serene
                countryside estates, find the perfect property that resonates
                with your lifestyle. Your journey to home starts here—seamless,
                personalized, and extraordinary. Let&apos;s turn your dream into
                an address.
              </p>
              <div>
                <button className="btn btn-sm md:btn-md btn-primary mr-5">
                  Discover More
                </button>
                <button className="btn btn-sm md:btn-md btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
