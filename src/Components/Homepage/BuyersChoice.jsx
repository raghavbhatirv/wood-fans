import React, { useState } from "react";
import RandomProducts from "../Common/RandomProducts";
function BuyersChoice() {
  const [selected, setSelected] = useState("SOFAS");

  return (
    <div className="pt-10">
      <div>
        <h3 className="text-dark text-4xl">Buyers' choice</h3>
      </div>
      <div className="flex justify-between pt-10 text-sm gap-5">
        <div className="flex max-w-md overflow-scroll md:max-w-full md:overflow-auto justify-between gap-10 border-b border-gray-200">
          <div
            className={`transition-all duration-150 cursor-pointer ${
              selected === "SOFAS"
                ? "border-b-2 border-gray-700"
                : "hover:border-b-2 border-gray-400"
            }`}
            onClick={() => setSelected("SOFAS")}
          >
            <p className="pb-2">SOFAS</p>
          </div>
          <div
            className={`transition-all duration-150 cursor-pointer ${
              selected === "BEDS"
                ? "border-b-2 border-gray-700"
                : "hover:border-b-2 border-gray-400"
            }`}
            onClick={() => setSelected("BEDS")}
          >
            <p className="pb-2">BEDS</p>
          </div>
          <div
            className={`transition-all duration-150 cursor-pointer ${
              selected === "CHILDREN'S FURNITURE"
                ? "border-b-2 border-gray-700"
                : "hover:border-b-2 border-gray-400"
            }`}
            onClick={() => setSelected("CHILDREN'S FURNITURE")}
          >
            <p className="pb-2">CHILDREN'S FURNITURE</p>
          </div>
          <div
            className={`transition-all duration-150 cursor-pointer ${
              selected === "ARMCHAIRS AND POUFS"
                ? "border-b-2 border-gray-700"
                : "hover:border-b-2 border-gray-400"
            }`}
            onClick={() => setSelected("ARMCHAIRS AND POUFS")}
          >
            <p className="pb-2">ARMCHAIRS AND POUFS</p>
          </div>
        </div>
        <div>
          <p className="pb-2 underline cursor-pointer">GO TO CATALOG</p>
        </div>
      </div>
      <RandomProducts selected={selected} />
    </div>
  );
}

export default BuyersChoice;
