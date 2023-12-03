import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { popUpSelector } from "../../Functions/scripts";
import PopUpOptions from "./PopUpOptions";

const PopUpSelector = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTexture, setSelectedTexture] = useState({});
  const [texture, setTexture] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
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
    // setSelectedTexture({})
  };

  const handlePopUpSelect = (id) => {
    setSelectedId(id);
    const selected = popUpSelector.find((item) => item.id === id);
    setSelectedTexture(selected);
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
        />

        <div className={`p-2 flex ${texture && "justify-between"} text-xs md:text-base`}>
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
            className="bg-white w-[90%] md:w-[60%] px-4 py-5 m-10 rounded shadow-lg transition-all duration-100 z-1"
          >
            <div>
              <div className="w-full flex flex-col gap-2 max-h-80 overflow-y-auto">
                {popUpSelector?.map((item) => {
                  return (
                    <PopUpOptions
                      id={item.id}
                      key={item.id}
                      texture={item.texture}
                      name={item.name}
                      polyester={item.polyester}
                      place={item.place}
                      meter={item.meter}
                      onClick={() => handlePopUpSelect(item.id)}
                      selected={selectedId}
                    />
                  );
                })}
              </div>
              <Button
                text="Apply"
                className="bg-gray-600 hover:bg-transparent border hover:border-gray-600 mt-5 hover:text-gray-600 text-white hover:font-medium"
                onClick={handleSetTexture}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUpSelector;
