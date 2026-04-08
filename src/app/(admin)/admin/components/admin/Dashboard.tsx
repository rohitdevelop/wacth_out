"use client";

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartArea,
} from "chart.js";

import {
  Users,
  ShoppingCart,
  IndianRupee,
  Activity,
  ArrowUpRight,
} from "lucide-react";

/* ================= TYPES ================= */

interface StatCardProps {
  title: string;
  value: string;
  delta: string;
  icon: React.ReactNode;
}

interface Employee {
  name: string;
  role: string;
  salary: string;
  img: string;
  initials: string;
}

interface Product {
  rank: string;
  name: string;
  revenue: string;
  pct: number;
}

interface Seller {
  initials: string;
  name: string;
  units: string;
  isTop: boolean;
}

interface ActivityItem {
  text: string;
  badge: string;
  variant: "green" | "amber";
}

/* ================= CHART CONFIG ================= */

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const getGradient = (ctx: CanvasRenderingContext2D, chartArea: ChartArea) => {
  const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
  gradient.addColorStop(0, "rgba(34, 197, 94, 0.1)"); // bottom (faded green)
  gradient.addColorStop(1, "rgba(34, 197, 94, 1)");   // top (solid green)
  return gradient;
};

const chartData = {
  labels: ["Men", "Kids", "Women", "Sports"],
  datasets: [
    {
      label: "Sales",
      data: [30, 45, 60, 40],
      backgroundColor: (context: any) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return "#22c55e";
        return getGradient(ctx, chartArea);
      },
      borderRadius: 6,
      borderSkipped: false,
    },
  ],
};

/* ================= MOCK DATA ================= */

const STATS: StatCardProps[] = [
  { title: "Users", value: "1,240", delta: "+4.2%", icon: <Users size={16} /> },
  { title: "Orders", value: "320", delta: "+11.5%", icon: <ShoppingCart size={16} /> },
  { title: "Revenue", value: "₹8.4L", delta: "+18.3%", icon: <IndianRupee size={16} /> },
  { title: "Activity", value: "89%", delta: "+2.1%", icon: <Activity size={16} /> },
];

const EMPLOYEES: Employee[] = [
  { name: "Aman", role: "Sales", salary: "₹20k", img: "https://i.pravatar.cc/150?u=1", initials: "AG" },
  { name: "Priya", role: "Manager", salary: "₹28k", img: "https://i.pravatar.cc/150?u=2", initials: "PS" },
  { name: "Rahul", role: "Dev", salary: "₹35k", img: "https://i.pravatar.cc/150?u=3", initials: "RV" },
];

const PRODUCTS: Product[] = [
  { rank: "01", name: "Rolex Submariner", revenue: "₹2.1L", pct: 92 },
  { rank: "02", name: "Omega Speedmaster", revenue: "₹1.6L", pct: 74 },
];

const SELLERS: Seller[] = [
  { initials: "AG", name: "Aman Gupta", units: "148", isTop: true },
  { initials: "PS", name: "Priya Sharma", units: "122", isTop: false },
];

const ACTIVITY_ITEMS: ActivityItem[] = [
  { text: "New User Registered", badge: "+1", variant: "green" },
  { text: "Bulk Order Placed", badge: "+3", variant: "green" },
  { text: "Server Load High", badge: "Medium", variant: "amber" },
];

/* ================= SUB-COMPONENTS ================= */

const Card = ({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) => (
  <div className={`bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all ${className}`}>
    <h3 className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-6">{title}</h3>
    {children}
  </div>
);

/* ================= MAIN DASHBOARD ================= */

export default function AdminDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-green-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Admin <span className="text-green-500">Analytics</span>
            </h1>
            <p className="text-zinc-500 mt-2 font-medium">
              Performance overview for the current billing cycle.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-sm font-semibold hover:bg-zinc-800 transition-all flex items-center gap-2">
              Generate Report
            </button>
            <button className="px-5 py-2.5 bg-green-600 text-black rounded-xl text-sm font-bold hover:bg-green-500 transition-all">
              Live View
            </button>
          </div>
        </header>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="group p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-green-500/50 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-zinc-800 rounded-lg text-green-400 group-hover:bg-green-500 group-hover:text-black transition-all">
                  {stat.icon}
                </div>
                <span className="flex items-center gap-1 text-green-400 text-[11px] font-bold px-2 py-1 bg-green-500/10 rounded-full">
                  {stat.delta} <ArrowUpRight size={10} />
                </span>
              </div>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{stat.title}</p>
              <p className="text-3xl font-bold mt-1 tracking-tight">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* REVENUE GRAPH */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <Card title="Revenue Flow">
              <div className="h-48 w-full relative">
                <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,80 Q50,20 100,50 T200,30 T300,60 T400,20 L400,100 L0,100 Z"
                    fill="url(#areaGradient)"
                  />
                  <path
                    d="M0,80 Q50,20 100,50 T200,30 T300,60 T400,20"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="flex justify-between mt-4 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(d => <span key={d}>{d}</span>)}
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card title="Top Products">
                <div className="space-y-4">
                  {PRODUCTS.map((p, i) => (
                    <div key={i} className="flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                        <span className="text-zinc-600 font-mono text-xs">{p.rank}</span>
                        <span className="text-sm font-medium group-hover:text-green-400 transition-colors">{p.name}</span>
                      </div>
                      <span className="text-sm font-bold">{p.revenue}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card title="Top Sellers">
                <div className="space-y-4">
                  {SELLERS.map((s, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-green-500 border border-zinc-700">
                          {s.initials}
                        </div>
                        <span className="text-sm font-medium">{s.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-zinc-400">{s.units} units</span>
                        {s.isTop && <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* SIDEBAR CONTENT */}
          <div className="flex flex-col gap-8">
            <Card title="Recent Activity">
              <div className="space-y-1">
                {ACTIVITY_ITEMS.map((a, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-zinc-800/50 last:border-0">
                    <span className="text-sm text-zinc-300">{a.text}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                      a.variant === "green" ? "bg-green-500/10 text-green-500" : "bg-amber-500/10 text-amber-500"
                    }`}>
                      {a.badge}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Internal Team">
              <div className="space-y-5">
                {EMPLOYEES.map((e, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <img src={e.img} alt={e.name} className="w-10 h-10 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all" />
                    <div className="flex-1">
                      <p className="text-sm font-bold">{e.name}</p>
                      <p className="text-[11px] text-zinc-500 font-medium">{e.role}</p>
                    </div>
                    <span className="text-sm font-mono text-green-500">{e.salary}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Category Performance">
              <div className="h-[200px]">
                <Bar
                  data={chartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                      x: { ticks: { color: "#71717a", font: { size: 10 } }, grid: { display: false } },
                      y: { ticks: { color: "#71717a", font: { size: 10 } }, grid: { color: "#27272a" } },
                    },
                  }}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}