import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href="/" className="text-white  font-bold">
        Todos
      </Link>
      <Link href="/addTodo" className="bg-white p-2">
        Add Todo
      </Link>
    </nav>
  );
};

export default Navbar;
