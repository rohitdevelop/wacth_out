"use client";

import React, { useState } from "react";
import { Plus, Search, X } from "lucide-react";
import AddProductForm from "../ui/AddProductForm";
import AllProductsTable from "../ui/AllProductsTable";
import ProductEditPop from "../ui/ProductEditPop";
import ProductEyePop from "../ui/ProductEyePop";
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

// const ActionButton = ({
//   icon,
//   color,
// }: {
//   icon: React.ReactNode;
//   color: string;
// }) => (
//   <button
//     className={`p-2 rounded-lg border border-neutral-700 bg-neutral-900/50 transition-all hover:scale-110 ${color}`}
//   >
//     {icon}
//   </button>
// );
const AddProducts = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [viewProduct, setViewProduct] = useState(null);

  // Logic: Filter products based on search
  // const filteredProducts = productsData.filter(
  //   (item) =>
  //     item.name.toLowerCase().includes(search.toLowerCase()) ||
  //     item.category.toLowerCase().includes(search.toLowerCase()),
  // );

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">
              Manage <span className="text-[#00ff00]">Inventory</span>
            </h1>
            <p className="text-neutral-400 mt-2 text-sm">
              System Status Operational
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
        <AllProductsTable
          onEdit={(product: any) => {
            setSelectedProduct(product);
            setIsEditOpen(true);
          }}
          onView={(product: any) => {
            setViewProduct(product);
            setIsViewOpen(true);
          }}
        />
      </div>
      {isOpen && <AddProductForm setIsOpen={setIsOpen} />}
      {isEditOpen && (
        <ProductEditPop product={selectedProduct} setIsOpen={setIsEditOpen} />
      )}
      {isViewOpen && (
        <ProductEyePop product={viewProduct} setIsOpen={setIsViewOpen} />
      )}
    </div>
  );
};

export default AddProducts;
