import React from "react";

// components
import SliderExperts from "../../components/Sliders/SliderExperts";

const ExpertsSection = () => {
  return (
    <section className="lg:md:py-[120px] py-[60px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-5 lg:md:px-0 px-4">
          <h2 className="text-4xl text-primary leading-[1.4] font-semibold mb-5">
            Our Working Experts
          </h2>
          <p className="text-lg lg:md:w-[60%] w-[80%] mx-auto">
            Perspiciatis unde omnis iste natus error sit voluptatem accusantium
            dol oremque laudantium, totam remeaque ipsa.
          </p>
        </div>
        <div className="lg:md:px-0 px-[6px]">
          <SliderExperts />
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
