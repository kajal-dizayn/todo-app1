"use client";

import { userActions } from "@/actions";
import {
  isEmptyErrors,
  validateEmail,
  validateUsername,
} from "@/helpers/general.helper";
import withAuth from "@/hoc/withAuth";
import { User, useUserStore } from "@/store/user.store";
import { replace } from "lodash";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const { setUser } = useUserStore();

  const router = useRouter();

  const [formvalue, setFormValue] = useState({
    username: "",
    email: "",
  });

  const [error, setError] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setFormValue({
      ...formvalue,
      [id]: e.target.value,
    });
    setError({
      ...error,
      [id]: "",
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const errors = {
      username: validateUsername(formvalue.username),
      email: validateEmail(formvalue.email),
    };

    if (!isEmptyErrors(errors)) {
      setError(errors);
      alert("Please enter valid data");
      return;
    }

    const userData = await userActions.Login({
      username: formvalue.username,
      email: formvalue.email,
    });

    if (userData.success && userData.data) {
      const mappedData: User = {
        id: userData.data.data._id,
        username: userData.data.data.username,
        email: userData.data.data.email,
        isAuthenticated: true,
        created_at: userData.data.data.createdAt,
        updated_at: userData.data.data.updatedAt,
      };

      setUser(mappedData);

      localStorage.setItem("id", userData.data.data._id);

      router.push("/");
    }
  };

  return (
    <div className="w-[300px] mx-auto  flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-12">Login</h1>
      <form
        className="w-full gap-3 flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <input
          className="border border-slate-500 px-8 py-2 w-full "
          type="text"
          placeholder="Username"
          value={formvalue.username}
          onChange={(e) => handleChange(e, "username")}
          onError={() => validateUsername(formvalue.username)}
        />
        <input
          className="border border-slate-500 px-8 py-2 w-full"
          type="email"
          placeholder="Email"
          value={formvalue.email}
          onChange={(e) => handleChange(e, "email")}
          onError={() => validateEmail(formvalue.email)}
        />
        <button
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default withAuth(LoginPage);
