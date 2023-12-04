import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Lottie from "lottie-react";
import { greenTik, worngTik } from "../../assets/animation/animi";

const PopUpDialog = (showPopup) => {

  console.log(showPopup)
  const [showModal, setShowModal] = useState(showPopup.show);
  const [selectedTexture, setSelectedTexture] = useState({});
  const [texture, setTexture] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectClick = () => {
    setShowModal(true);
  };

  const handleSetTexture = () => {
    setTexture(true);
    setShowModal(false);
  };

  return (
    <div className="mt-5">
      <label className="text-md font-medium">
        Select fabric texture and color
      </label>

      <div
        className="p-1 border rounded-sm mt-1 flex flex-col"
        onClick={handleSelectClick}
      >
        <img
          src={selectedTexture?.texture}
          className={`h-16 md:h-40 ${texture ? "block" : "hidden"}`}
          alt="Selected Texture"
        />

        <div
          className={`p-2 flex ${
            texture && "justify-between"
          } text-xs md:text-base`}
        >
          <p className={`${texture ? "block font-medium" : "hidden"}`}>
            {selectedTexture?.name}
          </p>

          <div
            className={`flex ${
              texture ? "justify-end" : "justify-between"
            } gap-2 items-center w-full`}
          >
            <p>Choose</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-all duration-100">
          <div
            ref={modalRef}
            className="bg-white px-4 py-5 m-10 rounded shadow-lg transition-all duration-100 z-1"
          >
            <div className="flex flex-col justify-center items-center text-lg">
              <Lottie animationData={showPopup.lottie === "success" ? greenTik : worngTik} />
              <h1>{showPopup.message}</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUpDialog;
