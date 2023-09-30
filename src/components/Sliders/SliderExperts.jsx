import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

// components
import CardMember from "../Cards/CardMember";

const SliderExperts = () => {
  let slidePerView = 3;
  if (window.screen.availWidth < 570) {
    slidePerView = 1;
  }
  return (
    <Swiper
      slidesPerView={slidePerView}
      spaceBetween={30}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <CardMember />
      </SwiperSlide>
      <SwiperSlide>
        <CardMember />
      </SwiperSlide>
      <SwiperSlide>
        <CardMember />
      </SwiperSlide>
      <SwiperSlide>
        <CardMember />
      </SwiperSlide>
      <SwiperSlide>
        <CardMember />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderExperts;
