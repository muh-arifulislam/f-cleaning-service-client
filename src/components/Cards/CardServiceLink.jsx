import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardServiceLink = () => {
  return (
    <div className="lg:md:p-[40px] p-5 border">
      <div className="relative pb-4 mb-8">
        <h4 className="text-xl font-semibold">Services</h4>
        <span className="absolute bottom-0 left-0 w-[40px] h-[2px] bg-blue-600"></span>
      </div>
      <div>
        <ul>
          <li className="py-3 border-b border-dashed">
            <Link
              className="text-md text-slate-600 inline-flex items-center gap-2 transition hover:text-blue-400"
              to="/services/65228a4ba226f01a90b2087c"
            >
              <span className="text-xs">
                <BsChevronRight />
              </span>
              <span className="">House Cleaning</span>
            </Link>
          </li>
          <li className="py-3 border-b border-dashed">
            <Link
              className="text-md text-slate-600 inline-flex items-center gap-2 transition hover:text-blue-400"
              to="/services/65228a4ba226f01a90b2087d"
            >
              <span className="text-xs">
                <BsChevronRight />
              </span>
              <span className="">Office Cleaning</span>
            </Link>
          </li>
          <li className="py-3 border-b border-dashed">
            <Link
              className="text-md text-slate-600 inline-flex items-center gap-2 transition hover:text-blue-400"
              to="/services/65228a4ba226f01a90b2087e"
            >
              <span className="text-xs">
                <BsChevronRight />
              </span>
              <span className="">Shop Cleaning</span>
            </Link>
          </li>
          <li className="py-3 border-b border-dashed">
            <Link
              className="text-md text-slate-600 inline-flex items-center gap-2 transition hover:text-blue-400"
              to="/services/65228a4ba226f01a90b2087f"
            >
              <span className="text-xs">
                <BsChevronRight />
              </span>
              <span className="">Sofa Deep Cleaning</span>
            </Link>
          </li>
          <li className="py-3 border-b border-dashed">
            <Link
              className="text-md text-slate-600 inline-flex items-center gap-2 transition hover:text-blue-400"
              to="/services/65228a4ba226f01a90b20889"
            >
              <span className="text-xs">
                <BsChevronRight />
              </span>
              <span className="">Garden Cleaning</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardServiceLink;
