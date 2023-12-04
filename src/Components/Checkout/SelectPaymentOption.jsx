import React, { useState, useCallback } from "react";
import useRazorpay from "react-razorpay";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

function SelectPaymentOption() {
  const [method, setMethod] = useState("");
  const [Razorpay, isLoaded] = useRazorpay();
  const [showThankYou, setShowThankYou] = useState(false);
  const navigate = useNavigate();

  const orderDetails = {
    name: "Narayan Das",
    email: "workmail.narayan@gmail.com",
    contact: "911234567890",
    totalAmount: 21000,
  };
  const { name, email, contact, totalAmount } = orderDetails;

  const handlePayment = useCallback(
    (orderDetails) => {
      if (method === "Card / UPI") {
        const options = {
          key: "rzp_test_GEIAiRjjm2TKRH",
          amount: Math.round(totalAmount) * 100,
          currency: "INR",
          name: "WOOD FANS",
          description: "Test Transaction",
          image: logo,
          handler: (res) => {
            setShowThankYou(true);

            setTimeout(() => {
              setShowThankYou(false);
              navigate("/");
            }, 5000);
          },
          prefill: {
            name,
            email,
            contact,
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#D7B256",
          },
        };
        const rzpay = new Razorpay(options);
        rzpay.open();
      } else {
        navigate("/success");
      }
    },
    [Razorpay, method, navigate]
  );

  return (
    <div>
      <div>
        <h2 className="font-semibold text-2xl pb-4">Select Payment Method</h2>
        <div className="flex flex-col md:flex-row gap-6 py-3">
          <div
            className={`py-2 px-6 rounded-lg flex gap-3 justify-center items-center font-medium ${
              method === "Card / UPI"
                ? "border-2 border-gray-700 bg-gray-200"
                : "border border-gray-300"
            }`}
            onClick={() => setMethod("Card / UPI")}
          >
            <i className="fa-regular fa-credit-card"></i>
            Card / UPI
          </div>
          <div
            className={`py-2 px-6 rounded-lg flex gap-3 justify-center items-center font-medium ${
              method === "COD"
                ? "border-2 border-gray-700 bg-gray-200"
                : "border border-gray-300"
            }`}
            onClick={() => setMethod("COD")}
          >
            <i className="fa-solid fa-money-bill-wave"></i>
            COD
          </div>
        </div>
        <div className="flex justify-center md:justify-end font-medium">
          <button
            className={`my-10 md:my-0 py-2 text-white px-24 md:px-10 rounded-lg ${
              method ? "bg-dark" : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!method}
            onClick={handlePayment}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectPaymentOption;
