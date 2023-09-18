import React from "react";
import MemberCard from "../../components/MemberCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
const OurWorkingExperts = () => {
  let slidePerView = 3;
  if (window.screen.availWidth < 570) {
    slidePerView = 1;
  }
  return (
    <section className="py-[80px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-5">
          <h2 className="text-4xl font-semibold mb-5">Our Working Experts</h2>
          <p className="text-lg w-[60%] mx-auto">
            Perspiciatis unde omnis iste natus error sit voluptatem accusantium
            dol oremque laudantium, totam remeaque ipsa.
          </p>
        </div>
        <div className="">
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
              <MemberCard />
            </SwiperSlide>
            <SwiperSlide>
              <MemberCard />
            </SwiperSlide>
            <SwiperSlide>
              <MemberCard />
            </SwiperSlide>
            <SwiperSlide>
              <MemberCard />
            </SwiperSlide>
            <SwiperSlide>
              <MemberCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurWorkingExperts;
