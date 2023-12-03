import React from "react";
import { useSelector } from "react-redux";

const Button = ({ text, className, onClick, type }) => {
  return (
    <div
      className={`w-full p-2 md:p-3 text-[14px] md:text-[16px] text-center ${className} rounded-sm border transition-all duration-300 ease-in-out hover:bg-transparent hover:border`}
    >
      <button className={`w-full`} onClick={onClick} type={type}>
        {text}
      </button>
    </div>
  );
};

export default Button;
