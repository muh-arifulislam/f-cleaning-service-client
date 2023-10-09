import React from "react";

// components
import SliderServices from "../../components/Sliders/SliderServices";

const ServicesSection = () => {
  return (
    <section className="bg-slate-100 lg:md:py-[120px] py-[60px] lg:md:px-0 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[50px] mb-5">
          <div className="">
            <h4 className="text-4xl leading-[1.4] text-primary font-semibold mb-2">
              We Provide Our Best Cleaning Services for You.
            </h4>
          </div>
          <div className="">
            <p className="text-lg mb-2 text-slate-600">
            We deliver top-notch cleaning services tailored to your needs, ensuring a spotless and refreshed space. Trust us for a cleaner, healthier environment that exceeds your expectations.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1220px] mx-auto px-5">
        <div className="-mx-5">
          <SliderServices />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
