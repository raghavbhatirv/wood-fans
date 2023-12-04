import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/Products/Action";
import load from "./loading.gif";
import SingleProductCard from "./SingleProductCard";
import ProductSkeleton from "./ProductSkeleton";

const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = useParams();

  const { productData, loading } = useSelector((store) => store.dataReducer);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const categoryData = productData.filter((product) => {
    if (category == "all") {
      return productData;
    }
    return product.category.toLowerCase() === category.toLowerCase();
  });

  const redirectToDetail = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 lg:px-20 py-3 md:py-10 px-5">
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </div>
    );
  }

  return (
    <div className="font-semibold lg:px-20 py-3 md:py-10 px-5">
      <h1 className="text-3xl py-5">{category?.toUpperCase()}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5">
        {categoryData.map((product) => (
          <SingleProductCard
            key={product.id}
            product={product}
            redirectToDetail={redirectToDetail}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
