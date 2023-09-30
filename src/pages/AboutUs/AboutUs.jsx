import React from "react";
import { GrPlayFill } from "react-icons/gr";
import { BsCheckCircle } from "react-icons/bs";

// components
import SectionHeader from "../../components/User/SectionHeader";
import SponsorSlider from "../../components/User/SponsorSlider";
import Button from "../../components/User/Button";
// import WorkingProcessSection from "../User/Home/WorkingProcessSection";
// import ExpertsSection from "../Home/ExpertsSection";

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
            <h4 className="text-lg font-medium mb-[15px]">Know About Us</h4>
            <p className="text-4xl font-bold leading-[1.4] mb-[15px]">
              Affordable Pricing Plan, Expert and Quality Services We Provide.
            </p>
          </div>
          <div className="p-[10px]">
            <p className="mb-[15px]">
              Chen an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.Chen an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries.
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
                <span className="mt-1 text-4xl text-blue-600">
                  <BsCheckCircle className="" />
                </span>
                <div className="mb-5">
                  <h4 className="text-2xl font-semibold mb-2">
                    Customer Focused Reviews
                  </h4>
                  <p>
                    Aorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="p-[10px] flex items-start gap-5">
                <span className="mt-1 text-4xl text-blue-600">
                  <BsCheckCircle className="" />
                </span>
                <div className="mb-5">
                  <h4 className="text-2xl font-semibold mb-2">
                    Customer Focused Reviews
                  </h4>
                  <p>
                    Aorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="p-[10px] flex items-start gap-5">
                <span className="mt-1 text-4xl text-blue-600">
                  <BsCheckCircle className="" />
                </span>
                <div>
                  <h4 className="text-2xl font-semibold mb-2">
                    Customer Focused Reviews
                  </h4>
                  <p>
                    Aorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="p-[10px] flex items-start gap-5">
                <span className="mt-1 text-4xl text-blue-600">
                  <BsCheckCircle className="" />
                </span>
                <div>
                  <h4 className="text-2xl font-semibold mb-2">
                    Customer Focused Reviews
                  </h4>
                  <p>
                    Aorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-400 ">
        {/* <ExpertsSection /> */}
        expert section
      </div>
      <div>
        {/* <WorkingProcessSection /> */}
        working process section
      </div>
      <div className="bg-blue-400 py-[40px] px-4">
        <div className="max-w-[1200px] mx-auto grid lg:md:grid-cols-2 grid-cols-1 gap-y-5">
          <div>
            <img src={personImage} alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-semibold leading-[1.4] mb-5">
              Together We'll Explore New Things
            </h2>
            <p className="mb-5">
              Chen an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially.
            </p>
            <div>
              <Button>Book Service</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <SponsorSlider />
      </div>
    </section>
  );
};

export default AboutUs;
