"use client";

import {
  SlidersHorizontal,
  Tag,
  IndianRupee,
  Star,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";

export default function FilterSidebar() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Smart", "Analog", "Digital"];

  return (
    <aside
      className="
      hidden md:flex flex-col
      w-72 min-h-screen
      backdrop-blur-xl bg-black/70
      border-r border-neutral-800
      px-5 py-5
      gap-5
    "
    >
      {/* 🔍 HEADER */}
      <div className="flex items-center gap-3 pb-4 border-b border-white/10">
        <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
          <SlidersHorizontal className="text-green-400" size={18} />
        </div>
        <h2 className="text-sm font-semibold tracking-wide text-white">
          Filters
        </h2>
      </div>

      {/* 📂 CATEGORY */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Tag size={16} className="text-green-400" />
          <span className="text-xs uppercase text-neutral-400 tracking-wider">
            Category
          </span>
        </div>

        <div className="flex flex-col gap-1">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`
                text-sm text-left px-3 py-2 rounded-lg transition-all
                ${
                  activeCategory === item
                    ? "bg-green-500/10 text-green-400 border border-green-500/30"
                    : "text-neutral-300 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* 💰 PRICE */}
      <div className="space-y-3 border-t border-white/10 pt-4">
        <div className="flex items-center gap-2">
          <IndianRupee size={16} className="text-green-400" />
          <span className="text-xs uppercase text-neutral-400 tracking-wider">
            Price Range
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="100000"
          className="w-full accent-green-400 cursor-pointer"
        />

        <div className="flex justify-between text-xs text-neutral-400">
          <span>₹0</span>
          <span>₹1L+</span>
        </div>
      </div>

      {/* ⭐ RATING */}
      <div className="space-y-3 border-t border-white/10 pt-4">
        <div className="flex items-center gap-2">
          <Star size={16} className="text-green-400" />
          <span className="text-xs uppercase text-neutral-400 tracking-wider">
            Rating
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {["4", "3", "2"].map((r) => (
            <button
              key={r}
              className="text-sm text-neutral-300 hover:text-green-400 transition flex items-center gap-2"
            >
              {"⭐".repeat(Number(r))}
              <span className="text-xs text-neutral-500">& up</span>
            </button>
          ))}
        </div>
      </div>

      {/* 🔄 RESET */}
      <div className="mt-auto pt-5 border-t border-white/10">
        <button
          className="
          flex items-center justify-center gap-2
          w-full py-2.5
          border border-green-500/30
          rounded-xl
          text-green-400
          hover:bg-green-500/10
          hover:scale-[1.02]
          transition-all
        "
        >
          <RotateCcw size={16} />
          <span className="text-sm font-medium">Reset Filters</span>
        </button>
      </div>
    </aside>
  );
}