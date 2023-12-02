import React from "react";
import { useParams } from "react-router-dom";
import IconButton from "../Components/Common/IconButton";
import {
  faCartShopping,
  faBolt,
  faStar,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRandomPrice, abailableOffers } from "../Functions/scripts";
import InputFeild from "../Components/Common/InputFeild";
import PopUpSelector from "../Components/Common/PopUpSelector";
import DropDwonSelector from "../Components/Common/DropDwonSelector";
import ImageColumn from "../Components/Common/ImageColumn";

const sizeArray = ["Big", "Average", "Small"];
const quantityArray = [1, 2, 3, 4];

const SingleProduct = () => {
  const { id } = useParams();

  const actualPrice = getRandomPrice(17999 * 2, 17999);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 p-3 md:p-5`}>
      <div className="flex flex-col gap-5 lg:sticky top-4 w-auto h-min p-2">
        <div className="flex gap-2">
          <div className="flex flex-col gap-2 flex-shrink">
            <ImageColumn />
            <ImageColumn />
            <ImageColumn />
            <ImageColumn />
          </div>

          <div className="flex flex-col gap-5">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyiNM1dsSbTJOTUDHzB_Y_GXlD1M9OjJA8PMZLHU8Nt9YUs3ZsJ_Rzo9C5fEE9gvej2QrqCEeMYbULxAhlLEtxuqI1rFis0HqM58w9IEfMQDfbu0uT_bP6CVUUJAI9uNRr0ZIRITZeA04u5RWYXDznygGAr4zXhza-iqKg2Xvp8g5Kj_qf4hhitP8MkP2o/s540/background-31584dde.jpg" />

            <div className="grid grid-cols-2 gap-4 justify-center">
              <IconButton
                icon={faCartShopping}
                text="Add To Cart"
                className="bg-primary-yellow hover:border-primary-yellow hover:text-primary-yellow"
              />
              <IconButton
                icon={faBolt}
                text="Buy Now"
                className="bg-gray-600 hover:border-gray-600 hover:text-gray-600"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Details Sections */}
      <div>
        <h1 className="font-semibold text-2xl md:text-4xl">
          CHILDREN'S BED CLOUD "CLOUD"
        </h1>
        <div className="flex text-end items-end gap-2 mt-1">
          <div className="text-[12px] flex items-center bg-green-600 max-w-min rounded-sm text-white px-1">
            4.7
            <FontAwesomeIcon icon={faStar} className="ml-1" />
          </div>
          <span className="text-dark-gray font-medium">
            89 Ratings & 11 Reviews
          </span>
        </div>
        <div className="flex mt-5 items-center gap-2">
          <h1 className="text-[25px] font-medium">&#8377; 17,999</h1>
          <h1 className="line-through text-lg text-dark-gray font-normal">
            &#8377; {actualPrice}
          </h1>
          <p className="text-green-600">
            45% <span className="font-medium">Off</span>
          </p>
        </div>
        {/* Abailable Offers */}
        <div>
          <h1 className="mb-3 font-semibold mt-5">Available offers</h1>
          {abailableOffers?.map((item) => {
            return (
              <div className="flex place-items-start mb-2" key={item.id}>
                <FontAwesomeIcon
                  icon={faTag}
                  className="text-green-600 mr-1 text-md"
                />
                <p className="text-sm w-3/4">
                  <span className="font-medium">{item.offer}</span>{" "}
                  {item.details}
                </p>
              </div>
            );
          })}
        </div>

        {/* Filters */}
        <PopUpSelector />
        <div className="grid grid-cols-2 mt-5 gap-2">
          <DropDwonSelector data={sizeArray} />
          <DropDwonSelector data={quantityArray} />
        </div>

        <div className="mt-3">
          <p className="text-justify">
            <span className="font-medium">Description </span>Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quaerat delectus aperiam incidunt nobis odio quis
            magni perferendis corporis, doloremque eligendi ducimus quisquam!
            Nesciunt, voluptate omnis. Minima iure illo, quisquam possimus
            laudantium suscipit optio aliquid molestias unde et est temporibus
            cumque deserunt atque nulla voluptate earum fugiat architecto ipsa
            aliquam recusandae.
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default SingleProduct;
