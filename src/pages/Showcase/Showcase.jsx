import React from "react";
import SectionHeader from "../../components/SectionHeader";
import SliderShowcases from "../../components/Sliders/SliderShowcases";

const Showcase = () => {
  return (
    <>
      <SectionHeader title={"Showcase"} />
      <div className="lg:md:py-[120px] py-[60px] lg:md:px-0 px-4">
        <div className="max-w-[1200px] mx-auto">
          <SliderShowcases />
        </div>
      </div>
    </>
  );
};

export default Showcase;
