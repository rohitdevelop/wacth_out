"use client";

import { ToastContainer } from "react-toastify";
 
const ToastProvider = () => {
  return (
    <ToastContainer
      position="top-right"   // 👈 change here
      autoClose={3000}
      theme="dark"
    />
  );
};

export default ToastProvider;