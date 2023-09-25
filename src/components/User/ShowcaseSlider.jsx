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
import CardShowcaseItem from "./CardShowcaseItem";

const ShowcaseSlider = () => {
  let slidePerView = 4;
  if (window.screen.availWidth < 570) {
    slidePerView = 1;
  }
  return (
    <Swiper
      slidesPerView={slidePerView}
      spaceBetween={0}
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper services-slider"
    >
      <SwiperSlide>
        <CardShowcaseItem />
      </SwiperSlide>
      <SwiperSlide>
        <CardShowcaseItem />
      </SwiperSlide>
      <SwiperSlide>
        <CardShowcaseItem />
      </SwiperSlide>
      <SwiperSlide>
        <CardShowcaseItem />
      </SwiperSlide>
      <SwiperSlide>
        <CardShowcaseItem />
      </SwiperSlide>
      <SwiperSlide>
        <CardShowcaseItem />
      </SwiperSlide>
    </Swiper>
  );
};

export default ShowcaseSlider;
