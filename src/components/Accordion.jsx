import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
const Accordian = ({ title, content, isActive = false }) => {
  const [isOpen, setIsOpen] = useState(isActive);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="border rounded mb-5">
      <button
        className={`w-full px-5 py-3 rounded flex justify-between items-center ${
          isOpen ? "bg-blue-700 text-white" : "bg-none"
        }`}
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium">{title}</span>
        <span
          className={`inline-flex w-[45px] h-[45px] border rounded-full items-center justify-center transform transition-transform ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <span className="text-3xl">
            <BiChevronRight />
          </span>
        </span>
      </button>
      {isOpen && (
        <div className="p-5">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordian;
