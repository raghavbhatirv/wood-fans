import React from "react";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <div className="bg-light-gray text-dark ">
      <div className="flex flex-col md:flex-row justify-between px-8 md:px-12 py-10 gap-5">
        <div>
          <img src={logo} className="hover:cursor-pointer" />
        </div>
        <div className="flex flex-col md:flex-row justify-between text-lg md:text-sm gap-5  md:gap-24">
          <div className="flex flex-col gap-2 ">
            <p className="hover:cursor-pointer">Catalogue</p>
            <p className="hover:cursor-pointer">Children's furniture</p>
            <p className="hover:cursor-pointer">Beds</p>
            <p className="hover:cursor-pointer">Armchairs and Poufs</p>
            <p className="hover:cursor-pointer">Sofas</p>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="hover:cursor-pointer">Delivery</p>
            <p className="hover:cursor-pointer">Blog</p>
            <p className="hover:cursor-pointer">About Us</p>
            <p className="hover:cursor-pointer">Contacts</p>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="hover:cursor-pointer">Privacy Policy </p>
            <p className="hover:cursor-pointer">Disclaimer </p>
            <p className="hover:cursor-pointer">Refund Policy</p>
            <p className="hover:cursor-pointer">Return Policy</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 font-medium text-gray-700">
          <p className="hover:cursor-pointer">+7 (495) 792-06-68</p>
          <p className="hover:cursor-pointer">+7 (495) 147 97 77</p>
          <p className="leading-8">
            Factory opening hours: <br /> Mon-Fri 10:00 - 19:00
          </p>
          <div className="flex gap-3 text-xl md:text-lg pt-2">
            <i className="fa-brands fa-instagram hover:cursor-pointer"></i>
            <i className="fa-brands fa-twitter hover:cursor-pointer"></i>
            <i className="fa-brands fa-facebook hover:cursor-pointer"></i>
          </div>
        </div>
      </div>
      <div className="text-center pb-5 text-sm md:text-xs text-dark-gray">
        <p>© WOODFANS 2007-2023. Furniture production</p>
      </div>
    </div>
  );
}

export default Footer;
