import axios from "axios";

export const BASE_URL = process.env.REACT_APP_BASE_URL;

const Axios = axios.create({
  baseURL: "http://localhost:3003",
});

export default Axios;
