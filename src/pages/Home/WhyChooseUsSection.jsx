import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import personImage1 from "../../assets/images/img_tri_1.png";
import personImage2 from "../../assets/images/img_tri_2.png";
import personImage3 from "../../assets/images/img_tri_3.png";
const WhyChooseUsSection = () => {
  return (
    <section className="lg:md:py-[120px] py-[60px] lg:px-0 px-4">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 grid-cols-1">
        <div className="">
          <p className="text-lg font-medium text-secondary mb-2">
            Why Choose Us
          </p>
          <h2 className="rtin-title font-semibold">
            We Will Make Absolutely Any Place Clean, Neat & Tidy.
          </h2>
          <p className="mb-5">
            Spa isa newsimply dummy text of the printing and type settingreat
            industrial lorem Ipsum has been the industry's standard dummy text
            everty since the when an unknown centurie.
          </p>
          <div>
            <ul>
              <li>
                <div className="flex items-start gap-5">
                  <span className="mt-1 text-4xl text-secondary">
                    <BsCheckCircle className="" />
                  </span>
                  <div className="mb-5">
                    <h4 className="text-[22px] text-primary leading-[1.4] font-semibold mb-3">
                      Customer Focused Reviews
                    </h4>
                    <p>
                      Aorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-5">
                  <span className="mt-1 text-4xl text-secondary">
                    <BsCheckCircle className="" />
                  </span>
                  <div className="mb-5">
                    <h4 className="text-[22px] text-primary leading-[1.4] font-semibold mb-3">
                      Customer Focused Reviews
                    </h4>
                    <p>
                      Aorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-5">
                  <span className="mt-1 text-4xl text-secondary">
                    <BsCheckCircle className="" />
                  </span>
                  <div>
                    <h4 className="text-[22px] text-primary leading-[1.4] font-semibold mb-3">
                      Customer Focused Reviews
                    </h4>
                    <p>
                      Aorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative ">
          <div className="relative w-full lg:h-full h-full flex justify-center items-start">
            <img
              className="transition hover:scale-[1.1]"
              src={personImage1}
              alt=""
            />
            <img
              className="absolute bottom-0 left-0 z-10 lg:inline-block hidden transition hover:scale-[1.1]"
              src={personImage2}
              alt=""
            />
            <img
              className="absolute bottom-0 right-0 lg:inline-block hidden transition hover:scale-[1.1]"
              src={personImage3}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
