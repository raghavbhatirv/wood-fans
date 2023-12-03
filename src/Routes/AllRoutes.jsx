import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/SignUp&Login/Login";
import Signup from "../Pages/SignUp&Login/Signup";
import ProductPage from "../Components/ProductPage/ProductPage";
import LoginAndSignup from "../Pages/SignUp&Login/LoginAndSignup"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<LoginAndSignup/>}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      {/* <Route path="/products/:id" element={<ProductDetail />}></Route> */}
      {/* <Route path="/cart" element={<Cart />}></Route> */}
    </Routes>
  );
};

export { AllRoutes };
