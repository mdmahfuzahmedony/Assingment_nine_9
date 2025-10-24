import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Please login to view your profile.</p>;
  }

  return (
    <div className="max-w-[1400px] flex justify-center items-center mt-40  mx-auto p-4">
      <div className="flex flex-col justify-center items-center border  rounded-[30px] py-30 px-20">
        <h1 className="text-3xl text-center font-bold mb-4">My Profile</h1>
        <div className="flex items-center gap-4">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="User"
              className="w-20 h-20 rounded-full border-2 border-blue-500"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
              {user.displayName ? user.displayName[0].toUpperCase() : "U"}
            </div>
          )}
          <div>
            <p className="text-xl font-semibold">
              {user.displayName || "User"}
            </p>
            <p className="text-gray-300 mt-2">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
