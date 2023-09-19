import React, { useState } from "react";
import userLogo from "../../assets/icons/user.png";
import figureLogo from "../../assets/icons/figure18.png";
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
const TestimoniSlider = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Md. Ariful Islam",
      occupation: "CEO, RT",
      ratings: 4,
      testimoni:
        '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur ratione magnam tempore, similique in exercitationem."',
    },
    {
      name: "Md. Ariful Islam",
      occupation: "CEO, RT",
      ratings: 4,
      testimoni:
        '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur ratione magnam tempore, similique in exercitationem."',
    },
    {
      name: "Md. Ariful Islam",
      occupation: "CEO, RT",
      ratings: 4,
      testimoni:
        '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur ratione magnam tempore, similique in exercitationem."',
    },
    {
      name: "Md. Ariful Islam",
      occupation: "CEO, RT",
      ratings: 4,
      testimoni:
        '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur ratione magnam tempore, similique in exercitationem."',
    },
  ]);
  let slidePerView = 2;
  if (window.screen.availWidth < 570) {
    slidePerView = 1;
  }
  return (
    <section className="relative py-[80px] bg-blue-900 overflow-hidden z-[0]">
      <div className="max-w-[1260px] mx-auto z-[1]">
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
            {testimonials.map((testimoni, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative px-[30px] py-[60px] rounded-md shadow-xl text-center">
                  <div>
                    <div className="flex justify-center items-center gap-1 text-orange-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="my-[28px] w-[80%] mx-auto">
                      {testimoni.testimoni}
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {testimoni.name}
                      </h3>
                      <h4 className="text-md font-medium text-slate-500">
                        {testimoni.occupation}
                      </h4>
                    </div>
                  </div>
                  <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <img
                      className="w-[80px] h-[80px] rounded-full shadow-xl"
                      src={userLogo}
                      alt=""
                    />
                  </div>
                  <span className="absolute right-[30px] bottom-[30px] text-6xl text-slate-200">
                    <FaQuoteRight />
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <img
        className="absolute top-0 right-0 translate-x-[30%] translate-y-[30%] z-[-1]"
        src={figureLogo}
        alt=""
      />
    </section>
  );
};

export default TestimoniSlider;
