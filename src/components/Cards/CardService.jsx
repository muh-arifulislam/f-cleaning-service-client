import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

// images
import icon from "../../assets/icons/spray.svg";

const CardService = ({ service }) => {
  return (
    <div className="px-[30px] py-[60px] rounded-md shadow-xl text-center select-none bg-white">
      <h1 className="text-2xl font-semibold mb-[28px] text-primary">{service?.title}</h1>
      <div className="bg-secondary w-[125px] h-[125px] flex justify-center items-center rounded-full mx-auto">
        <img className="w-[48px] h-[48px]" src={icon} alt="" />
      </div>
      <p className="my-[28px] text-slate-600">{service?.description1?.slice(0, 125)}...</p>
      <Link
        to={`/services/${service._id}`}
        className="inline-flex items-center gap-[6px] transition-all ease-linear duration-300 hover:gap-2 text-secondary"
      >
        <span>
          <BsFillArrowRightCircleFill />
        </span>
        <span className="font-semibold text-[16px]">READ MORE</span>
      </Link>
    </div>
  );
};

export default CardService;
