import React, { useState } from "react";

import figureLogo from "../../assets/icons/figure18.png";
import TestimonialSlider from "../../components/TestimonialSlider";

const TestimonialSection = () => {
  return (
    <section className="relative lg:md:py-[120px] py-[60px] bg-primary overflow-hidden z-[0]">
      <div className="max-w-[1200px] mx-auto z-[1] px-[16px]">
        <div className="mb-8 text-center">
          <h4 className="text-4xl leading-[1.4] font-semibold mb-2 text-white">
            <span className="block mb-1">What’s Client’s Say</span>
            <span className="block">About Us</span>
          </h4>
        </div>
        <div className="">
          <TestimonialSlider />
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

export default TestimonialSection;
