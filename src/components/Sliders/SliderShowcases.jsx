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
import CardShowcaseItem from "../Cards/CardShowcaseItem";
import { useGlobalState } from "../../state/GlobalStateProvider";

const SliderShowcases = () => {
  const { showcases } = useGlobalState();

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
      {showcases?.data?.map((showcase) => (
        <SwiperSlide key={showcase?._id}>
          <CardShowcaseItem />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderShowcases;
