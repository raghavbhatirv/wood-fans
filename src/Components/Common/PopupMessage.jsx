import React from "react";

function PopupMessage({ message }) {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-40 flex items-center justify-center">
      <div className="flex gap-5 bg-white p-6 rounded shadow-md items-center text-2xl">
        <i className="fa-solid fa-circle-check text-primary-yellow "></i>
        {message}
      </div>
    </div>
  );
}

export default PopupMessage;
