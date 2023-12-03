import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Login from "../Pages/SignUp&Login/Login";
import Signup from "../Pages/SignUp&Login/Signup";
import ProductPage from '../Components/ProductPage/ProductPage';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/product" element={<ProductPage />}></Route>
            {/* <Route path="/products/:id" element={<ProductDetail />}></Route> */}
            {/* <Route path="/cart" element={<Cart />}></Route> */}
        </Routes>
    )
}

export {AllRoutes}
