import React from "react";
import { RiEmotionUnhappyLine } from "react-icons/ri";

const CardSliderError = ({ error = "something going wrong on fetching" }) => {
  return (
    <div className="bg-slate-300 lg:md:py-[100px] py-[40px] px-5 flex justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-2">
          <RiEmotionUnhappyLine className="text-5xl text-slate-500" />
        </div>
        <p className="text-2xl font-semibold text-black mb-2">""{error}""</p>
        <p className="text-md font-medium">
          Please, Reload website or try logout and login again....
        </p>
      </div>
    </div>
  );
};

export default CardSliderError;
