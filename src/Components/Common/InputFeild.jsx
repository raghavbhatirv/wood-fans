import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const InputFeild = ({
  className,
  placeholder,
  onChange,
  icon,
  type,
  error,
  pattern,
  value,
}) => {
  const theme = useSelector((store) => store.themeReducer.theme);

  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    setTouched((p) => !p);
    setTimeout(() => {
      setTouched(false);
    }, 2000);
  };

  return (
    <>
      <label className="text-[14px] md:text-[16px]">{placeholder}</label>
      <div
        className={`border p-2 md:p-3 rounded-sm mb-2 md:mb-4 ${className} flex items-center mt-2 bg-transparent ${
          theme ? "border-gray-400 text-black" : "border-light-gray text-white"
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
          value={value}
          onBlur={handleBlur}
          pattern={pattern}
          required
        />
      </div>
      {touched && !value && <p className="text-red-500">{error}</p>}
    </>
  );
};

export default InputFeild;
