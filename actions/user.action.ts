import Axios from "@/axios";

export const Login = async (payload: any) => {
  try {
    const response = await Axios.post("/user/login", payload);
    console.log(response, "response");
    return {
      data: response,
      success: true,
    };
  } catch (error: any) {
    return {
      success: false,
    };
  }
};

export const Logout = async () => {
  try {
    const response = await Axios.post("/user/logout");
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error: any) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};

export const FetchUser = async () => {
  try {
    const response = await Axios.get("/user/fetch");
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error: any) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};
