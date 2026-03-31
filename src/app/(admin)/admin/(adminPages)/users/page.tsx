"use client";

import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import AllUsers from "../../components/admin/AllUsers";

const users = [
  {
    id: 1,
    name: "Rohit Singh",
    email: "rohit@gmail.com",
    role: "Admin",
  },
  {
    id: 2,
    name: "Amit Kumar",
    email: "amit@gmail.com",
    role: "User",
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@gmail.com",
    role: "User",
  },
];

const Page = () => {
  return (
    <AllUsers/>
  );
};

export default Page;