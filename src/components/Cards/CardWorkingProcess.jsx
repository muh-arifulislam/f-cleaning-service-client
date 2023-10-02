import React, { useState } from "react";

const CardWorkingProcess = ({ IconComponent, title, content }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex flex-col items-center px-4 text-center"
    >
      <div
        className={`w-[150px] h-[150px]  rounded-md flex items-center justify-center text-white shadow-md mb-8  transition ease-linear duration-300 ${
          hover ? "rotate-0 bg-white" : "rotate-12 bg-secondary"
        }`}
      >
        <IconComponent className={`${hover ? "text-secondary" : "text-white"}`}
          size={"48px"}/>
      </div>
      <h2 className="text-[22px] text-primary leading-[1.3] font-semibold hover:text-secondary mb-5">
        {title}
      </h2>
      <p className="text-slate-600">
        {content}
      </p>
    </div>
  );
};

export default CardWorkingProcess;
