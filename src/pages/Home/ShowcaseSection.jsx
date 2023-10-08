import React from "react";
import SliderShowcases from "../../components/Sliders/SliderShowcases";

const ShowcaseSection = () => {
  return (
    <section className="bg-slate-200 lg:md:py-[120px] py-[60px] lg:md:px-0 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[50px] mb-5">
          <div className="">
            <h4 className="text-4xl leading-[1.4] text-primary font-semibold mb-2">
              Our Recent Works
            </h4>
          </div>
          <div className="">
            <p className="text-lg mb-2 text-slate-600">
              Our recent works showcase our latest achievements, a testament to
              our commitment to excellence, innovation, and delivering
              outstanding solutions for our valued clients.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="-mx-5">
          <SliderShowcases />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
