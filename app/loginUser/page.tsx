"use client";

import { userActions } from "@/actions";
import {
  isEmptyErrors,
  validateEmail,
  validateUsername,
} from "@/helpers/general.helper";
import { useUserStore } from "@/store/user.store";
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
      console.log(userData.data.data, "userData.data");
      setUser(userData.data.data);
      localStorage.setItem("id", userData.data.data.id);

      router.push("/");
    }

    // if (userData.success) {
    //   //set user data in local storage
    //   setUser(userData.data);
    //   localStorage.setItem("id", userData.data.id);
    //   console.log(userData.data.id);
    //   router.push("/addTodo");
    // }
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

export default LoginPage;
