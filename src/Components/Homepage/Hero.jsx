import React from "react";
import heroImage from "./assets/media/heroImage.jpg";

function Hero() {
  return (
    <div>
      <div className="relative">
        <img src={heroImage} className="w-full" />
        <div className="w-full md:w-1/2 absolute top-2 md:top-14 md:left-36 z-10 px-5">
          <p className="text-xs md:text-base text-gray-200 opacity-50">
            Modern furniture factory
          </p>
          <h2 className="text-2xl md:text-7xl font-base text-white leading-tight">
            WE PRODUCE UPHOLSTERED FURNITURE
          </h2>
        </div>
        <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
      </div>
    </div>
  );
}

export default Hero;
