import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/Products/Action";
import SingleProductCard from "./SingleProductCard";
import { filterByCategoryAndNameLength } from "./common";
function RandomProducts({ selected }) {
  const dispatch = useDispatch();
  const [currentProducts, setCurrentProducts] = useState([]);
  const { productData, loading } = useSelector((store) => store.dataReducer);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    filterByCategoryAndNameLength(selected, setCurrentProducts, productData);
  }, [selected, productData]);

  return (
    <div className="py-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {currentProducts?.map((product) => (
          <SingleProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default RandomProducts;
