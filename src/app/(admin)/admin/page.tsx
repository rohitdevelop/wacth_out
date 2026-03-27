"use client";

import React from "react";
import { TrendingUp, Users, ShoppingCart, IndianRupee } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,0,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

        {/* Header */}
        <h1 className="text-3xl font-semibold mb-10">
          Analytics <span className="text-[#00ff00]">Overview</span>
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">

          {[
            { title: "Revenue", value: "₹12L", icon: <IndianRupee /> },
            { title: "Users", value: "2,340", icon: <Users /> },
            { title: "Orders", value: "540", icon: <ShoppingCart /> },
            { title: "Growth", value: "+18%", icon: <TrendingUp /> },
          ].map((item, i) => (
            <div key={i} className="p-5 border border-neutral-800 rounded-xl bg-white/5 backdrop-blur-md">
              <div className="flex justify-between mb-3 text-neutral-400">
                {item.title}
                <span className="text-[#00ff00]">{item.icon}</span>
              </div>
              <h2 className="text-xl font-semibold">{item.value}</h2>
            </div>
          ))}

        </div>

        {/* Graph */}
        <div className="p-6 border border-neutral-800 rounded-xl bg-white/5 backdrop-blur-md">
          <h2 className="mb-4 text-neutral-300">Sales Trend</h2>

          <div className="h-64 flex items-end gap-3">
            {[30, 60, 40, 80, 50, 70, 90].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-[#00ff00]/70 to-transparent rounded" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;

/*

What to show in /admin

👉 Short + Important info only

Welcome message 👋
Admin info (name, role)
Quick stats (small cards):
Total Users
Total Orders
Total Products
Recent activity (last 3–5 items)
Quick actions:
➕ Add Product
👤 Manage Users
📦 View Orders
🧠 Definition:

👉 /admin =
“Entry point where admin understands what's happening quickly”

*/