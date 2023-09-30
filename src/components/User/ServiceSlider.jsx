import React, { useEffect, useState } from "react";
import ServiceCardRegular from "./ServiceCardRegular";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useGlobalState } from "../../state/GlobalStateProvider";
const ServiceSlider = () => {
  const { services } = useGlobalState();

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
      {services?.data.map((service) => (
        <SwiperSlide key={service._id}>
          <ServiceCardRegular service={service} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
