import React, { useState } from "react";
import { storeDB, doc, updateDoc } from "../../Services/firebaseConfig";

function UserDetailsSection({ userData, uid }) {
  if (!userData) {
    return <div>Loading...</div>;
  }

  const { name, email, phoneNumber } = userData;
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber || "");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    const userDoc = doc(storeDB, "users", uid);
    const updatedUserData = {
      name: newName,
      phoneNumber: newPhoneNumber,
    };
    await updateDoc(userDoc, updatedUserData);
    setIsEditing(false);
  };

  return (
    <div className="w-3/5 flex flex-col gap-5">
      <div className="px-4 py-5 border">
        <div className="flex justify-between text-xl py-5">
          <p className="font-semibold">My Details</p>
          {isEditing ? (
            <p
              className="text-yellow-500 hover:cursor-pointer"
              onClick={handleSave}
            >
              Save
            </p>
          ) : (
            <p
              className="text-yellow-500 hover:cursor-pointer"
              onClick={handleEdit}
            >
              Edit
            </p>
          )}
        </div>
        <div>
          <div className="flex justify-between text-gray-700 border-b border-gray-100 py-3">
            <p>Name</p>
            <p>
              {isEditing ? (
                <input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="border border-gray-400 rounded pl-3 py-1"
                />
              ) : (
                name
              )}
            </p>
          </div>
          <div className="flex justify-between text-gray-700 border-b border-gray-100 py-3">
            <p>Email ID</p>
            <p>{email}</p>
          </div>
          <div className="flex justify-between text-gray-700 border-b border-gray-100 py-3">
            <p>Phone Number</p>
            <p>
              {isEditing ? (
                <input
                  value={newPhoneNumber}
                  onChange={(e) => setNewPhoneNumber(e.target.value)}
                  className="border border-gray-400 rounded pl-3 py-1"
                  placeholder="Add phone number"
                />
              ) : (
                phoneNumber || "No phone number added"
              )}
            </p>
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
  );
}

export default UserDetailsSection;
