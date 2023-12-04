import React, { useState } from "react";
import AddressForm from "../Components/Checkout/AddressForm";
import SelectPaymentOption from "../Components/Checkout/SelectPaymentOption";

function Checkout() {
  const [component, setComponent] = useState("Shipping Details");
  const handleSubmit = () => {
    setComponent("Payment Method");
    console.log("called");
  };
  return (
    <div className="flex justify-center bg-gray-300">
      <div className="w-11/12 md:w-4/6 bg-white rounded-3xl p-5 md:p-10 my-5">
        {component === "Shipping Details" ? (
          <AddressForm handleSubmit={handleSubmit} />
        ) : (
          <SelectPaymentOption />
        )}
      </div>
    </div>
  );
}

export default Checkout;
