import React from "react";
import { FiChevronRight } from "react-icons/fi";
const Button = ({ children }) => {
  return (
    <button className="custom-button ">
      {children}
      <span>
        <FiChevronRight fontSize={"22px"} />
      </span>
    </button>
  );
};

export default Button;
