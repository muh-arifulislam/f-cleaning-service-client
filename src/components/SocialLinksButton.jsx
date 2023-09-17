import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
const SocialLinksButton = () => {
  return (
    <div className="flex text-slate-300 gap-x-4">
      <span>
        <FaFacebookF color=""></FaFacebookF>
      </span>
      <span>
        <FaTwitter></FaTwitter>
      </span>
      <span>
        <FaInstagram />
      </span>
      <span>
        <FaLinkedin />
      </span>
    </div>
  );
};

export default SocialLinksButton;
