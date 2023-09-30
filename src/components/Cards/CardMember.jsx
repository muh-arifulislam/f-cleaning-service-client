import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

// images
import image from "../../assets/images/team1-1.png";

const CardMember = () => {
  return (
    <div className="p-[10px] select-none">
      <div className="mb-[30px] bg-slate-100 rounded-full flex items-center justify-center overflow-hidden transition ease-out duration-300 hover:translate-y-2">
        <img src={image} alt="" />
      </div>
      <div className="text-center mb-5">
        <h2 className="text-2xl font-semibold mb-1">Pull Marodona</h2>
        <h4 className="text-lg font-semibold text-slate-600">Office Cleaner</h4>
      </div>
      <div className="flex gap-3 justify-center">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-yellow-400 text-blue-600 transition-all ease-linear duration-300 hover:bg-blue-700 hover:text-white"
        >
          <FaFacebookF size={"20px"} />
        </a>
        <a
          href="www.google.com"
          className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-yellow-400 text-blue-600 transition-all ease-linear duration-300 hover:bg-blue-700 hover:text-white"
        >
          <FaTwitter />
        </a>
        <a
          href="www.google.com"
          className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-yellow-400 text-blue-600 transition-all ease-linear duration-300 hover:bg-blue-700 hover:text-white"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="www.google.com"
          className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-yellow-400 text-blue-600 transition-all ease-linear duration-300 hover:bg-blue-700 hover:text-white"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default CardMember;
