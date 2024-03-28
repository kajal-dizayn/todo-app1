// setup zustand store

import create from "zustand";

// define types

export interface Todo {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
}

// create store

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  updateTodo: (todo) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === todo.id ? todo : t)),
    })),

  removeTodo: (todo) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== todo.id),
    })),
}));
