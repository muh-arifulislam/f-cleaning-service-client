import React from "react";
import SectionHeader from "../../components/SectionHeader";
import ServiceSlider from "../../components/ServiceSlider";
import bgImage from "../../assets/images/section-bg14.jpg";
const Services = () => {
  return (
    <section>
      <SectionHeader title="Services Tab" />
      <div
        className="lg:md:py-[120px] py-[60px] lg:md:px-0 px-4"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
         <ServiceSlider/>
        </div>
      </div>
    </section>
  );
};

export default Services;
