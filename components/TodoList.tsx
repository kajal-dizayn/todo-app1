import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";
import { Todo, useTodoStore } from "@/store/todo.store";
import { todoActions } from "@/actions";

const TodoList = ({ todo }: { todo: Todo }) => {
  const { id, title, description } = todo;
  const { removeTodo } = useTodoStore();

  const handleRemove = async () => {
    const data = await todoActions.DeleteTodo(id);
    console.log(data, "data");
    if (data.success) {
      removeTodo(todo);
    }
  };

  return (
    <>
      <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="flex gap-2 items-center">
          <button
            className="bg-red-500 text-white p-2 rounded-md"
            onClick={handleRemove}
          >
            <HiOutlineTrash size={24} />
          </button>
          <Link href={`/editTodo/${id}`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TodoList;
