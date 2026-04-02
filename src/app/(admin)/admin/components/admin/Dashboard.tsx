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
} from "chart.js";

import {
  Users,
  ShoppingCart,
  IndianRupee,
  Activity,
 
} from "lucide-react";

/* ================= TYPES ================= */
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface StatCard {
  title: string;
  value: string;
  delta: string;
  icon: React.ReactNode;
}

interface BarDataItem {
  value: number;
  label: string;
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

/* ================= DATA ================= */
const getGradient = (ctx, chartArea) => {
  const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);

  gradient.addColorStop(0, "#00ff00");   // top (light green)
  gradient.addColorStop(1, "black");   // bottom (dark green)

  return gradient;
};
const data = {
  labels: ['Men', 'Kids', 'Women', 'Sports'],
  datasets: [
    {
      label: 'Sales',
      data: [30, 45, 60, 40],
      backgroundColor: (context) => {
        const { chart } = context;
        const { ctx, chartArea } = chart;

        if (!chartArea) return "#22c55e"; // fallback

        return getGradient(ctx, chartArea);
      },
      borderRadius: 8,
    },
  ],
};
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const STATS: StatCard[] = [
  { title: "Users", value: "1,240", delta: "+4.2%", icon: <Users size={14} /> },
  {
    title: "Orders",
    value: "320",
    delta: "+11.5%",
    icon: <ShoppingCart size={14} />,
  },
  {
    title: "Revenue",
    value: "₹8.4L",
    delta: "+18.3%",
    icon: <IndianRupee size={14} />,
  },
  {
    title: "Activity",
    value: "89%",
    delta: "+2.1%",
    icon: <Activity size={14} />,
  },
];

 
const EMPLOYEES: Employee[] = [
  {
    name: "Aman",
    role: "Sales",
    salary: "₹20k",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    initials: "AG",
  },
  {
    name: "Priya",
    role: "Manager",
    salary: "₹28k",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    initials: "PS",
  },
  {
    name: "Rahul",
    role: "Dev",
    salary: "₹35k",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    initials: "RV",
  },
];

const PRODUCTS: Product[] = [
  { rank: "01", name: "Rolex", revenue: "₹2.1L", pct: 92 },
  { rank: "02", name: "Omega", revenue: "₹1.6L", pct: 74 },
];

const SELLERS: Seller[] = [
  { initials: "AG", name: "Aman", units: "148", isTop: true },
  { initials: "PS", name: "Priya", units: "122", isTop: false },
];

const ACTIVITY_ITEMS: ActivityItem[] = [
  { text: "New User", badge: "+1", variant: "green" },
  { text: "Order", badge: "+3", variant: "green" },
  { text: "Server Load", badge: "Medium", variant: "amber" },
];

/* ================= COMPONENTS ================= */

function CustomBar({ item }: { item: BarDataItem }) {
  return (
    <div className="flex flex-1 flex-col items-center ">
      <div className="w-full flex items-end h-40">
        <div
          className="w-full rounded-t bg-gradient-to-t from-green-500/70 to-transparent hover:from-green-400 transition-all"
          style={{ height: `${item.value}%` }}
        />
      </div>
      <span className="text-xs text-neutral-500 mt-1">{item.label}</span>
    </div>
  );
}

function Card({ title, children }: any) {
  return (
    <div className="bg-zinc-900 border border-neutral-800 rounded-xl p-5 hover:border-green-500/30 transition">
      <h3 className="text-sm text-neutral-400 mb-4">{title}</h3>
      {children}
    </div>
  );
}

/* ================= MAIN ================= */

