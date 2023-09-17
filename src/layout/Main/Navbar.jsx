import React from "react";
import { FaRegClock, FaCalendar } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";
import SocialLinksButton from "../../components/SocialLinksButton";
import logoImage from "../../assets/images/logo.png";
const Navbar = () => {
  return (
    <header>
      <div className=" bg-blue-900">
        <div className="max-w-[1200px] mx-auto flex lg:flex-row md:flex-row flex-col justify-between">
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
            <button className="bg-yellow-300 px-8 font-bold text-slate-600 flex items-center gap-x-3">
              <span>
                <FaCalendar />
              </span>
              <span>Book Service</span>
            </button>
          </div>
        </div>
      </div>
      <nav>
        <div className="max-w-[1200px] mx-auto flex justify-between items-center px-5 border lg:border-0 border-b-2">
          <div>
            <img
              className="lg:max-w-[190px] max-w-[120px] py-2"
              src={logoImage}
              alt=""
            />
          </div>
          <ul className="lg:flex md:flex hidden">
            <li>
              <a
                href="www.google.com"
                className="block px-[20px] py-[36px] font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="www.google.com"
                className="block px-[20px] py-[36px] font-medium"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="www.google.com"
                className="block px-[20px] py-[36px] font-medium"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="www.google.com"
                className="block px-[20px] py-[36px] font-medium"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="lg:flex md:flex hidden items-center gap-x-5">
            <span>
              <LuPhoneCall size={"30px"} />
            </span>
            <div>
              <p className="text-lg">Quick Contact</p>
              <h4 className="text-xl font-bold">+985-8844-000</h4>
            </div>
          </div>
          <div className="lg:hidden block">
            <button>
              <TfiMenu />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
