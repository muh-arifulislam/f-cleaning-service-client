import React from "react";

// componnents
import SectionHeader from "../../components/User/SectionHeader";
import ServiceSlider from "../../components/User/ServiceSlider";

// images
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
          <ServiceSlider />
        </div>
      </div>
    </section>
  );
};

export default Services;
