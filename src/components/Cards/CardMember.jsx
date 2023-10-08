import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

// images
import person from "../../assets/icons/man.png";

const CardMember = ({ name, designation }) => {
  return (
    <div className="px-[10px] py-8 select-none">
      <div className="mb-[30px] rounded-full flex items-center justify-center overflow-hidden transition ease-out duration-300 hover:translate-y-2">
        <img className="w-full max-w-[200px]" src={person} alt="" />
      </div>
      <div className="text-center mb-5">
        <h2 className="text-xl font-semibold mb-1 text-primary">{name}</h2>
        <h4 className="text-[14px] font-semibold tracking-wider text-slate-600">
          {designation}
        </h4>
      </div>
      <div className="flex gap-3 justify-center text-primary">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-yellow-400  transition-all ease-linear duration-300 hover:bg-primary hover:text-white"
        >
          <FaFacebookF size={"20px"} />
        </a>
        <a
          href="www.google.com"
          className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-yellow-400 transition-all ease-linear duration-300 hover:bg-primary hover:text-white"
        >
          <FaTwitter />
        </a>
        <a
          href="www.google.com"
          className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-yellow-400  transition-all ease-linear duration-300 hover:bg-primary hover:text-white"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="www.google.com"
          className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-yellow-400  transition-all ease-linear duration-300 hover:bg-primary hover:text-white"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default CardMember;
