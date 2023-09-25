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
const TestimonialSlider = () => {
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
      {testimonials.map((testimoni, idx) => (
        <SwiperSlide key={idx}>
          <TestimonialCard testimoni={testimoni} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
