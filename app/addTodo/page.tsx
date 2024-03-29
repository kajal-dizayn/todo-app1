"use client";

import { todoActions } from "@/actions";
import withAuth from "@/hoc/withAuth";
import { useUserStore } from "@/store/user.store";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddTodo = () => {
  const router = useRouter();
  const { user } = useUserStore();
  console.log(user, "user");
  const [formvalue, setFormValue] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setFormValue({
      ...formvalue,
      [id]: e.target.value,
    });
  };
  const handleAddTodo = async (e: any) => {
    e.preventDefault();
    const data = await todoActions.AddTodo({
      title: formvalue.title,
      description: formvalue.description,
      userId: user.id,
    });
    console.log(data, "data");

    if (data.success) {
      router.push("/");
    }
  };

  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-8 py-2 "
        type="text"
        placeholder="Todo Title"
        value={formvalue.title}
        onChange={(e) => handleChange(e, "title")}
      />
      <input
        className="border border-slate-500 px-8 py-2 "
        type="text"
        placeholder="Todo description"
        value={formvalue.description}
        onChange={(e) => handleChange(e, "description")}
      />
      <button
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </form>
  );
};

export default withAuth(AddTodo);