export default function AdminDashboard() {
  const [mounted, setMounted] = useState(false);
  const [value, setValue] = useState<Value>(new Date());
  useEffect(() => setMounted(true), []);
  const handleChange = (val: Value) => {
    setValue(val);
  };
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans pb-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              Admin <span className="text-green-400">Dashboard</span>
            </h1>
            <p className="text-neutral-500 mt-2 text-sm">
              Welcome back, here is what's happening today.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-zinc-900 border border-neutral-800 rounded-lg text-sm hover:bg-zinc-800 transition">
              Download Report
            </button>
          </div>
        </header>

        {/* STATS */}

        <div className="grid grid-cols-4 gap-6 flex-1 mb-5">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="group h-[120px] px-6 py-4 bg-zinc-950 border border-neutral-800 rounded-2xl hover:border-green-500/40 transition-all flex flex-col justify-between"
            >
              {/* TOP */}
              <div className="flex justify-between items-start">
                <div className="p-2 bg-zinc-900 rounded-lg text-green-400 group-hover:bg-green-500 group-hover:text-black transition-colors">
                  {s.icon}
                </div>

                <span className="text-green-400 text-[10px] font-semibold px-2 py-1 bg-green-500/10 rounded-full">
                  {s.delta}
                </span>
              </div>

              {/* BOTTOM */}
              <div>
                <p className="text-neutral-400 text-[10px] uppercase tracking-wider">
                  {s.title}
                </p>
                <p className="text-xl font-bold mt-1">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* REVENUE + ACTIVITY */}
        <div className="grid lg:grid-cols-3 gap-5 mb-5">
          <div className="lg:col-span-2 border border-neutral-800 rounded-xl p-3">
            <div className="relative h-48 w-full mt-4">
              <svg
                viewBox="0 0 400 100"
                className="w-full h-full overflow-visible"
              >
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4ade80" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Area Fill */}
                <path
                  d="M0,80 Q50,20 100,50 T200,30 T300,60 T400,20 L400,100 L0,100 Z"
                  fill="url(#lineGradient)"
                />
                {/* Path Line */}
                <path
                  d="M0,80 Q50,20 100,50 T200,30 T300,60 T400,20"
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="2"
                />
              </svg>
              <div className="flex justify-between mt-2 text-[10px] text-neutral-500 uppercase tracking-widest">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>

          <Card title="Activity">
            {ACTIVITY_ITEMS.map((a, i) => (
              <div
                key={i}
                className="flex justify-between text-sm py-2 border-b border-neutral-800"
              >
                <span>{a.text}</span>
                <span
                  className={
                    a.variant === "green" ? "text-green-400" : "text-yellow-400"
                  }
                >
                  {a.badge}
                </span>
              </div>
            ))}
          </Card>
        </div>

        {/* EMPLOYEES + CATEGORY */}
        <div className="grid lg:grid-cols-3 gap-5">
          <Card title="Employees">
            {EMPLOYEES.map((e, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <img src={e.img} className="w-8 h-8 rounded-full" />
                <div className="flex-1">
                  <p className="text-sm">{e.name}</p>
                  <p className="text-xs text-neutral-500">{e.role}</p>
                </div>
                <span className="text-green-400 text-sm">{e.salary}</span>
              </div>
            ))}
          </Card>

          <div className="lg:col-span-2">
            <Card title="Category Sales">
              <div className="h-[250px] w-full">
                <Bar
                  data={data}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                    },
                    scales: {
                      x: {
                        ticks: { color: "#a1a1aa" },
                        grid: { display: false },
                      },
                      y: {
                        ticks: { color: "#a1a1aa" },
                        grid: { color: "#27272a" },
                      },
                    },
                  }}
                />
              </div>
            </Card>
          </div>
        </div>

        {/* PRODUCTS + SELLERS */}
        <div className="grid md:grid-cols-2 gap-5 mt-5">
          <Card title="Top Products">
            {PRODUCTS.map((p, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <span>{p.rank}</span>
                <span className="flex-1">{p.name}</span>
                <span>{p.revenue}</span>
              </div>
            ))}
          </Card>

          <Card title="Top Sellers">
            {SELLERS.map((s, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <span>{s.initials}</span>
                <span className="flex-1">{s.name}</span>
                <span>{s.units}</span>
                {s.isTop && <span className="text-green-400 text-xs">Top</span>}
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
