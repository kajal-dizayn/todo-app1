"use client";

import TodoList from "@/components/TodoList";
import Navbar from "@/components/navbar";
import Profile from "@/components/userInfo";
import { useUserStore } from "@/store/user.store";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const { setUser } = useUserStore();
  return (
    <>
      <Profile />
      <Navbar />
      <TodoList />
    </>
  );
}
