import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import TestimonialCard from "./TestimonialCard";
import { useGlobalState } from "../../state/GlobalStateProvider";
const TestimonialSlider = () => {
  const { reviews } = useGlobalState();
  let slidePerView = 2;
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
      className="mySwiper testimonials-slider"
    >
      {reviews?.data?.map((review) => (
        <SwiperSlide key={review._id}>
          <TestimonialCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
