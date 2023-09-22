import React from "react";
import ServiceCardRegular from "./ServiceCardRegular";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css"

// import required modules
import { Pagination } from "swiper/modules";
const ServiceSlider = () => {
  let slidePerView = 3;
  if (window.screen.availWidth < 570) {
    slidePerView = 1;
  }
  return (
    <Swiper
      slidesPerView={slidePerView}
      spaceBetween={30}
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper services-slider"
    >
      <SwiperSlide>
        <ServiceCardRegular />
      </SwiperSlide>
      <SwiperSlide>
        <ServiceCardRegular />
      </SwiperSlide>
      <SwiperSlide>
        <ServiceCardRegular />
      </SwiperSlide>
      <SwiperSlide>
        <ServiceCardRegular />
      </SwiperSlide>
      <SwiperSlide>
        <ServiceCardRegular />
      </SwiperSlide>
      <SwiperSlide>
        <ServiceCardRegular />
      </SwiperSlide>
    </Swiper>
  );
};

export default ServiceSlider;
