import React from "react";

// components
import ServicesSlider from "../../../components/User/ServiceSlider";

const ServicesSection = () => {
  return (
    <section className="bg-slate-200 lg:md:py-[120px] py-[60px] lg:md:px-0 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[50px] mb-5">
          <div className="">
            <h4 className="text-4xl leading-[1.4] text-primary font-semibold mb-2">
              We Provide Our Best Cleaning Services for You.
            </h4>
          </div>
          <div className="">
            <p className="text-lg mb-2">
              Perspiciatis unde omnis iste natus error sit voluptatem
              accusantium dol oremque laudantium, totam remeaque
              ipsaPerspiciatis unde omnis iste natus error sit voluptatem
              accusanti umoremque.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1220px] mx-auto px-5">
        <div className="-mx-5">
          <ServicesSlider />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
