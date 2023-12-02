import React from "react";
import CurvePouf from "./assets/media/Curve pouf.webp";
import bed from "./assets/media/BED WITH ADJUSTABLE HEADBOARD.webp";
function FactoryOrderPortfolio() {
  return (
    <div>
      <div className="py-10 flex justify-between ">
        <h3 className="text-dark text-3xl md:text-4xl">
          Factory order portfolio
        </h3>
        <p className="underline text-sm font-normal hover:cursor-pointer">
          SEE ALL
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="hover:cursor-pointer overflow-hidden">
          <img
            src={CurvePouf}
            className="hover:scale-105 transform transition duration-500"
          />
          <p className="text-xl py-3 md:py-2">CHILDREN'S BED SOFTY "SOFT"</p>
          <p className="text-xs font-base text-gray-400">
            Beautiful bed for a teenager "Softy"
          </p>
        </div>
        <div className="hover:cursor-pointer overflow-hidden">
          <img
            src={bed}
            className="hover:scale-105 transform transition duration-500"
          />
          <p className="text-xl py-2">VELOR SOFA</p>
          <p className="text-xs font-base text-gray-400">
            Sofa design artbabaynts
          </p>
        </div>
      </div>
    </div>
  );
}

export default FactoryOrderPortfolio;
