"use client";

import { todoActions } from "@/actions";
import EditTodoForm from "@/components/EditTodoForm";
import withAuth from "@/hoc/withAuth";
import { useTodoStore } from "@/store/todo.store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditTodo = (context: { params: { id: any } }) => {
  const { id } = context.params;
  const router = useRouter();

  const { updateTodo, todos } = useTodoStore();

  //fetch router

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

  const todo = todos.find((todo) => todo.id === id);

  useEffect(() => {
    if (todo) {
      setFormValue({
        title: todo.title,
        description: todo.description,
      });
    }
  }, [todo]);

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    const data = await todoActions.UpdateTodo(
      {
        title: formvalue.title,
        description: formvalue.description,
      },
      id
    );
    if (data.success) {
      updateTodo({
        id,
        title: formvalue.title,
        description: formvalue.description,
      });
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
        onClick={handleUpdate}
      >
        Update Todo
      </button>
    </form>
  );
};

export default withAuth(EditTodo);
