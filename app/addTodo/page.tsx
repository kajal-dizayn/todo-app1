import React from "react";

const AddTodo = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-8 py-2 "
        type="text"
        placeholder="Todo Title"
      />
      <input
        className="border border-slate-500 px-8 py-2 "
        type="text"
        placeholder="Todo description"
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
