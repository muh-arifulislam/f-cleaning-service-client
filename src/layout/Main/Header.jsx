import React from "react";
import { Link } from "react-router-dom";
import { FaRegClock, FaCalendar } from "react-icons/fa";

// components
import SocialLinksButton from "../../components/Button/SocialLinksButton";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className=" bg-blue-900">
        <div className="max-w-[1200px] mx-auto lg:md:flex hidden lg:flex-row md:flex-row flex-col justify-between">
          <div className="flex lg:flex-row flex-col lg:gap-6 gap-2 items-center py-2">
            <SocialLinksButton></SocialLinksButton>
            <div className="flex items-center gap-x-3 text-slate-300">
              <span>
                <FaRegClock />
              </span>
              <span className="font-semibold">
                Mon - Fri: 09.00am - 10.00pm
              </span>
            </div>
          </div>
          <div className="lg:flex hidden">
            <Link
              to={"/book-service"}
              className="bg-yellow-300 px-8 font-bold text-slate-600 flex items-center gap-x-3"
            >
              <span>
                <FaCalendar />
              </span>
              <span>Book Service</span>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
