"use client";

import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 ">

        {/* 🔥 Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-semibold">
            Manage <span className="text-[#00ff00]">Users</span>
          </h1>
          <p className="text-neutral-400 mt-2 text-sm">
            View and manage all registered users
          </p>
        </div>

        {/* 🧱 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {users.map((user) => (
            <div
              key={user.id}
              className="relative p-6 border border-neutral-800 rounded-xl bg-white/5 backdrop-blur-md hover:border-[#00ff00]/40 transition group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#00ff00]/5 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-[#00ff00]/10 flex items-center justify-center text-[#00ff00] font-semibold mb-4">
                {user.name.charAt(0)}
              </div>

              {/* Info */}
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-neutral-400 text-sm">{user.email}</p>

              {/* Role Badge */}
              <span
                className={`inline-block mt-3 text-xs px-2 py-1 rounded ${
                  user.role === "Admin"
                    ? "bg-[#00ff00]/10 text-[#00ff00]"
                    : "bg-neutral-800 text-neutral-300"
                }`}
              >
                {user.role}
              </span>

              {/* Actions */}
              <div className="flex gap-3 mt-5">
                <button className="p-2 border border-neutral-700 hover:border-[#00ff00] hover:text-[#00ff00] transition rounded-md">
                  <Eye size={16} />
                </button>

                <button className="p-2 border border-neutral-700 hover:border-blue-400 hover:text-blue-400 transition rounded-md">
                  <Pencil size={16} />
                </button>

                <button className="p-2 border border-neutral-700 hover:border-red-500 hover:text-red-500 transition rounded-md">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* Empty state */}
        {users.length === 0 && (
          <div className="text-center mt-10 text-neutral-400">
            No users found
          </div>
        )}

      </div>
    </div>
  );
};

export default Page;