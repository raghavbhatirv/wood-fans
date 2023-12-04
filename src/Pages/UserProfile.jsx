import React, { useState, useEffect } from "react";
import UserDetailsSection from "../Components/UserProfile/UserDetailsSection";
import { storeDB, auth, doc, getDoc } from "../Services/firebaseConfig";

function UserProfile() {
  const [current, setCurrent] = useState("My Profile");
  const [userData, setUserData] = useState(null);
  const [uid, setUid] = useState("");
  const handleClick = (section) => {
    setCurrent(section);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(storeDB, "users", user.uid);
        const docSnap = await getDoc(docRef);
        setUid(user.uid);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } else {
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleUserUpdate = (updatedUserData) => {
    setUserData(updatedUserData);
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
          <UserDetailsSection
            userData={userData}
            uid={uid}
            onUserUpdate={handleUserUpdate}
          />
        )}
      </div>
    </div>
  );
}

export default UserProfile;
