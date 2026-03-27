"use client";

import React, { useState } from "react";
import { Pencil, Save } from "lucide-react";

const Page = () => {
  const [edit, setEdit] = useState(false);

  const [user, setUser] = useState({
    name: "Rohit Singh",
    email: "rohit@gmail.com",
    phone: "+91 9876543210",
    address: "Delhi, India",
  });

  const orders = [
    { id: "#ORD123", item: "Rolex Submariner", price: "₹8,50,000" },
    { id: "#ORD124", item: "Omega Speedmaster", price: "₹5,20,000" },
  ];

  const handleChange = (field: string, value: string) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 relative overflow-hidden py-24">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,0,0.08),transparent_60%)]" />

      {/* 🧾 Container */}
      <div className="relative z-10 w-full max-w-3xl  bg-white/5 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 md:p-10">

        {/* 🔥 Header */}
        <div className="flex flex-col items-center text-center mb-8">

          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-[#00ff00]/10 flex items-center justify-center text-[#00ff00] text-2xl font-bold mb-3">
            {user.name.charAt(0)}
          </div>

          <h1 className="text-2xl font-semibold">{user.name}</h1>
          <p className="text-neutral-400 text-sm">{user.email}</p>

          {/* Edit Button */}
          <button
            onClick={() => setEdit(!edit)}
            className="mt-4 flex items-center gap-2 text-sm border border-neutral-700 px-4 py-2 rounded-md hover:border-[#00ff00] hover:text-[#00ff00] transition"
          >
            {edit ? <Save size={14} /> : <Pencil size={14} />}
            {edit ? "Save" : "Edit Profile"}
          </button>
        </div>

        {/* 🧍 Personal Info */}
        <div className="mb-8">
          <h2 className="text-sm text-neutral-400 mb-3 uppercase tracking-wider">
            Personal Details
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              disabled={!edit}
              value={user.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="bg-black border border-neutral-800 p-3 rounded-md outline-none focus:border-[#00ff00]"
            />

            <input
              disabled={!edit}
              value={user.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="bg-black border border-neutral-800 p-3 rounded-md outline-none focus:border-[#00ff00]"
            />

            <input
              disabled
              value={user.email}
              className="bg-black border border-neutral-800 p-3 rounded-md text-neutral-500"
            />

          </div>
        </div>

        {/* 📍 Address */}
        <div className="mb-8">
          <h2 className="text-sm text-neutral-400 mb-3 uppercase tracking-wider">
            Address
          </h2>

          <textarea
            disabled={!edit}
            value={user.address}
            onChange={(e) => handleChange("address", e.target.value)}
            className="w-full bg-black border border-neutral-800 p-3 rounded-md outline-none focus:border-[#00ff00]"
          />
        </div>

        {/* 📦 Orders */}
        <div>
          <h2 className="text-sm text-neutral-400 mb-3 uppercase tracking-wider">
            Recent Orders
          </h2>

          <div className="space-y-3">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex justify-between items-center p-3 border border-neutral-800 rounded-md bg-black/40"
              >
                <div>
                  <p className="text-sm">{order.item}</p>
                  <p className="text-xs text-neutral-500">{order.id}</p>
                </div>
                <span className="text-[#00ff00] text-sm">
                  {order.price}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;