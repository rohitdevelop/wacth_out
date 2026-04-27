"use client";

import {
  SlidersHorizontal,
  Tag,
  IndianRupee,
  Star,
  RotateCcw,
} from "lucide-react";

export default function FilterSidebar() {
  return (
    <aside
      className={`hidden md:block
     left-64  
     backdrop-blur-xl bg-black/60 
    border-r border-gray-600 
    px-4 md:px-8 py-3 
    flex flex-col gap-3
    transition-all duration-300
  `}
    >
      {/* 🔍 Title */}
      <div className="px-3 py-4 border-b border-white/10 flex items-center gap-2">
        <SlidersHorizontal className="text-green-400" size={18} />
        <span className="transition-all duration-300 text-sm font-semibol">
          Filters
        </span>
      </div>

      {/* 📂 CATEGORY */}
      <div className="px-3 py-4 border-b border-white/10">
        <div className="flex items-center gap-2 mb-3">
          <Tag size={16} className="text-green-400" />
          <span className="text-xs uppercase text-neutral-400">
            Category
          </span>
        </div>

        {(["All", "Smart", "Analog", "Digital"] as string[]).map((item) => (
          <p
            key={item}
            className="cursor-pointer text-sm py-1 hover:text-green-400"
          >
            {item}
          </p>
        ))}
      </div>

      {/* 💰 PRICE */}
      <div className="px-3 py-4 border-b border-white/10">
        <div className="flex items-center gap-2 mb-3">
          <IndianRupee size={16} className="text-green-400" />
          <span className="text-xs uppercase text-neutral-400">Price</span>
        </div>
      </div>

      {/* ⭐ RATING */}
      <div className="px-3 py-4 border-b border-white/10">
        <div className="flex items-center gap-2 mb-3">
          <Star size={16} className="text-green-400" />
          <span className="text-xs uppercase text-neutral-400">Rating</span>
        </div>

        <div className="space-y-1 text-sm">
          <p>⭐⭐⭐⭐☆ & up</p>
          <p>⭐⭐⭐☆☆ & up</p>
          <p>⭐⭐☆☆☆ & up</p>
        </div>
      </div>

      {/* 🔄 RESET */}
      <div className="p-3 mt-auto">
        <button className="flex items-center justify-center gap-2 w-full py-2 border border-green-400/30 rounded-lg hover:bg-green-500/10 transition">
          <RotateCcw size={16} />
          <span className="text-sm">Reset</span>
        </button>
      </div>
    </aside>
  );
}