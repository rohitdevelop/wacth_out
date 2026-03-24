"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Tag,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const nav = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
  { name: "Products", icon: Package, path: "/admin/products" },
  { name: "Orders", icon: ShoppingCart, path: "/admin/orders" },
  { name: "Forsell", icon: Tag, path: "/admin/forsell" },
  { name: "Users", icon: Users, path: "/admin/users" },
  { name: "Settings", icon: Settings, path: "/admin/settings" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen z-40 flex flex-col
        bg-zinc-950/90 backdrop-blur-xl border-r border-white/10 text-white
        transition-all duration-300 ease-in-out

        ${open ? "w-64" : "w-16"} 
        lg:w-64
      `}
    >
      {/* 🔘 Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 bg-green-600/20 w-8 text-green-400 rounded-lg transition duration-200"
      >
        <span className="transition-all duration-300">
          {open ? <X size={18} /> : <Menu size={18} />}
        </span>
      </button>

      {/* 👤 Profile */}
      <div className="flex flex-col items-center px-2 pb-6 border-b border-white/10 mt-4">
        <div className="relative w-14 h-14 mb-3">
          <div className="rounded-full flex items-center justify-center bg-gradient-to-br from-black to-green-900 border border-green-500/30 w-full h-full">
            <span className="text-green-400 font-bold">RS</span>
          </div>
        </div>

        {/* 👇 Smooth show/hide */}
        <div
          className={`
            transition-all duration-300 text-center
            ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 h-0 overflow-hidden"}
            lg:opacity-100 lg:translate-y-0 lg:h-auto
          `}
        >
          <p className="text-sm font-semibold">Rohit Singh</p>
          <p className="text-xs text-white/40 truncate">
            rohitdev124421@gmail.com
          </p>
        </div>
      </div>

      {/* 📌 Nav */}
      <nav className="flex-1 py-3 space-y-1 px-2">
        {nav.map(({ name, icon: Icon, path }) => (
          <Link
            key={name}
            href={path}
            onClick={() => setActive(name)}
            className={`
              flex items-center gap-3 px-3 py-2.5 rounded-xl
              transition-all duration-300
              ${
                active === name
                  ? "bg-green-600/20 text-green-400"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }
            `}
          >
            <Icon size={18} />

            {/* 👇 Smooth text animation */}
            <span
              className={`
                text-sm whitespace-nowrap transition-all duration-300
                ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 w-0 overflow-hidden"}
                lg:opacity-100 lg:translate-x-0 lg:w-auto
              `}
            >
              {name}
            </span>
          </Link>
        ))}
      </nav>

      {/* 🚪 Logout */}
      <div className="p-2 border-t border-white/10">
        <Link
          href="/logout"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-400 hover:bg-red-500/10 transition"
        >
          <LogOut size={18} />

          <span
            className={`
              text-sm whitespace-nowrap transition-all duration-300
              ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 w-0 overflow-hidden"}
              lg:opacity-100 lg:translate-x-0 lg:w-auto
            `}
          >
            Sign Out
          </span>
        </Link>
      </div>
    </aside>
  );
}
