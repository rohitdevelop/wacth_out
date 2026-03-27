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
} from "lucide-react";

const nav = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
  { name: "Products", icon: Package, path: "/admin/products" },
  { name: "Orders", icon: ShoppingCart, path: "/admin/orders" },
  { name: "Forsell", icon: Tag, path: "/admin/forsell" },
  { name: "Users", icon: Users, path: "/admin/users" },
  { name: "Profile", icon: Settings, path: "/admin/profile" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
   <aside
  className={`
    fixed top-0 left-0 h-screen z-40 flex flex-col
    text-white
    transition-all duration-300 ease-in-out

     bg-gradient-to-r from-black via-zinc-950 to-green-950/80

     backdrop-blur-xl border-r border-green-500/20

     shadow-[0_0_30px_rgba(0,255,0,0.05)]

        ${open ? "w-64" : "w-16"}   
        lg:w-64                   
      `}
    >
      {/* 🔘 Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden m-2 p-2 bg-green-600/20 w-8 text-green-400 rounded-lg"
      >
        <Menu size={18} />
      </button>

      {/* 👤 Profile */}
      <div className="flex flex-col items-center px-2 pb-6 border-b border-white/10 mt-4">
        <div className="w-14 h-14 mb-3 rounded-full flex items-center justify-center bg-gradient-to-br from-black to-green-900 border border-green-500/30">
          <span className="text-green-400 font-bold">RS</span>
        </div>

        {/* 👇 show only when open */}
        <div
          className={`
            transition-all duration-300 text-center
            ${open ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}
            lg:opacity-100 lg:h-auto
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
        flex items-center px-3 py-2.5 rounded-xl
        transition-all duration-300

        ${open ? "gap-3 justify-start" : "gap-0 justify-center lg:gap-2 lg:justify-start"}

        ${
          active === name
            ? "bg-green-600/20 text-green-400"
            : "text-zinc-400 hover:bg-white/5 hover:text-white"
        }
      `}
          >
            <Icon
              className={`
          transition-all duration-300
          ${open ? "w-5 h-5" : "w-7 h-7"}
          lg:w-5 lg:h-5
        `}
            />

            <span
              className={`
          text-sm whitespace-nowrap transition-all duration-300
          ${open ? "opacity-100 ml-1" : "opacity-0 w-0 overflow-hidden"}
          lg:opacity-100 lg:w-auto
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
          className={`
      flex items-center px-3 py-2.5 rounded-xl transition-all duration-300 text-red-400 hover:bg-red-500/10

      ${open ? "gap-3 justify-start" : "gap-0 justify-center lg:gap-3 lg:justify-start"}
    `}
        >
          <LogOut
            className={`
        transition-all duration-300
        ${open ? "w-5 h-5" : "w-7 h-7"}
        lg:w-5 lg:h-5
      `}
          />

          <span
            className={`
        text-sm whitespace-nowrap transition-all duration-300
        ${open ? "opacity-100 ml-1" : "opacity-0 w-0 overflow-hidden"}
        lg:opacity-100 lg:w-auto lg:ml-1
      `}
          >
            Sign Out
          </span>
        </Link>
      </div>
    </aside>
  );
}
