import React from "react";
import userLogo from "../../assets/icons/user.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
const TestimoniSlider = () => {
  let slidePerView = 2;
  if (window.screen.availWidth < 570) {
    slidePerView = 1;
  }
  return (
    <section className=" py-[80px] bg-blue-900">
      <div className="max-w-[1260px] mx-auto">
        <div className="mb-8 text-center">
          <h4 className="text-4xl font-semibold mb-2 text-white">
            <span className="block mb-1">What’s Client’s Say</span>
            <span className="block">About Us</span>
          </h4>
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
              <div className="relative px-[30px] py-[60px] rounded-md shadow-xl text-center">
                <div>
                  <div className="flex justify-center items-center gap-1 text-orange-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="my-[28px] w-[80%] mx-auto">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere pariatur ratione magnam tempore, similique in
                    exercitationem."
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Mike Tyson</h3>
                    <h4 className="text-md font-medium text-slate-500">
                      CEO, RT
                    </h4>
                  </div>
                </div>
                <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <img className="w-[80px] h-[80px] rounded-full shadow-xl" src={userLogo} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative px-[30px] py-[60px] rounded-md shadow-xl text-center">
                <div>
                  <div className="flex justify-center items-center gap-1 text-orange-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="my-[28px] w-[80%] mx-auto">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere pariatur ratione magnam tempore, similique in
                    exercitationem."
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Mike Tyson</h3>
                    <h4 className="text-md font-medium text-slate-500">
                      CEO, RT
                    </h4>
                  </div>
                </div>
                <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <img className="w-[80px] h-[80px] rounded-full shadow-xl" src={userLogo} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative px-[30px] py-[60px] rounded-md shadow-xl text-center">
                <div>
                  <div className="flex justify-center items-center gap-1 text-orange-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="my-[28px] w-[80%] mx-auto">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere pariatur ratione magnam tempore, similique in
                    exercitationem."
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Mike Tyson</h3>
                    <h4 className="text-md font-medium text-slate-500">
                      CEO, RT
                    </h4>
                  </div>
                </div>
                <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <img className="w-[80px] h-[80px] rounded-full shadow-xl" src={userLogo} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative px-[30px] py-[60px] rounded-md shadow-xl text-center">
                <div>
                  <div className="flex justify-center items-center gap-1 text-orange-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="my-[28px] w-[80%] mx-auto">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere pariatur ratione magnam tempore, similique in
                    exercitationem."
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Mike Tyson</h3>
                    <h4 className="text-md font-medium text-slate-500">
                      CEO, RT
                    </h4>
                  </div>
                </div>
                <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <img className="w-[80px] h-[80px] rounded-full shadow-xl" src={userLogo} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimoniSlider;
