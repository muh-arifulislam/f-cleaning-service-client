import React from "react";
import ServiceCardRegular from "../../components/ServiceCardRegular";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
const ServiceSlider = () => {
  let slidePerView = 3;
  if (window.screen.availWidth < 570) {
    slidePerView = 1;
  }
  return (
    <section className="bg-slate-200 py-[80px]">
      <div className="max-w-[1260px] mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[50px] mb-5">
          <div className="p-[10px]">
            <h4 className="text-4xl font-semibold mb-2">We Provide Our Best Cleaning Services for You.</h4>
          </div>
          <div className="p-[10px]">
            <p className="text-lg mb-2">
              Perspiciatis unde omnis iste natus error sit voluptatem
              accusantium dol oremque laudantium, totam remeaque
              ipsaPerspiciatis unde omnis iste natus error sit voluptatem
              accusanti umoremque.
            </p>
          </div>
        </div>
        <div className="lg:px-0 px-[10px]">
          <Swiper
            slidesPerView={slidePerView}
            spaceBetween={30}
            loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
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
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;
