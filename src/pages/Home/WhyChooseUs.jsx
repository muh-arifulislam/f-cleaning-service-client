import React from "react";
import { BsCheckCircle } from "react-icons/bs";
const WhyChooseUs = () => {
  return (
    <section className="py-[120px]">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 grid-cols-1">
        <div className="p-[10px]">
          <h2 className="text-lg font-semibold mb-2">Why Choose Us</h2>
          <h4 className="text-4xl font-semibold leading-[3rem] mb-5">We Will Make Absolutely Any Place Clean, Neat & Tidy.</h4>
          <p className="mb-5">
            Spa isa newsimply dummy text of the printing and type settingreat
            industrial lorem Ipsum has been the industry's standard dummy text
            everty since the when an unknown centurie.
          </p>
          <div>
            <ul>
              <li>
                <div className="flex items-start gap-5">
                  <span className="mt-1 text-4xl text-blue-600">
                    <BsCheckCircle className="" />
                  </span>
                  <div className="mb-5">
                    <h4 className="text-2xl font-semibold mb-2">
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
                  <span className="mt-1 text-4xl text-blue-600">
                    <BsCheckCircle className="" />
                  </span>
                  <div className="mb-5">
                    <h4 className="text-2xl font-semibold mb-2">
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
                  <span className="mt-1 text-4xl text-blue-600">
                    <BsCheckCircle className="" />
                  </span>
                  <div>
                    <h4 className="text-2xl font-semibold mb-2">
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
        <div></div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
