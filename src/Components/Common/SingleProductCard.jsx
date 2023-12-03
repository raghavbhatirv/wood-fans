import React from "react";

function SingleProductCard(product) {
  const { images, price, name, category } = product;
  // console.log(product);
  return (
    <div>
      <div>
        <div className="overflow-hidden">
          <img
            src={images[0]}
            alt={`loading: ${name}`}
            className="border transform transition duration-500 hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-1.5 text-gray-900 py-4">
          <p className="text-xs">from ₹{price}</p>
          <h3 className="text-lg">{name}</h3>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProductCard;
