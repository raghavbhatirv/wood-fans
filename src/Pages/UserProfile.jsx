import React, { useState } from "react";

function UserProfile() {
  const [current, setCurrent] = useState("My Profile");
  return (
    <div>
      <div className="flex px-20 mt-10 gap-5">
        <div className="w-2/5 px-4 py-5">
          <div className="flex items-center gap-4 justify-center border-b">
            <div>
              <i className="fa-regular fa-user text-4xl"></i>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg">My Profile</p>
              <p className="text-xs text-gray-400">Since 23rd Jul 2020</p>
            </div>
          </div>
        </div>
        <div className="w-3/5 flex flex-col gap-5">
          <div className="px-4 py-5 border">
            <div className="flex justify-between text-xl py-5">
              <p className="font-semibold">My Details</p>
              <p className="text-yellow-500 hover:cursor-pointer">Edit</p>
            </div>
            <div>
              <div className="flex justify-between text-gray-700 border-b border-gray-100 py-3">
                <p>Name</p>
                <p>Narayan Das</p>
              </div>
              <div className="flex justify-between text-gray-700 border-b border-gray-100 py-3">
                <p>Mobile Number</p>
                <p>9382286680</p>
              </div>
              <div className="flex justify-between text-gray-700 border-b border-gray-100 py-3">
                <p>Email ID</p>
                <p>workmail.narayan@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="px-4 py-5 border">
            <div>
              <h3 className="text-xl font-semibold">
                Add an Address for Smoother Checkout
              </h3>
            </div>
            <div className="flex justify-end">
              <button className="border font-medium text-yellow-500 rounded border-primary-yellow px-5 py-3">
                Add New Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
