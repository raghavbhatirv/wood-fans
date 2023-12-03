import React from "react";
import Button from "../Common/Button";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { onAuthStateChanged, auth } from "./../../Services/firebaseConfig";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Products/Action";
function SingleProductCard({ product, redirectToDetail }) {
  const [wishListClicked, setWishListClicked] = useState(false);
  const dispatch = useDispatch();
  const productId = product.id;
  // const userId = auth?.currentUser.uid;

  const changeWishListState = () => {
    setWishListClicked((pre) => !pre);
  };

  // const handleAddToCart = (
  //   productId = "ZANYXyviZ7b7FJP9yYt2OiuTIz73",
  //   userId
  // ) => {
  //   dispatch(addToCart(productId, userId));
  //   alert("added to cart");
  //   return;
  // };

  return (
    <div className="shadow-sm shadow-gray-300 overflow-hidden">
      <div>
        <div className="relative overflow-hidden h-[22rem]">
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
            onClick={() => redirectToDetail(product.id, product.name)}
          />
        </div>

        <div className="pt-5 pb-1 px-3 md:px-2 flex  justify-between text-lg ">
          <h4
            className="lg:font-semibold font-normal lg:px-3 hover:cursor-pointer"
            onClick={() => redirectToDetail(product.id, product.name)}
          >
            {product.name}
          </h4>
          <p className="text-gray-700 lg:px-5 md:pl-5">Rs. {product.price}</p>
        </div>
      </div>
      <div className="flex justify-between lg:p-4 p-2">
        <Button
          text={"Add to Cart"}
          className="bg-gray-600  text-white hover:text-gray-700 rounded-md hover:border-2 hover:border-gray-500"
        />
      </div>
    </div>
  );
}

export default SingleProductCard;
