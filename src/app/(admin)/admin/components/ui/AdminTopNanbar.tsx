"use client";

import React from "react";
import { Bell, Search } from "lucide-react";

const AdminTopNavbar = (  ) => {
  return (
    <header
      className={`
        fixed top-0 right-0 z-30 h-16
        bg-zinc-950/90 backdrop-blur-xl border-b border-white/10
        flex items-center justify-between px-4 md:px-6 text-white
        transition-all duration-300
 
      `}
    >
      {/* 🧠 Welcome Text */}
      <h1 className="text-sm md:text-base font-semibold whitespace-nowrap">
        Arvento
        <span className="text-[#00ff00]">Chrono</span>
      </h1>

      {/* 🔍 Search + 🔔 Notification */}
      <div className="flex items-center gap-3">
        
        {/* 🔍 Search */}
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
          />
          <input
            type="text"
            placeholder="Search..."
            className="bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-sm outline-none focus:border-green-500 transition w-32 sm:w-40 md:w-56"
          />
        </div>

        {/* 🔔 Notification */}
        <div className="relative cursor-pointer p-2 rounded-lg hover:bg-white/5 transition">
          <Bell size={18} />

          {/* 🔴 Notification Dot */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
        </div>
      </div>
    </header>
  );
};

export default AdminTopNavbar;