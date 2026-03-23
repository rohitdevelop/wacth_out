 "use client";

import Link from "next/link";
import { Home, ShoppingCart, Users, Settings } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: Home, path: "/admin" },
  { name: "Orders", icon: ShoppingCart, path: "/admin/orders" },
  { name: "Users", icon: Users, path: "/admin/users" },
  { name: "Settings", icon: Settings, path: "/admin/settings" },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#0f172a] text-white flex flex-col p-5">
      <h1 className="text-2xl font-bold text-green-400 mb-8">
        Admin Panel
      </h1>

      <nav className="flex flex-col gap-4">
        {menuItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              href={item.path}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-600 transition"
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}