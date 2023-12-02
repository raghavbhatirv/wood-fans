import React from "react";

const ImageButton = ({ className, image, onClick, text }) => {
  return (
    <div
      className={`${className} cursor-pointer text-white font-semibold text-sm rounded-sm py-2 sm:py-2 md:py-2 lg:py-3 px-1 sm:px-2 md:px-1 lg:px-3 inline-flex justify-start items-center shadow-md hover:bg-gradient-to-r from-blue-500 active:transform scale-y-95 scale-x-1`}
      onClick={onClick}
    >
      <span
        className="mr-1 lg:mr-3 ml-0 block w-6 h-6 md:w-8 md:h-8 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></span>
      {text}
    </div>
  );
};

export default ImageButton;
