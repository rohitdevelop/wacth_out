"use client";

import React, { useState } from "react";
import { Plus, Pencil, Trash2, Eye, Search, X } from "lucide-react";
import AddProductForm from "../../components/ui/AddProductForm";

// ✅ Types
type Product = {
  id: number;
  image: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: "Active" | "Inactive";
};

type Stat = {
  label: string;
  value: number;
  color?: string;
};

// ✅ Style Mapper for Categories
const categoryStyles: Record<
  string,
  { bg: string; color: string; border: string }
> = {
  MEN: { bg: "#16a34a", color: "#fff", border: "#15803d" },
  WOMEN: { bg: "#db2777", color: "#fff", border: "#be185d" },
  KIDS: { bg: "#eab308", color: "#000", border: "#ca8a04" },
  SPORTS: { bg: "#2563eb", color: "#fff", border: "#1d4ed8" },
};
// ✅ Dummy Data
const productsData: Product[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    name: "Rolex Submariner",
    category: "Men",
    price: "8,50,000",
    stock: 10,
    status: "Active",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    name: "Omega Speedmaster",
    category: "Women",
    price: "5,20,000",
    stock: 5,
    status: "Inactive",
  },
];

// ✅ Sub-Components
const StatCard = ({ label, value, color = "#00ff50" }: Stat) => (
  <div className="flex flex-col items-center justify-center rounded-xl px-4 py-5 bg-neutral-900/50 border border-neutral-700 hover:border-[#00ff00]/50 transition-all duration-300 group">
    <p className="text-[11px] uppercase tracking-widest text-neutral-300 mb-1 truncate">
      {label}
    </p>
    <p className="text-3xl font-bold" style={{ color }}>
      {value}
    </p>
  </div>
);

const CategoryBar = ({
  label,
  value,
  total,
  color,
}: {
  label: string;
  value: number;
  total: number;
  color: string;
}) => {
  const percentage = (value / total) * 100;
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-neutral-300 font-medium">{label}</span>
        <span className="text-white font-mono">{value}</span>
      </div>
      <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden border border-neutral-700">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${percentage}%`,
            background: color,
            boxShadow: `0 0 10px ${color}44`,
          }}
        />
      </div>
    </div>
  );
};

const ActionButton = ({
  icon,
  color,
}: {
  icon: React.ReactNode;
  color: string;
}) => (
  <button
    className={`p-2 rounded-lg border border-neutral-700 bg-neutral-900/50 transition-all hover:scale-110 ${color}`}
  >
    {icon}
  </button>
);

// ✅ Main Page
const Page = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  // Logic: Filter products based on search
  const filteredProducts = productsData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()),
  );

  const mainStats: Stat[] = [
    { label: "Total Products", value: 10 },
    { label: "Total Canceled", value: 2, color: "#ff4444" },
    { label: "Active", value: 4 },
    { label: "Inactive", value: 5, color: "#a3a3a3" },
  ];

  const categoryStats = [
    { label: "Men", value: 10, color: "#16a34a" },
    { label: "Women", value: 8, color: "#db2777" },
    { label: "Kids", value: 6, color: "#eab308" },
    { label: "Sports", value: 4, color: "#2563eb" },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,0,0.07),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">
              Manage <span className="text-[#00ff00]">Inventory</span>
            </h1>
            <p className="text-neutral-400 mt-2 text-sm">
              System Status:{" "}
              <span className="text-green-500 animate-pulse">Operational</span>
            </p>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-black rounded-xl hover:bg-[#00ff00] transition-all active:scale-95"
          >
            <Plus size={18} strokeWidth={3} />
            ADD PRODUCT
          </button>
        </header>

        {isOpen && <AddProductForm setIsOpen={setIsOpen} />}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {mainStats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        {/* Category Analytics */}
        <div className="p-8 rounded-3xl mb-10 bg-neutral-900/30 border border-neutral-800 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-8 text-lg font-bold">
            <div className="w-2 h-6 bg-[#00ff00] rounded-full" />
            Category Distribution
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {categoryStats.map((cat) => (
              <CategoryBar key={cat.label} {...cat} total={28} />
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-4 px-5 py-4 rounded-2xl mb-8 bg-neutral-900/50 border border-neutral-700 focus-within:border-[#00ff00] transition-colors shadow-inner">
          <Search size={20} className="text-neutral-500" />
          <input
            type="text"
            placeholder="Search by name or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-base placeholder-neutral-600 focus:outline-none flex-1 text-white"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-neutral-400 hover:text-white"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-3xl border border-neutral-700 bg-neutral-900/20 backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-neutral-800/40 border-b border-neutral-700">
                  {[
                    "Product",
                    "Name",
                    "Category",
                    "Price",
                    "Stock",
                    "Status",
                    "Actions",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-6 py-5 text-[11px] font-black text-neutral-300 uppercase tracking-widest"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                {filteredProducts.map((item) => (
                  <tr
                    key={item.id}
                    className="group hover:bg-[#00ff00]/[0.02] transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div className="w-14 h-14 rounded-xl overflow-hidden border border-neutral-700">
                        <img
                          src={item.image}
                          className="w-full h-full object-cover"
                          alt={item.name}
                        />
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm font-bold text-white group-hover:text-[#00ff00] transition-colors">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-neutral-500 font-mono mt-1">
                        ID: #000{item.id}
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        style={{
                          backgroundColor:
                            (categoryStyles[item.category.toUpperCase()] || {})
                              .bg || "#404040",
                          color:
                            (categoryStyles[item.category.toUpperCase()] || {})
                              .color || "#fff",
                          border: `1px solid ${(categoryStyles[item.category.toUpperCase()] || {}).border || "#525252"}`,
                        }}
                        className="text-[10px] px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider"
                      >
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm font-mono font-bold text-neutral-200">
                      ₹{item.price}
                    </td>
                    <td className="px-6 py-5 text-sm font-semibold text-neutral-300">
                      {item.stock}{" "}
                      <span className="text-[10px] text-neutral-600 uppercase ml-1">
                        units
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${item.status === "Active" ? "bg-green-500/5 text-green-400 border-green-500/20" : "bg-red-500/5 text-red-400 border-red-500/20"}`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${item.status === "Active" ? "bg-green-400" : "bg-red-400"}`}
                        />
                        <span className="text-[10px] font-black uppercase tracking-widest">
                          {item.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5 flex gap-3">
                      <ActionButton
                        icon={<Eye size={16} />}
                        color="hover:text-green-400 hover:border-green-400"
                      />
                      <ActionButton
                        icon={<Pencil size={16} />}
                        color="hover:text-blue-400 hover:border-blue-400"
                      />
                      <ActionButton
                        icon={<Trash2 size={16} />}
                        color="hover:text-red-400 hover:border-red-400"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
