import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/Products/Action";
import SingleProductCard from "./SingleProductCard";

function BuyersChoice() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("SOFAS");
  const [currentProducts, setCurrentProducts] = useState([]);
  const { productData, loading } = useSelector((store) => store.dataReducer);

  function filterByCategoryAndNameLength(category) {
    const filteredData = productData.filter(
      (item) =>
        item.category.toLowerCase() === category.toLowerCase() &&
        item.name.length <= 20
    );

    for (let i = filteredData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredData[i], filteredData[j]] = [filteredData[j], filteredData[i]];
    }

    const randomProducts = filteredData.slice(0, 4);

    setCurrentProducts(randomProducts);
  }

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    filterByCategoryAndNameLength(selected);
  }, [selected, productData]);

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

      <div className="py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {currentProducts?.map((product) => (
            <SingleProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BuyersChoice;
