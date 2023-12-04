import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Lottie from "lottie-react";
import { greenTik, worngTik } from "../../assets/animation/animi";

const PopUpDialog = ({show,message,lottie}) => {
  const [showModal, setShowModal] = useState(show);
  const modalRef = useRef();



  useEffect(() => {
    handleSelectClick();
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
    setShowModal(!showModal);
  };

  
 


  return (
    <div className="mt-5">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-all duration-100">
          <div
            ref={modalRef}
            className="bg-white px-4 py-5 m-10 rounded shadow-lg transition-all duration-100 z-1"
          >
            <div className="flex flex-col justify-center items-center text-lg">
              {lottie === 'success' ? <h1>Success</h1> : <h1>Error</h1>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUpDialog;
