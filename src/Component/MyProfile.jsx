import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  useEffect(() => {
          document.title = "MyProfile | ToyStore";
        }, []);
  

  const handleUpdate = (e) => {

    
    e.preventDefault();
    updateUserProfile(name, photo)
      .then(() => alert("Profile updated successfully!"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex flex-col items-center mt-10 ">

      <div className="border py-20 px-20 rounded-[40px] items-center">
<img
        src={user?.photoURL || "https://i.ibb.co/2d3K3Qv/default.png"}
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-blue-400 mb-4"
      />
      <h2 className="text-2xl font-bold">{user?.displayName}</h2>
      <p className="text-gray-500">{user?.email}</p>

      <form onSubmit={handleUpdate} className="mt-6 flex flex-col gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Update name"
          className="border px-3 py-2 rounded"
        />
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Update photo URL"
          className="border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
      </div>
      
    </div>
  );
};

export default MyProfile;
