import axios from "axios";
import dotenv from 'dotenv';
dotenv.config({path:'../.env'})
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BACKEND,
  withCredentials: true,
});