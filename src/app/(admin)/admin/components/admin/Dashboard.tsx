"use client";

import React from "react";
import { Users, ShoppingCart, IndianRupee, Activity } from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,240",
      icon: <Users size={20} />,
    },
    {
      title: "Orders",
      value: "320",
      icon: <ShoppingCart size={20} />,
    },
    {
      title: "Revenue",
      value: "₹8.4L",
      icon: <IndianRupee size={20} />,
    },
    {
      title: "Activity",
      value: "89%",
      icon: <Activity size={20} />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* 🌌 Background Glow */}
 
      {/* 🔳 Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 ">

        {/* 🔥 Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Admin <span className="text-[#00ff00]">Dashboard</span>
          </h1>
          <p className="text-neutral-400 mt-2">
            Monitor your platform performance and analytics
          </p>
        </div>

        {/* 📊 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((item, i) => (
            <div
              key={i}
              className="relative p-5 border border-neutral-800 rounded-xl bg-white/5 backdrop-blur-md hover:border-[#00ff00]/40 transition"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-neutral-400 text-sm">
                  {item.title}
                </span>
                <div className="text-[#00ff00]">{item.icon}</div>
              </div>
              <h2 className="text-2xl font-semibold">{item.value}</h2>

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#00ff00]/5 opacity-0 hover:opacity-100 transition pointer-events-none" />
            </div>
          ))}
        </div>

        {/* 📈 Graph Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Main Graph */}
          <div className="lg:col-span-2 p-6 border border-neutral-800 rounded-xl bg-white/5 backdrop-blur-md">
            <h2 className="text-lg mb-4 text-neutral-300">
              Revenue Overview
            </h2>

            {/* Fake Graph (UI only) */}
            <div className="h-64 flex items-end gap-3">
              {[40, 60, 30, 80, 55, 70, 90].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-[#00ff00]/70 to-transparent rounded-md"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Activity Panel */}
          <div className="p-6 border border-neutral-800 rounded-xl bg-white/5 backdrop-blur-md">
            <h2 className="text-lg mb-4 text-neutral-300">
              Recent Activity
            </h2>

            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex justify-between">
                <span>New User Registered</span>
                <span className="text-[#00ff00]">+1</span>
              </li>
              <li className="flex justify-between">
                <span>Order Placed</span>
                <span className="text-[#00ff00]">+3</span>
              </li>
              <li className="flex justify-between">
                <span>Revenue Increase</span>
                <span className="text-[#00ff00]">+₹12k</span>
              </li>
              <li className="flex justify-between">
                <span>Server Load</span>
                <span className="text-yellow-400">Medium</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ⚡ Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="p-6 border border-neutral-800 rounded-xl bg-white/5 backdrop-blur-md">
            <h2 className="text-lg text-neutral-300 mb-3">
              Top Products
            </h2>
            <p className="text-neutral-400 text-sm">
              Rolex Submariner, Omega Speedmaster...
            </p>
          </div>

          <div className="p-6 border border-neutral-800 rounded-xl bg-white/5 backdrop-blur-md">
            <h2 className="text-lg text-neutral-300 mb-3">
              System Status
            </h2>
            <p className="text-green-400 text-sm">
              All systems operational ✅
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;

// dhasboard , order, users, products, sell, profile