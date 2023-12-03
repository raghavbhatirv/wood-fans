import React from "react";
import Button from "../Common/Button";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function SingleProductCard({ product, redirectToDetail }) {
  const [wishListClicked, setWishListClicked] = useState(false);

  const changeWishListState = () => {
    setWishListClicked((pre) => !pre);
  };

  return (
    <div className="shadow-sm shadow-gray-300 overflow-hidden">
      <div>
        <div className="relative overflow-hidden h-[25rem]">
          <div className="absolute top-1 right-1 w-10 h-8 p-1 z-10">
            {!wishListClicked ? (
              <i
                className="fa-regular fa-heart text-xl text-gray-700 cursor-pointer opacity-100"
                onClick={changeWishListState}
              ></i>
            ) : (
              <i
                className="fa-solid fa-heart text-xl text-red-400 cursor-pointer opacity-100"
                onClick={changeWishListState}
              ></i>
            )}
          </div>

          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full object-cover border transform transition duration-500 hover:scale-105 hover:cursor-pointer"
            onClick={() => redirectToDetail(product.id)}
          />
        </div>

        <div className="py-5 px-3 md:px-2 flex  justify-between text-lg ">
          <h4
            className="lg:font-semibold font-normal lg:px-3 hover:cursor-pointer"
            onClick={() => redirectToDetail(product.id)}
          >
            {product.name}
          </h4>
          <p className="text-gray-700 lg:px-5 md:pl-5">Rs. {product.price}</p>
        </div>
      </div>
      <div className="flex justify-between lg:p-4 p-2">
        <Button
          text={"Add to Cart"}
          // className="bg-gray-600  text-white hover:text-gray-700 px-1 rounded-md hover:border-2 hover:border-gray-500 hover: text-xs lg:px-4 py-2"
          className="bg-gray-600  text-white hover:text-gray-700 rounded-md hover:border-2 hover:border-gray-500"
        />
      </div>
    </div>
  );
}

export default SingleProductCard;
