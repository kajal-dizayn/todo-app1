"use client";

import { todoActions, userActions } from "@/actions";
import TodoList from "@/components/TodoList";
import Navbar from "@/components/navbar";
import Profile from "@/components/userInfo";
import withAuth from "@/hoc/withAuth";
import { Todo, useTodoStore } from "@/store/todo.store";
import { useUserStore } from "@/store/user.store";
import { map } from "lodash";
import Image from "next/image";
import { use, useEffect } from "react";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const { setTodos, todos } = useTodoStore();
  useEffect(() => {
    (async () => {
      const todosData = await todoActions.FetchTodos();
      console.log(todosData, "todosData.data");
      //map data to store
      const mappedData: Todo[] = todosData.map((item) => {
        return {
          id: item._id,
          title: item.title,
          description: item.description,
          userId: item.userId,
          created_at: item.createdAt,
          updated_at: item.updatedAt,
        };
      });
      console.log(mappedData, "mappedData");
      setTodos(mappedData);
    })();
  }, []);

  return (
    <>
      <Profile />
      <Navbar />
      {map(todos, (todo) => {
        return <TodoList key={todo.id} todo={todo} />;
      })}
    </>
  );
};

export default withAuth(Home);
