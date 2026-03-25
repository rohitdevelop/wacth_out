import axios from "axios";

const devUrl = process.env.NEXT_PUBLIC_DEVLOPMENT_URL;
const prodUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL;

const baseURL =
  process.env.NODE_ENV === "development" ? devUrl : prodUrl;

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;