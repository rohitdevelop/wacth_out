"use client";

import { useState } from "react";
import {
  Search,
  LayoutGrid,
  Rows,
  SlidersHorizontal,
} from "lucide-react";

const filters = [
  "All",
  "Men",
  "Women",
  "Under ₹500",
  "Under ₹1000",
  "Luxury",
];

const TopNav = () => {
  const [active, setActive] = useState("All");
  const [view, setView] = useState("grid");

  return (
    <div className="w-full sticky top-0 z-30 backdrop-blur-xl bg-black/60 border-b border-green-500/20 px-4 md:px-8 py-3 flex flex-col gap-3">

      {/* 🔍 Top Row */}
      <div className="flex items-center justify-between gap-4">

        {/* Search */}
        <div className="flex items-center gap-2 bg-[#0a0a0a] border border-green-500/20 px-3 py-2 rounded-lg w-full max-w-md">
          <Search size={16} className="text-green-400" />
          <input
            type="text"
            placeholder="Search watches..."
            className="bg-transparent outline-none text-sm w-full placeholder:text-neutral-500"
          />
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-lg border ${
              view === "grid"
                ? "bg-green-500/20 text-green-400 border-green-500/30"
                : "border-white/10 text-neutral-400"
            }`}
          >
            <LayoutGrid size={18} />
          </button>

          <button
            onClick={() => setView("row")}
            className={`p-2 rounded-lg border ${
              view === "row"
                ? "bg-green-500/20 text-green-400 border-green-500/30"
                : "border-white/10 text-neutral-400"
            }`}
          >
            <Rows size={18} />
          </button>
        </div>
      </div>

      {/* 🎯 Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">

        <SlidersHorizontal className="text-green-400 shrink-0" size={18} />

        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`
              px-4 py-1.5 text-sm rounded-full whitespace-nowrap border transition-all duration-300
              ${
                active === item
                  ? "bg-green-500/20 text-green-400 border-green-500/30"
                  : "border-white/10 text-neutral-400 hover:text-white hover:bg-white/5"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>

    </div>
  );
};

export default TopNav;