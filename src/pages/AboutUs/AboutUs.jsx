import React from "react";
import { GrPlayFill } from "react-icons/gr";
import { BsCheckCircle } from "react-icons/bs";

// components
import SectionHeader from "../../components/SectionHeader";
import SliderSponsors from "../../components/Sliders/SliderSponsors";
import Button from "../../components/Button/Button";

import WorkingProcessSection from "../Home/WorkingProcessSection";
import ExpertsSection from "../Home/ExpertsSection";

// images
import image from "../../assets/images/about13.jpg";
import personImage from "../../assets/images/figure9.png";

const AboutUs = () => {
  return (
    <section>
      <SectionHeader title={"About Us"} />
      <div className="max-w-[1200px] mx-auto lg:md:py-[120px] py-[60px]">
        <div className="grid lg:md:grid-cols-2 grid-cols-1">
          <div className="p-[10px]">
            <h4 className="text-lg font-medium mb-[15px] text-secondary">
              Know About Us
            </h4>
            <p className="text-4xl font-bold leading-[1.4] mb-[15px] text-primary">
              Affordable Pricing Plan, Expert and Quality Services We Provide.
            </p>
          </div>
          <div className="p-[10px]">
            <p className="mb-[15px] text-slate-600">
              Experience the epitome of cleanliness with our professional
              cleaning service. We pride ourselves on delivering spotless spaces
              that shine with hygiene and freshness. Our skilled and trustworthy
              team employs the latest techniques and eco-friendly products to
              ensure every nook and cranny is immaculate. Whether it's
              residential, commercial, or specialized cleaning, we're your
              trusted partner in maintaining a pristine and healthy environment
              for you and your loved ones.
            </p>
          </div>
        </div>
        <div className="p-[10px] relative">
          <img className="max-w-full" src={image} alt="" />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[75px] h-[75px] bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl ml-1 ">
              <GrPlayFill color="red" />
            </span>
          </div>
        </div>
        <div className="pt-[50px]">
          <ul className="grid lg:md:grid-cols-2 grid-cols-1">
            <li>
              <div className="p-[10px] flex items-start gap-5">
                <span className="mt-1 text-4xl text-secondary">
                  <BsCheckCircle className="" />
                </span>
                <div className="mb-5">
                  <h4 className="text-2xl font-semibold mb-2 text-primary">
                    Customer Focused Reviews
                  </h4>
                  <p className="text-slate-600">
                    Our dedicated evaluations prioritize your feedback and
                    needs, ensuring exceptional products and services tailored
                    to your satisfaction.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="p-[10px] flex items-start gap-5">
                <span className="mt-1 text-4xl text-secondary">
                  <BsCheckCircle className="" />
                </span>
                <div className="mb-5">
                  <h4 className="text-2xl font-semibold mb-2 text-primary">
                    We Are Committed
                  </h4>
                  <p className="text-slate-600">
                    We are committed to unwavering excellence, delivering on
                    promises, and exceeding expectations to build lasting trust
                    and relationships.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-secondary ">
        <ExpertsSection varient="secondary" />
      </div>
      <div>
        <WorkingProcessSection />
      </div>
      <div className="bg-blue-400 py-[40px] px-4">
        <div className="max-w-[1200px] mx-auto grid lg:md:grid-cols-2 grid-cols-1 gap-y-5">
          <div>
            <img src={personImage} alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-semibold leading-[1.4] mb-5 text-white">
              Together We'll Explore New Things
            </h2>
            <p className="mb-5 text-slate-50">
            United, we embark on exciting journeys of discovery, embracing fresh experiences, and forging unforgettable memories as we venture into the unknown.
            </p>
            <div>
              <Button varient={"link"} href="/book-service">
                Book Service
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <SliderSponsors />
      </div>
    </section>
  );
};

export default AboutUs;
