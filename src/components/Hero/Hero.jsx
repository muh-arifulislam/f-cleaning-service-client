import React from "react";
import { FaCheck } from "react-icons/fa";

// images
import image from "../../assets/images/service10.jpg";

const Hero = () => {
  return (
    <div className="grid lg:md:grid-cols-2 grid-cols-1 gap-5">
      <div>
        <img className="rounded" src={image} alt="" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-primary mb-5">
          Experienced People can help you more.
        </h2>
        <p className="mb-5 text-slate-600">
          Ahen an unknown printer took a galley of type andty scrambled it to
          make a type specimen book areIter hasear survived not only five
          centuries, but also the leap into electronic type.
        </p>
        <ul>
          <li className="mb-[6px]">
            <p className="flex items-center gap-4">
              <span className="text-secondary">
                <FaCheck />
              </span>
              <span className="text-md font-medium text-slate-600">
                Experienced Team
              </span>
            </p>
          </li>
          <li className="mb-[6px]">
            <p className="flex items-center gap-4">
              <span className="text-secondary">
                <FaCheck />
              </span>
              <span className="text-md font-medium text-slate-600">
                Keep the same cleaner for every visit
              </span>
            </p>
          </li>
          <li className="mb-[6px]">
            <p className="flex items-center gap-4">
              <span className="text-secondary">
                <FaCheck />
              </span>
              <span className="text-md font-medium text-slate-600">
                One-off, weekly or fortnightly visits
              </span>
            </p>
          </li>
          <li className="mb-[6px]">
            <p className="flex items-center gap-4">
              <span className="text-secondary">
                <FaCheck />
              </span>
              <span className="text-md font-medium text-slate-600">
                Book, manage & pay online
              </span>
            </p>
          </li>
          <li className="mb-[6px]">
            <p className="flex items-center gap-4">
              <span className="text-secondary">
                <FaCheck />
              </span>
              <span className="text-md font-medium text-slate-600">
                All in all service
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
