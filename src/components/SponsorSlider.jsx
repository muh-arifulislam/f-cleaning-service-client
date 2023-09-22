import React from "react";
import brandLogo1 from "../assets/icons/brand1.png";
import brandLogo2 from "../assets/icons/brand2-1.png";
import brandLogo3 from "../assets/icons/brand3-1.png";
import brandLogo4 from "../assets/icons/brand5-1.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import SponsorCard from "./SponsorCard";
const SponsorSlider = () => {
  let slidePerView = 4;
  if (window.screen.availWidth < 570) {
    slidePerView = 1;
  }
  return (
    <Swiper
      slidesPerView={slidePerView}
      spaceBetween={30}
      loop={true}
      pagination={false}
      modules={[]}
      className="mySwiper brands-slider"
    >
      <SwiperSlide>
        <SponsorCard logo={brandLogo1} />
      </SwiperSlide>
      <SwiperSlide>
        <SponsorCard logo={brandLogo2} />
      </SwiperSlide>
      <SwiperSlide>
        <SponsorCard logo={brandLogo3} />
      </SwiperSlide>
      <SwiperSlide>
        <SponsorCard logo={brandLogo4} />
      </SwiperSlide>
      
    </Swiper>
  );
};

export default SponsorSlider;
