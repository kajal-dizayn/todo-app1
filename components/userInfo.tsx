"use client";

import { useUserStore } from "@/store/user.store";
import { useRouter } from "next/navigation";
import React from "react";

const Profile = () => {
  const { user, removeUser } = useUserStore();

  const router = useRouter();

  const handleLogout = () => {
    //remove id from local storage

    localStorage.removeItem("id");
    removeUser();
    router.push("/loginUser");

    //api call to logout
  };

  return (
    //user profile header
    <div className="w-full my-8 flex justify-between">
      <p>{user.username}</p>
      <button
        className="bg-green-600 font-bold text-white py-0 px-8 w-fit  h-12"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
