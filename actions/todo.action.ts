import axios from "@/axios";

export const AddTodo = async (todo: any) => {
  try {
    const response = await axios.post("/todo/create", todo);
    return response.data;
  } catch (error: any) {
    return {
      error: error.response.data,
    };
  }
};

export const FetchTodos = async () => {
  try {
    const response = await axios.get("/todo/fetch");
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const DeleteTodo = async (id: number) => {
  try {
    const response = await axios.delete(`/todo/delete/${id}`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const UpdateTodo = async (todo: any, id: string) => {
  try {
    const response = await axios.post("/todo/update", todo);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
