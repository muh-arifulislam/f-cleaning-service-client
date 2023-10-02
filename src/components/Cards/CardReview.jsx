import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";

// images
import userLogo from "../../assets/icons/user.png";

const CardReview = ({ review }) => {
  return (
    <div className="relative w-full px-[30px] py-[60px] rounded-md shadow-xl text-center">
      <div>
        <div className="flex justify-center items-center gap-1 text-orange-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p className="my-[28px] w-[80%] mx-auto text-slate-600">"{review.testimonial}"</p>
        <div>
          <h3 className="text-xl font-semibold mb-1 text-primary">{review.name}</h3>
          <h4 className="text-sm font-medium text-slate-500">
            {review.designation}
          </h4>
        </div>
      </div>
      <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <img
          className="w-[80px] h-[80px] rounded-full shadow-xl"
          src={userLogo}
          alt=""
        />
      </div>
      <span className="absolute right-[30px] bottom-[30px] text-6xl text-slate-200">
        <FaQuoteRight />
      </span>
    </div>
  );
};

export default CardReview;
