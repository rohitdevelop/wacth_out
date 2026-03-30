import { Calendar, CreditCard, MapPin, X } from "lucide-react";
import React from "react";
type OrderStatus = "processing" | "shipped" | "delivered" | "cancelled";
type PaymentStatus = "pending" | "paid" | "failed";
type PaymentMethod = "COD" | "CARD" | "UPI";

interface OrderItem {
  product: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface Order {
  _id: string;
  user: { name: string; email: string };
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

type OrderEditProps = {
  order: Order;
  setIsOpen: (isOpen: boolean) => void;
};

const OrderEdit = ({ order, setIsOpen }: OrderEditProps) => {
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
   <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm ">

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-neutral-800 rounded-2xl shadow-xl">

        {/* Top Bar */}
        <div className="p-6 border-b border-zinc-900 flex justify-between items-center bg-zinc-900/30">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              Order Details
            </h2>
            <p className="text-xs text-zinc-500 font-mono mt-1">
              UID: {order._id}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-xl transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-8">
          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest flex items-center gap-2">
                <MapPin size={12} /> Shipping Address
              </p>
              <div className="text-sm text-zinc-300 leading-relaxed">
                {order.shippingAddress.street},<br />
                {order.shippingAddress.city}, {order.shippingAddress.state}
                <br />
                {order.shippingAddress.country} -{" "}
                {order.shippingAddress.zipCode}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest flex items-center gap-2">
                <CreditCard size={12} /> Billing
              </p>
              <p className="text-sm text-zinc-300">
                {order.paymentMethod} Payment
              </p>
              <p
                className={`text-xs font-medium ${getStatusStyles(order.paymentStatus)} w-fit px-2 py-0.5 rounded`}
              >
                {order.paymentStatus.toUpperCase()}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest flex items-center gap-2">
                <Calendar size={12} /> Delivery Status
              </p>
              <p className="text-sm text-zinc-300">
                {order.isDelivered ? "Reached Destination" : "In Transit"}
              </p>
              {order.deliveredAt && (
                <p className="text-[10px] text-zinc-500">
                  Delivered: {new Date(order.deliveredAt).toLocaleString()}
                </p>
              )}
            </div>
          </div>

          {/* Product List */}
          <div className="border border-zinc-900 rounded-2xl bg-zinc-900/20 overflow-hidden">
            <div className="px-4 py-3 bg-zinc-900/50 border-b border-zinc-900 text-[10px] font-bold uppercase text-zinc-500">
              Line Items ({order.items.length})
            </div>
            <div className="divide-y divide-zinc-900">
              {order.items.map((item, i) => (
                <div key={i} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      className="w-12 h-12 rounded-xl object-cover bg-zinc-800"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {item.name}
                      </p>
                      <p className="text-xs text-zinc-500">
                        Qty: {item.quantity} × ₹{item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-mono text-[#00ff00]">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-zinc-900/50 flex justify-between items-center">
              <span className="text-sm font-bold text-white">Grand Total</span>
              <span className="text-xl font-bold text-[#00ff00]">
                ₹{order.totalPrice.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-6 bg-zinc-900/50 border-t border-zinc-900 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-500">Change Status:</span>
            <select className="bg-zinc-950 border border-zinc-800 text-xs rounded-lg px-3 py-2 outline-none focus:border-[#00ff00]">
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
          </div>
          <button className="w-full sm:w-auto px-8 py-3 bg-[#00ff00] text-black font-bold rounded-xl text-sm hover:scale-105 active:scale-95 transition-transform shadow-[0_0_20px_rgba(0,255,0,0.2)]">
            Update Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderEdit;
