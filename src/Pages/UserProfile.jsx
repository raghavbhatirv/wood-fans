import React, { useState, useEffect } from "react";
import UserDetailsSection from "../Components/UserProfile/UserDetailsSection";
import { useSelector } from "react-redux";

function UserProfile() {
  const [current, setCurrent] = useState("My Profile");
  const { userData, uid } = useSelector((store) => store.authReducer);
  const handleClick = (section) => {
    setCurrent(section);
  };

  return (
    <div>
      <div className="flex px-20 mt-10 gap-5">
        <div className={`w-2/5 px-4 py-5 text-gray-800`}>
          <div
            onClick={() => handleClick("My Profile")}
            className={`flex items-center gap-4 justify-center py-5 hover:cursor-pointer ${
              current === "My Profile"
                ? "border-b-2 border-primary-yellow text-primary-yellow"
                : "border-b"
            }`}
          >
            <div>
              <i className="fa-regular fa-user text-4xl"></i>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg">My Profile</p>
            </div>
          </div>
          <div
            onClick={() => handleClick("My Orders")}
            className={`flex items-center gap-4 justify-center py-5 hover:cursor-pointer ${
              current === "My Orders"
                ? "border-b-2 border-primary-yellow text-primary-yellow"
                : "border-b"
            }`}
          >
            <div>
              <i className="fa-solid fa-box text-4xl "></i>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg">My Orders</p>
            </div>
          </div>
        </div>
        {current === "My Profile" && (
          <UserDetailsSection userData={userData} uid={uid} />
        )}
      </div>
    </div>
  );
}

export default UserProfile;
