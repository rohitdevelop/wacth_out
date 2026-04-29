import axios from "axios";

const devUrl = process.env.NEXT_PUBLIC_DEVLOPMENT_URL;
const prodUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL;

// const baseURL = devUrl   
const baseURL = prodUrl   

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;


// 🔥 ROOT CAUSE (FINAL)

// 👉 Cookie store ho rahi hai
// 👉 BUT browser API request ke saath send nahi kar raha