"use client";
import React from "react";
import { Trash2, Plus, Minus } from "lucide-react";

const Page = () => {
  const cartItems = [
    {
      id: 1,
      name: "Rolex Submariner",
      price: 250000,
      qty: 1,
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 2,
      name: "Omega Seamaster",
      price: 180000,
      qty: 2,
      img: "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb",
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      
      {/* Heading */}
      <h1 className="text-4xl font-light mb-10">
        Your <span className="text-[#00ff00] font-semibold">Cart</span>
      </h1>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
        
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 border border-neutral-800 p-5 bg-[#0a0a0a] hover:border-neutral-600 transition"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-28 h-28 object-cover"
              />

              {/* Details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-medium">{item.name}</h2>
                  <p className="text-neutral-400 text-sm">
                    ₹{item.price.toLocaleString()}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3 mt-3">
                  <button className="p-1 border border-neutral-700 hover:border-[#00ff00]">
                    <Minus size={14} />
                  </button>
                  <span className="text-sm">{item.qty}</span>
                  <button className="p-1 border border-neutral-700 hover:border-[#00ff00]">
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Delete */}
              <button className="text-neutral-500 hover:text-red-500">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="border border-neutral-800 bg-[#0a0a0a] p-6 h-fit">
          <h2 className="text-lg mb-5">Order Summary</h2>

          <div className="flex justify-between text-neutral-400 mb-2">
            <span>Subtotal</span>
            <span>₹{total.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-neutral-400 mb-4">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between text-white text-lg font-semibold mb-6">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>

          <button className="w-full bg-[#00ff00] text-black py-3 font-semibold hover:opacity-90 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;