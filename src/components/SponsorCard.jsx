import React from "react";
const SponsorCard = ({ logo }) => {
  return (
    <div className="brand-slider-item w-full mx-[16px] my-5 px-5 py-[10px] flex justify-center items-center bg-slate-200">
      <img src={logo} alt="" />
    </div>
  );
};

export default SponsorCard;
