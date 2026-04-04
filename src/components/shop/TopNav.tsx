"use client";

import { LayoutGrid, Search, Rows, SlidersHorizontal } from "lucide-react";

type ViewType = "grid" | "list";

type TopNavbarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  view: ViewType;
  setView: React.Dispatch<React.SetStateAction<ViewType>>;
};

const TopNavbar = ({ open, setOpen, view, setView }: TopNavbarProps) => {
  return (
    <div className="w-full border-b border-green-500/20 bg-black/60 backdrop-blur-xl">
      {/* 🔝 MAIN NAV */}
      <div className="h-16 flex items-center justify-between px-6">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="p-2 block md:hidden rounded-lg bg-green-500/10 text-green-400"
          >
            <SlidersHorizontal className="text-green-400 shrink-0" size={18} />
          </button>

          <h1 className="hidden md:block text-lg font-semibold ">Watch Store</h1>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center gap-2 bg-[#0a0a0a] px-3 py-2 rounded-lg border border-green-500/20">
            <Search size={16} className="text-green-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm"
            />
          </div>

          {/* 🧱 VIEW TOGGLE */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded-lg border transition ${
                view === "grid"
                  ? "bg-green-500/20 text-green-400 border-green-500/30"
                  : "border-white/10 text-neutral-400 hover:text-white"
              }`}
            >
              <LayoutGrid size={18} />
            </button>

            <button
              onClick={() => setView("list")}
              className={`p-2 rounded-lg border transition ${
                view === "list"
                  ? "bg-green-500/20 text-green-400 border-green-500/30"
                  : "border-white/10 text-neutral-400 hover:text-white"
              }`}
            >
              <Rows size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* 🎯 FILTER BAR */}
      {open && (
        <div className="w-full px-6 pb-4 flex flex-wrap items-center gap-4">
          {/* 💰 PRICE */}
          <div className="flex items-center gap-3 bg-[#0a0a0a] px-4 py-2 rounded-lg border border-green-500/20">
            <span className="text-xs text-neutral-400">Price</span>
            <input
              type="range"
              min="0"
              max="50000"
              className="accent-green-400"
            />
          </div>

          {/* 🎨 COLOR */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-400">Color</span>

            {["#000000", "#ffffff", "#00ff00", "#c0c0c0"].map((c, i) => (
              <button
                key={i}
                className="w-6 h-6 rounded-full border border-white/20 hover:scale-110 transition"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>

          {/* ⚡ SORT */}
          <select className="bg-[#0a0a0a] border border-green-500/20 px-3 py-2 rounded-lg text-sm">
            <option>Sort</option>
            <option>Price Low → High</option>
            <option>Price High → Low</option>
            <option>Newest</option>
          </select>

          {/* 🔥 FILTER BUTTON */}
          <button className="px-4 py-2 text-sm border border-green-500/30 rounded-lg hover:bg-green-500/10 transition">
            Premium
          </button>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;