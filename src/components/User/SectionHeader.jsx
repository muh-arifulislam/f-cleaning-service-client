import React from "react";
import { useLocation } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";

// images
import bgImage from "../../assets/images/banner.jpg";

const SectionHeader = ({ title }) => {
  const { pathname } = useLocation();
  const paths = pathname.split("/").filter((item) => item !== "");
  paths.pop();
  return (
    <div
      className="relative z-0 lg:py-[140px] md:py-[140px] py-[80px] opacity-wrapper"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="z-10">
        <h2 className="text-center text-5xl font-semibold text-white mb-6">
          {title}
        </h2>
        <div
          className={`flex lg:md:flex-row items-center gap-1 justify-center ${
            paths.length > 1 ? "flex-col" : "flex-row"
          }`}
        >
          <span className="flex items-center gap-1">
            <span>
              <a
                className="text-lg font-medium text-white transition hover:text-amber-400"
                href="/home"
              >
                Home
              </a>
            </span>
            <span className="text-lg text-white mt-1">
              <BiChevronsRight />
            </span>
            {paths.map((path, idx) => (
              <span key={idx} className="inline-flex items-center gap-1">
                <span>
                  <a
                    className="text-lg font-medium text-white transition hover:text-amber-400"
                    href="/home"
                  >
                    {path}
                  </a>
                </span>
                <span className="text-lg text-white mt-1">
                  <BiChevronsRight />
                </span>
              </span>
            ))}
          </span>
          <span className="text-lg font-medium text-amber-400">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
