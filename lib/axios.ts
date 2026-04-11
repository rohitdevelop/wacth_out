import axios from "axios";

const devUrl = process.env.NEXT_PUBLIC_DEVLOPMENT_URL;
const prodUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL;

const baseURL = "https://wacth-app.onrender.com/api/"
   

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;