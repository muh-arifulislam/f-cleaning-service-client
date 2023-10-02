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
import { useGlobalState } from "../../state/GlobalStateProvider";

// components
import CardReview from "../Cards/CardReview";
import SliderLoader from "../Loader/SliderLoader";
import CardSliderError from "../Cards/CardSliderError";

const SliderReviews = () => {
  const { reviews } = useGlobalState();
  let slidePerView = 2;
  if (window.screen.availWidth < 570) {
    slidePerView = 1;
  }
  if (reviews.loading) {
    return <SliderLoader />;
  }
  if (reviews.error) {
    return <CardSliderError error={reviews.error} />;
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
          <CardReview review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderReviews;
