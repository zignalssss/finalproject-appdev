import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5050"||"https://nextfuture-api.onrender.com",
  withCredentials: true,
});