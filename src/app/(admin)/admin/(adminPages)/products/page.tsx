"use client";

import React from "react";
import { Plus, Pencil, Trash2, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Rolex Submariner",
    price: "₹8,50,000",
    status: "Active",
  },
  {
    id: 2,
    name: "Omega Speedmaster",
    price: "₹5,20,000",
    status: "Inactive",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 ">

        {/* 🔥 Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-semibold">
            Manage <span className="text-[#00ff00]">Products</span>
          </h1>

          {/* Add Product */}
          <button className="flex items-center gap-2 px-5 py-2.5 bg-[#00ff00] text-black text-sm font-semibold hover:opacity-90 transition rounded-md">
            <Plus size={16} />
            Add Product
          </button>
        </div>

        {/* 📦 Table */}
        <div className="border border-neutral-800 rounded-xl overflow-hidden bg-white/5 backdrop-blur-md">

          {/* Table Head */}
          <div className="grid grid-cols-4 px-6 py-4 text-sm text-neutral-400 border-b border-neutral-800">
            <span>Product</span>
            <span>Price</span>
            <span>Status</span>
            <span className="text-right">Actions</span>
          </div>

          {/* Table Body */}
          {products.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 px-6 py-4 items-center border-b border-neutral-900 hover:bg-white/5 transition"
            >
              <span className="text-white">{item.name}</span>

              <span className="text-neutral-300">{item.price}</span>

              <span
                className={`text-xs px-2 py-1 rounded w-fit ${
                  item.status === "Active"
                    ? "bg-[#00ff00]/10 text-[#00ff00]"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {item.status}
              </span>

              {/* Actions */}
              <div className="flex justify-end gap-3">

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

        {/* ⚡ Empty State (optional) */}
        {products.length === 0 && (
          <div className="text-center mt-10 text-neutral-400">
            No products found
          </div>
        )}

      </div>
    </div>
  );
};

export default Page;