import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://nextfuture-api.onrender.com",
  withCredentials: true,
});