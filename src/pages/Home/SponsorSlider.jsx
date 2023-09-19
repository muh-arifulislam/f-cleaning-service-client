import React from "react";
import brandLogo from "../../assets/images/brand1.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
const SponsorSlider = () => {
  let slidePerView = 4;
  if (window.screen.availWidth < 570) {
    slidePerView = 1;
  }
  return (
    <section>
      <div className="max-w-[1200px] mx-auto">
        <div className="">
          <Swiper
            slidesPerView={slidePerView}
            spaceBetween={30}
            loop={true}
            pagination={false}
            modules={[]}
            className="mySwiper brand-slider"
          >
            <SwiperSlide>
              <div className="brand-slider-item w-full mx-[15px] my-5 px-5 py-[10px] flex justify-center items-center bg-slate-200">
                <img src={brandLogo} alt="" />
              </div>
            </SwiperSlide>            
            <SwiperSlide>
              <div className="brand-slider-item w-full mx-[15px] my-5 px-5 py-[10px] flex justify-center items-center bg-slate-200">
                <img src={brandLogo} alt="" />
              </div>
            </SwiperSlide>            
            <SwiperSlide>
              <div className="brand-slider-item w-full mx-[15px] my-5 px-5 py-[10px] flex justify-center items-center bg-slate-200">
                <img src={brandLogo} alt="" />
              </div>
            </SwiperSlide>            
            <SwiperSlide>
              <div className="brand-slider-item w-full mx-[15px] my-5 px-5 py-[10px] flex justify-center items-center bg-slate-200">
                <img src={brandLogo} alt="" />
              </div>
            </SwiperSlide>            
            <SwiperSlide>
              <div className="brand-slider-item w-full mx-[15px] my-5 px-5 py-[10px] flex justify-center items-center bg-slate-200">
                <img src={brandLogo} alt="" />
              </div>
            </SwiperSlide>            
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SponsorSlider;
