"use client";

import { useUserStore } from "@/store/user.store";
import React from "react";

const Profile = () => {
  const { user } = useUserStore();
  console.log(user, "user");
  return (
    //user profile header
    <div className="w-full my-8 flex justify-between">
      <p>{user.username}</p>
      <button className="bg-green-600 font-bold text-white py-0 px-8 w-fit  h-12">
        Logout
      </button>
    </div>
  );
};

export default Profile;
