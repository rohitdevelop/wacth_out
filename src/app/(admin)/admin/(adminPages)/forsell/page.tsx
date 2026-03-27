"use client";

import React from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";

const listings = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    brand: "Rolex",
    model: "Submariner",
    price: "₹8,50,000",
    condition: "Excellent",
    seller: "Rohit Singh",
    phone: "+91 98765 43210",
    address: "Delhi, India",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
    brand: "Omega",
    model: "Speedmaster",
    price: "₹5,20,000",
    condition: "Good",
    seller: "Amit Kumar",
    phone: "+91 91234 56789",
    address: "Mumbai, India",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 ">

        {/* 🔥 Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-semibold">
            Seller <span className="text-[#00ff00]">Listings</span>
          </h1>
          <p className="text-neutral-400 text-sm mt-2">
            Watches submitted by users for selling approval
          </p>
        </div>

        {/* 🧱 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {listings.map((item) => (
            <div
              key={item.id}
              className="relative border border-neutral-800 rounded-xl overflow-hidden bg-white/5 backdrop-blur-md group hover:border-[#00ff00]/40 transition"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#00ff00]/5 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              {/* Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt="watch"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">

                {/* Watch Info */}
                <div>
                  <h2 className="text-lg font-semibold">
                    {item.brand} {item.model}
                  </h2>
                  <p className="text-[#00ff00] text-sm">{item.price}</p>
                </div>

                <p className="text-xs text-neutral-400">
                  Condition: {item.condition}
                </p>

                {/* Divider */}
                <div className="h-px bg-neutral-800" />

                {/* Seller Info */}
                <div className="text-sm text-neutral-300 space-y-1">
                  <p><span className="text-neutral-500">Seller:</span> {item.seller}</p>
                  <p><span className="text-neutral-500">Phone:</span> {item.phone}</p>
                  <p><span className="text-neutral-500">Address:</span> {item.address}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-3">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition text-sm rounded-md">
                    <Check size={16} />
                    Approve
                  </button>

                  <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-red-500 text-red-400 hover:bg-red-500 hover:text-black transition text-sm rounded-md">
                    <X size={16} />
                    Reject
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Empty State */}
        {listings.length === 0 && (
          <div className="text-center mt-10 text-neutral-400">
            No listings found
          </div>
        )}

      </div>
    </div>
  );
};

export default Page;