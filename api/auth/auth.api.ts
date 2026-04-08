import api from "../../lib/axios";
import { User, Login, Address } from "../../types/auth";

// 🔐 Auth___________________________________________________________

// ✅ LOGIN
export const signinuser = async (data: Login) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

// ✅ SIGNUP
export const signupuser = async (data: User) => {
  const res = await api.post("/auth/signup", data);
  return res.data;
};

// ✅ LOGOUT
export const logoutuser = async () => {
  const res = await api.post("/auth/logoutuser");
  return res.data;
};

// ✅ GET CURRENT USER
export const getMe = async () => {
  const res = await api.get("/auth/me");
  return res.data;
};

// 📍 Profile_________________________________________________________

export const addAddress = async (data: Address) => {
  const res = await api.post("/auth/address", data);
  return res.data;
};

// 👑 Admin______________________________________________________________

export const getAllUsers = async () => {
  const res = await api.get("/auth/users");
  return res.data;
};

export const deleteUser = async (id: string) => {
  const res = await api.delete(`/auth/delete-user/${id}`);
  return res.data;
};