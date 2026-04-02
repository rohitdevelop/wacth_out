"use client";

import React, { useState } from "react";
import { Eye, CheckCircle, Clock, Trash, Pencil } from "lucide-react";
import OrderEdit from "../ui/OrderEdit";

// --- Types (Matching your Mongoose Schema) ---
type OrderStatus = "processing" | "shipped" | "delivered" | "cancelled";
type PaymentStatus = "pending" | "paid" | "failed";
type PaymentMethod = "COD" | "CARD" | "UPI";

interface OrderItem {
  product: string; // ObjectId
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface Order {
  _id: string;
  user: { name: string; email: string }; // Populated
  items: OrderItem[];
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  totalPrice: number;
  isDelivered: boolean;
  deliveredAt?: string;
  createdAt: string;
}

// --- Dummy Data ---
const DUMMY_ORDERS: Order[] = [
  {
    _id: "65f2a1b...",
    user: { name: "Rohit Singh", email: "rohit@example.com" },
    items: [
      {
        product: "p1",
        name: "iPhone 15 Pro",
        price: 125000,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=100",
      },
    ],
    shippingAddress: {
      street: "123 Tech Park",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      zipCode: "560001",
    },
    paymentMethod: "UPI",
    paymentStatus: "paid",
    orderStatus: "processing",
    totalPrice: 125000,
    isDelivered: false,
    createdAt: "2026-03-29T10:00:00Z",
  },
];

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>(DUMMY_ORDERS);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const getStatusStyles = (status: string) => {
    const styles: Record<string, string> = {
      delivered: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      shipped: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      processing: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      cancelled: "bg-red-500/10 text-red-400 border-red-500/20",
      paid: "bg-emerald-500/10 text-emerald-400",
      pending: "bg-zinc-500/10 text-zinc-400",
      failed: "bg-red-500/10 text-red-400",
    };
    return styles[status] || "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
  };

  return (
    <div className="min-h-screen   relative overflow-hidden font-sans pb-20  ">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">
              Manage <span className="text-[#00ff00]">Orders</span>
            </h1>
            <p className="text-neutral-400 mt-2 text-sm">
              Monitor sales performance and logistics
            </p>
          </div>
          <div className="flex gap-2">
            <div className="bg-zinc-900 border flex justify-center items-center border-neutral-700 px-4 py-2 rounded-lg text-sm">
              Total Revenue:{" "}
              <span className="text-[#00ff00] font-mono ml-2">
                ₹
                {orders
                  .reduce((acc, o) => acc + o.totalPrice, 0)
                  .toLocaleString()}
              </span>
            </div>
            <div className="bg-zinc-900 border border-neutral-700 px-4 py-2  flex justify-center items-center rounded-lg text-sm">
              Total Orders:{" "}
              <span className="text-[#00ff00] font-mono ml-2">
                ₹
                {orders
                  .reduce((acc, o) => acc + o.totalPrice, 0)
                  .toLocaleString()}
              </span>
            </div>
          </div>
        </header>

        {/* Orders Table */}
        <div className="bg-zinc-900/50 border border-neutral-700 rounded-2xl overflow-hidden backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-700 text-neutral-300 text-[11px] uppercase tracking-widest bg-zinc-900/80">
                  <th className="px-6 py-4 font-semibold">Order</th>
                  <th className="px-6 py-4 font-semibold">Customer</th>
                  <th className="px-6 py-4 font-semibold">Payment</th>
                  <th className="px-6 py-4 font-semibold">Logistics</th>
                  <th className="px-6 py-4 font-semibold">Total</th>
                  <th className="px-6 py-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {orders.map((order) => (
                  <tr
                    key={order._id}
                    className="hover:bg-white/[0.02] transition-colors group"
                  >
                    <td className="px-6 py-5">
                      <span className="font-mono text-xs text-zinc-400 group-hover:text-[#00ff00] transition-colors">
                        <img
                          src={order.items[0]?.image}
                          className="w-12 h-12 rounded-xl object-cover bg-zinc-800"
                        />
                      </span>
                      <p className="text-[10px] text-zinc-600 mt-1">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-sm font-medium text-zinc-200">
                        {order.user.name}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {order.user.email}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col gap-1 ">
                        <span className="text-[10px] font-bold text-zinc-400 tracking-tighter uppercase">
                          {order.paymentMethod}
                        </span>
                        <span
                          className={`w-fit px-2 py-0.5 rounded text-[10px] font-medium border ${getStatusStyles(order.paymentStatus)}`}
                        >
                          {order.paymentStatus}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={`flex items-center gap-2 w-fit px-2 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider ${getStatusStyles(order.orderStatus)}`}
                      >
                        {order.orderStatus === "delivered" ? (
                          <CheckCircle size={12} />
                        ) : (
                          <Clock size={12} />
                        )}
                        {order.orderStatus}
                      </span>
                    </td>
                    <td className="px-6 py-5 font-mono text-sm text-white">
                      ₹{order.totalPrice.toLocaleString()}
                    </td>
                    <td className="px-6 py-5 text-right flex justify-around items-center">
                      <button
                        onClick={() => {
                          setSelectedOrder(order); // ⭐ IMPORTANT
                          setIsOpen(true);
                        }}
                        className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-[#00ff00] transition-all"
                      >
                        <Pencil size={18} />
                      </button>
                      <Eye size={18} />
                      <Trash size={18} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isOpen && selectedOrder && (
        <OrderEdit order={selectedOrder} setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default Orders;
