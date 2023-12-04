import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { useRef } from "react";


const DropDwonSelector = ({ data, purpose }) => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="font-medium h-auto">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-3 flex items-center justify-between border rounded-sm ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected

          : `${purpose}`}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-1 overflow-y-auto border ${
          open ? "max-h-60 block" : "hidden"
        } `}
      >
        {data?.map((item, index) => (
          <li
            key={index}
            className={`p-2 text-xs md:text-sm hover:bg-gray-200`}
            onClick={() => {
              if (item !== selected) {
                setSelected(item);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDwonSelector;
