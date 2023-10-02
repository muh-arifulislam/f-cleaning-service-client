import React from "react";
import { FaCheck } from "react-icons/fa";

// components
import Button from "../../components/Button/Button";

// images
import image from "../../assets/images/about14.jpg";

const HeroFeatureSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto pt-[60px] pb-10 px-4">
      <div className="flex lg:md:flex-row flex-col gap-5 items-center">
        <div className="relative">
          <img src={image} className="max-w-full" alt="" />
        </div>
        <div className="lg:w-[40%] w-full">
          <h4 className="rtin-title">
            <span className="font-semibold">Making Your House</span>
            <br />
            <span className="font-light">As Good As New</span>
          </h4>
          <p className="text-lg mb-5 text-slate-600">
            Spa isa newsimply dummy text of the printing and type settingare
            industrLorem Ipsum has been the industry's standard dummy text
            everty since the when an unknown centuries.
          </p>
          <p className="text-lg mb-5 text-slate-600">
            Spa isa newsimply dummy text of the printing and type settingare
            industrLorem Ipsum has been the industry's standard dummy text
            everty since the when an unknown centuries.
          </p>
          <ul className="mb-[40px]">
            <li className="mb-[6px]">
              <p className="flex items-center gap-4">
                <span className="text-primary">
                  <FaCheck />
                </span>
                <span className="text-lg font-medium  text-slate-600">
                  Experienced Team
                </span>
              </p>
            </li>
            <li className="mb-[6px]">
              <p className="flex items-center gap-4">
                <span className="text-primary">
                  <FaCheck />
                </span>
                <span className="text-lg font-medium  text-slate-600">
                  Keep the same cleaner for every visit
                </span>
              </p>
            </li>
            <li className="mb-[6px]">
              <p className="flex items-center gap-4">
                <span className="text-primary">
                  <FaCheck />
                </span>
                <span className="text-lg font-medium  text-slate-600">
                  One-off, weekly or fortnightly visits
                </span>
              </p>
            </li>
            <li className="mb-[6px]">
              <p className="flex items-center gap-4">
                <span className="text-primary">
                  <FaCheck />
                </span>
                <span className="text-lg font-medium  text-slate-600">
                  Book, manage & pay online
                </span>
              </p>
            </li>
            <li className="mb-[6px]">
              <p className="flex items-center gap-4">
                <span className="text-primary">
                  <FaCheck />
                </span>
                <span className="text-lg font-medium  text-slate-600">
                  All in all service
                </span>
              </p>
            </li>
          </ul>
          <Button varient={"link"} href="/book-service">
            Book a Service
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroFeatureSection;
