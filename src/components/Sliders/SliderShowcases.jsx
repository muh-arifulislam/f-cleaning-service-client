import React, { useState } from "react";
import useModal from "../../hooks/useModal";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

// components
import CardShowcaseItem from "../Cards/CardShowcaseItem";
import { useGlobalState } from "../../state/GlobalStateProvider";
import ModalShowShowcase from "../Modals/ModalShowShowcase";
import SliderLoader from "../Loader/SliderLoader";
import CardSliderError from "../Cards/CardSliderError";

const SliderShowcases = () => {
  const { showcases, apiUrl } = useGlobalState();
  let slidePerView = 4;
  if (window.screen.availWidth < 570) {
    slidePerView = 1;
  }

  const { modalIsOpen, openModal, closeModal } = useModal();
  const [modalViewImg, setModalViewImg] = useState(null);
  if (showcases.loading) {
    return <SliderLoader />;
  }
  if (showcases.error) {
    return <CardSliderError error={showcases.error} />;
  }
  return (
    <>
      <Swiper
        slidesPerView={slidePerView}
        spaceBetween={0}
        loop={true}
        pagination={false}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper showcases-slider"
      >
        {showcases?.data?.map((showcase) => (
          <SwiperSlide
            onClick={() => {
              setModalViewImg(`${apiUrl + "uploads/images/" + showcase.img}`);
              openModal();
            }}
            key={showcase?._id}
            className="cursor-pointer"
          >
            <CardShowcaseItem showcase={showcase} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ModalShowShowcase
        isOpen={modalIsOpen}
        closeModal={closeModal}
        img={modalViewImg}
      />
    </>
  );
};

export default SliderShowcases;
