import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";

const TodoList = () => {
  return (
    <>
      <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Todo Title</h2>
          <p>Todo description</p>
        </div>
        <div className="flex gap-2 items-center">
          <button className="bg-red-500 text-white p-2 rounded-md">
            <HiOutlineTrash size={24} />
          </button>
          <Link href="/editTodo/123">
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TodoList;
