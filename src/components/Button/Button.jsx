import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
const Button = ({
  children,
  type = "",
  className = "",
  varient,
  href = "/",
}) => {
  if (varient === "link") {
    return (
      <Link to={href} className={"custom-button " + className}>
        {children}
        <span>
          <FiChevronRight fontSize={"22px"} />
        </span>
      </Link>
    );
  }
  return (
    <button type={type} className={"custom-button " + className}>
      {children}
      <span>
        <FiChevronRight fontSize={"22px"} />
      </span>
    </button>
  );
};

export default Button;
