import React from "react";
import { FaCheck } from "react-icons/fa";
import image from "../../assets/images/about14.jpg";
import Button from "../../components/Button";
const TopFeature = () => {
  return (
    <section className="max-w-[1200px] mx-auto pt-[80px]">
      <div className="flex lg:flex-row flex-col items-center">
        <div className="relative p-[10px]">
          <img src={image} className="max-w-full" alt="" />
        </div>
        <div className="lg:w-[40%] w-full p-[10px]">
          <h4 className=" text-4xl font-bold leading-[1.3] mb-5 text-[#14287b]">
            Making Your House
            <br />
            <span className="font-normal">As Good As New</span>
          </h4>

          <p className="text-lg mb-5">
            Spa isa newsimply dummy text of the printing and type settingare
            industrLorem Ipsum has been the industry's standard dummy text
            everty since the when an unknown centuries.
          </p>
          <p className="text-lg mb-5">
            Spa isa newsimply dummy text of the printing and type settingare
            industrLorem Ipsum has been the industry's standard dummy text
            everty since the when an unknown centuries.
          </p>
          <ul className="mb-[40px]">
            <li className="mb-[6px]">
              <p className="flex items-center gap-4">
                <span>
                  <FaCheck />
                </span>
                <span className="text-lg font-semibold">Experienced Team</span>
              </p>
            </li>
            <li className="mb-[6px]">
              <p className="flex items-center gap-4">
                <span>
                  <FaCheck />
                </span>
                <span className="text-lg font-semibold">Experienced Team</span>
              </p>
            </li>
            <li className="mb-[6px]">
              <p className="flex items-center gap-4">
                <span>
                  <FaCheck />
                </span>
                <span className="text-lg font-semibold">Experienced Team</span>
              </p>
            </li>
            <li className="mb-[6px]">
              <p className="flex items-center gap-4">
                <span>
                  <FaCheck />
                </span>
                <span className="text-lg font-semibold">Experienced Team</span>
              </p>
            </li>
            <li className="mb-[6px]">
              <p className="flex items-center gap-4">
                <span>
                  <FaCheck />
                </span>
                <span className="text-lg font-semibold">Experienced Team</span>
              </p>
            </li>
          </ul>
          <Button>Book a Service</Button>
        </div>
      </div>
    </section>
  );
};

export default TopFeature;
