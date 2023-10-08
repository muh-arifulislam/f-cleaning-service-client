import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

const SliderServiceCategory = ({
  categories,
  filteredTags,
  setFilteredTags,
}) => {
  let slidePerView = 5;
  let spaceBetween = 30;
  if (window.screen.availWidth < 570) {
    slidePerView = 2;
    spaceBetween = 10;
  }
  const [_, setInit] = useState();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const handleFilterTag = (tag) => {
    if (filteredTags.includes(tag)) {
      setFilteredTags(filteredTags.filter((item) => item !== tag));
    } else {
      setFilteredTags([...filteredTags, tag]);
    }
  };
  return (
    <div className="">
      <Swiper
        slidesPerView={slidePerView}
        spaceBetween={spaceBetween}
        loop={true}
        pagination={false}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Navigation]}
        className="mySwiper service-category-slider"
        onInit={() => setInit(true)}
      >
        {categories.map((category, idx) => (
          <SwiperSlide key={idx}>
            <button
              onClick={() => handleFilterTag(category.toLowerCase())}
              className={`shodow  text-lg font-medium px-7  flex justify-center items-center py-3 w-full transition-all ease-linear duration-300 hover:bg-secondary hover:text-white ${
                filteredTags.includes(category.toLowerCase())
                  ? "bg-secondary text-white"
                  : "bg-none text-slate-600"
              }`}
            >
              <span>{category}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col lg:md:justify-center justify-end">
        <div className="flex justify-between">
          <button
            ref={prevRef}
            className="w-[45px] h-[45px] bg-tertiary rounded-full flex items-center justify-center"
          >
            <FaChevronLeft />
          </button>
          <button
            ref={nextRef}
            className="w-[45px] h-[45px] bg-tertiary rounded-full flex items-center justify-center"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderServiceCategory;
