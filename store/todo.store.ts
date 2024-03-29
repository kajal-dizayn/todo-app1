// setup zustand store

import create from "zustand";

// define types

export interface Todo {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  userId: number;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  setTodos: (todos: Todo[]) => void;
  removeTodo: (todo: Todo) => void;
  updateTodo: (todo: Partial<Todo>) => void;
}

// create store

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  setTodos: (todos) => set(() => ({ todos })),
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  updateTodo: (todo) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === todo.id ? { ...t, ...todo } : t)),
    })),

  removeTodo: (todo) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== todo.id),
    })),
}));
