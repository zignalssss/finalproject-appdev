import axios from "axios";
export const axiosInstance = axios.create({
  baseURL:"http://localhost:5050"  ||   import.meta.env.VITE_REACT_APP_BACKEND,
  withCredentials: true,
});