import React from "react";

// components
import SliderExperts from "../../components/Sliders/SliderExperts";

const ExpertsSection = ({ varient }) => {
  return (
    <section className="lg:md:py-[120px] py-[60px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-5 lg:md:px-0 px-4">
          <h2
            className={`text-4xl leading-[1.4] font-semibold mb-5 ${
              varient === "secondary" ? "text-white" : "text-primary"
            }`}
          >
            Our Working Experts
          </h2>
          <p
            className={`text-lg lg:md:w-[60%] w-[80%] mx-auto  ${
              varient === "secondary" ? "text-white" : "text-slate-600"
            }`}
          >
            A dedicated team of seasoned professionals, delivering top-tier
            solutions and insights to meet your business needs.
          </p>
        </div>
        <div className="lg:md:px-0 px-[10px]">
          <SliderExperts />
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
