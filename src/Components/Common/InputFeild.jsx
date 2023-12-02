import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const InputFeild = ({ className, placeholder, onChange, icon, type}) => {

  const theme = useSelector(store => store.themeReducer.theme)

  return (
    <>
    <label className="text-[14px] md:text-[16px]">{placeholder}</label>
      <div
        className={`border p-2 md:p-3 rounded-sm mb-2 md:mb-4 ${className} flex items-center mt-2 bg-transparent ${
          theme
            ? "border-black text-black"
            : "border-light-gray text-white"
        } `}
      >
        <FontAwesomeIcon
          icon={icon}
          className={`mr-2 ${theme ? "text-dark" : "text-light-gray"}`}
        />
        <input
          placeholder={placeholder}
          className={`border-none outline-none w-full bg-transparent`}
          onChange={onChange}
          type={type}
        />
      </div>
    </>
  );
};

export default InputFeild;
