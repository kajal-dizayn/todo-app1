import axios from "@/axios";

export const AddTodo = async (todo: any) => {
  try {
    const response = await axios.post("/todo/create", todo);

    return {
      data: response.data,
      success: response.status === 200,
    };
  } catch (error: any) {
    return {
      success: false,
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
    const response = await axios.delete("/todo/delete", {
      params: {
        id: id,
      },
    });
    return {
      data: response.data,
      success: response.status === 200,
    };
  } catch (error: any) {
    return {
      success: false,
    };
  }
};

export const UpdateTodo = async (todo: any, id: string) => {
  try {
    const response = await axios.put(`/todo/update?id=${id}`, todo);
    return {
      data: response.data,
      success: response.status === 200,
    };
  } catch (error) {
    return {
      success: false,
    };
  }
};
