"use client";

import React, { useState } from "react";
import { Eye, Search, Trash2, } from "lucide-react";
import UsersEye from "../ui/UsersEye";


type User = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  isActive: boolean;
  isEmailVerified: boolean;
  age: number;
  gender: string;
  createdAt: string;
};


// Dummy Data based on your schema
const DUMMY_USERS = [
  {
    _id: "u1",
    name: "Rohit Singh",
    email: "rohit@example.com",
    phone: "9876543210",
    role: "user",
    isActive: true,
    isEmailVerified: true,
    age: 19,
    gender: "male",
    createdAt: "2026-03-29",
  },
  {
    _id: "u2",
    name: "Admin User",
    email: "admin@example.com",
    phone: "9999999999",
    role: "user",
    isActive: true,
    isEmailVerified: false,
    age: 25,
    gender: "male",
    createdAt: "2026-03-20",
  },
  {
    _id: "u3",
    name: "Test User",
    email: "test@example.com",
    phone: "8888888888",
    role: "user",
    isActive: false,
    isEmailVerified: false,
    age: 22,
    gender: "female",
    createdAt: "2026-03-15",
  },
];

const AllUsers = () => {
const [users, setUsers] = useState<User[]>(DUMMY_USERS);
const [selectedUser, setSelectedUser] = useState<User | null>(null);
const [isOpen, setIsOpen] = useState<boolean>(false);
  // Stats
  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.isActive).length;
  const verifiedUsers = users.filter((u) => u.isEmailVerified).length;

const deleteUser = (id: string) => {
  setUsers(users.filter((u) => u._id !== id));
};

  return (
   <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans pb-20">
 
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">
              Manage <span className="text-[#00ff00]">Users</span>
            </h1>
            <p className="text-neutral-400 mt-2 text-sm">
             Manage user permissions, account status, and verification.
            </p>
          </div>

          <div className=" flex items-center justify-around gap-2">
            <input  type="search" placeholder="search user" className="rounded p-1 text-sm border border-neutral-500" />
            <button className="p-2 bg-white text-black">
                <Search size={18}/>
            </button>
          </div>
        </header>
      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
          <p className="text-zinc-400 text-sm">Total Users</p>
          <h2 className="text-2xl font-bold text-white">{totalUsers}</h2>
        </div>

        <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
          <p className="text-zinc-400 text-sm">Active Users</p>
          <h2 className="text-2xl font-bold text-[#00ff00]">{activeUsers}</h2>
        </div>

        <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
          <p className="text-zinc-400 text-sm">Verified Users</p>
          <h2 className="text-2xl font-bold text-blue-400">{verifiedUsers}</h2>
        </div>
      </div>

      {/* Table */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-zinc-900 text-xs uppercase text-zinc-400">
            <tr>
              <th className="p-4">User</th>
              <th>Email</th>
              <th>Status</th>
              <th>Verified</th>
              <th>Joined</th>
              <th className="text-right pr-6">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-t border-zinc-800 hover:bg-white/[0.02] group"
              >
                <td className="p-4">
                  <p className="font-medium text-white">{user.name}</p>
                  <p className="text-xs text-zinc-500">{user.phone}</p>
                </td>

                <td>{user.email}</td>

                <td>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      user.isActive
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="uppercase text-xs">
                  {user.isEmailVerified ? "Yes" : "No"}
                </td>

                <td className="text-xs text-zinc-500">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>

                {/* Actions */}
                <td className="flex justify-end gap-4 p-4">
                  {/* Eye */}
                  <button
                    onClick={() => {
                        setSelectedUser(user);
                         setIsOpen(true);}}
                    className="text-zinc-400 hover:text-[#00ff00]"
                  >
                    <Eye size={18} />
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="text-zinc-400 hover:text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
    </div>
      {selectedUser && isOpen && (
        <UsersEye selectedUser={selectedUser }  setIsOpen={setIsOpen}/>
      )}
    </div>
  );
};

export default AllUsers;
