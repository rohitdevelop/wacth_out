"use client";

import { useState } from "react";
import {
  SlidersHorizontal,
  Tag,
  IndianRupee,
  Star,
  RotateCcw,
  Menu,
} from "lucide-react";

export default function FilterSidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`
         h-screen z-10 flex flex-col text-white
      transition-all duration-300 ease-in-out
      bg-black 
      backdrop-blur-xl border-r border-green-500/20
      shadow-[0_0_30px_rgba(0,255,0,0.05)]
      ${open ? "w-64" : "w-16"}
    `}
    >
      {/* 🔘 Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="m-2 p-2 bg-green-600/20 text-green-400 rounded-lg w-8"
      >
        <Menu size={18} />
      </button>

      {/* 🔍 Title */}
      <div className="px-3 py-4 border-b border-white/10 flex items-center gap-2">
        <SlidersHorizontal className="text-green-400" size={18} />
        <span
          className={`transition-all duration-300 text-sm font-semibold ${
            open ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
          }`}
        >
          Filters
        </span>
      </div>

      {/* 📂 CATEGORY */}
      <div className="px-3 py-4 border-b border-white/10">
        <div className="flex items-center gap-2 mb-3">
          <Tag size={16} className="text-green-400" />
          <span
            className={`text-xs uppercase text-neutral-400 ${
              open ? "block" : "hidden"
            }`}
          >
            Category
          </span>
        </div>

        {["All", "Smart", "Analog", "Digital"].map((item) => (
          <p
            key={item}
            className={`cursor-pointer text-sm py-1 hover:text-green-400 ${
              open ? "block" : "hidden"
            }`}
          >
            {item}
          </p>
        ))}
      </div>

      {/* 💰 PRICE */}
      <div className="px-3 py-4 border-b border-white/10">
        <div className="flex items-center gap-2 mb-3">
          <IndianRupee size={16} className="text-green-400" />
          <span
            className={`text-xs uppercase text-neutral-400 ${
              open ? "block" : "hidden"
            }`}
          >
            Price
          </span>
        </div>

        {open && (
          <>
            <input
              type="range"
              className="w-full accent-green-400"
            />
            <div className="flex justify-between text-xs mt-1">
              <span>₹0</span>
              <span>₹50k</span>
            </div>
          </>
        )}
      </div>

      {/* ⭐ RATING */}
      <div className="px-3 py-4 border-b border-white/10">
        <div className="flex items-center gap-2 mb-3">
          <Star size={16} className="text-green-400" />
          <span
            className={`text-xs uppercase text-neutral-400 ${
              open ? "block" : "hidden"
            }`}
          >
            Rating
          </span>
        </div>

        {open && (
          <div className="space-y-1 text-sm">
            <p>⭐⭐⭐⭐☆ & up</p>
            <p>⭐⭐⭐☆☆ & up</p>
            <p>⭐⭐☆☆☆ & up</p>
          </div>
        )}
      </div>

      {/* 🔄 RESET */}
      <div className="p-3 mt-auto">
        <button className="flex items-center justify-center gap-2 w-full py-2 border border-green-400/30 rounded-lg hover:bg-green-500/10 transition">
          <RotateCcw size={16} />
          <span
            className={`text-sm ${
              open ? "block" : "hidden"
            }`}
          >
            Reset
          </span>
        </button>
      </div>
    </aside>
  );
}