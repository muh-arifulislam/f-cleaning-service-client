import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

// componets
import CardSponsor from "../Cards/CardSponsor";

// images
import brandLogo1 from "../../assets/icons/brand1.png";
import brandLogo2 from "../../assets/icons/brand2-1.png";
import brandLogo3 from "../../assets/icons/brand3-1.png";
import brandLogo4 from "../../assets/icons/brand5-1.png";

const SliderSponsors = () => {
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
        <CardSponsor logo={brandLogo1} />
      </SwiperSlide>
      <SwiperSlide>
        <CardSponsor logo={brandLogo2} />
      </SwiperSlide>
      <SwiperSlide>
        <CardSponsor logo={brandLogo3} />
      </SwiperSlide>
      <SwiperSlide>
        <CardSponsor logo={brandLogo4} />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderSponsors;
