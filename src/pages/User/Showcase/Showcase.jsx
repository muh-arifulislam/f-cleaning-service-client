import React from "react";
import SectionHeader from "../../../components/User/SectionHeader";
import ShowcaseSlider from "../../../components/User/ShowcaseSlider";

const Showcase = () => {
  return (
    <>
      <SectionHeader title={"Showcase"} />
      <div className="lg:md:py-[120px] py-[60px] lg:md:px-0 px-4">
        <div className="max-w-[1200px] mx-auto">
          <ShowcaseSlider />
        </div>
      </div>
    </>
  );
};

export default Showcase;
