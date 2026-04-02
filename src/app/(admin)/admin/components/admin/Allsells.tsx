"use client";

import React from "react";
import { Check, X, MapPin, Calendar } from "lucide-react";

const listings = [
  {
    id: 1,
    avtar: "https://randomuser.me/api/portraits/men/1.jpg",
    seller: "Rohit Singh",
    watchDetails: [
      {
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
        model: "Submariner",
        brand: "Rolex",
        price: 850000,
        condition: "excellent",
        description: "Original box and papers included. Mint condition.",
      },
    ],
    address: [{ city: "Gurgaon" }],
    status: "pending",
    createdAt: "2026-04-02",
  },
  {
    id: 2,
    avtar: "https://randomuser.me/api/portraits/men/1.jpg",
    seller: "Rohit Singh",
    watchDetails: [
      {
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
        model: "Submariner",
        brand: "Rolex",
        price: 850000,
        condition: "excellent",
        description: "Original box and papers included. Mint condition.",
      },
    ],
    address: [{ city: "Gurgaon" }],
    status: "pending",
    createdAt: "2026-04-02",
  },
  {
    id: 3,
    avtar: "https://randomuser.me/api/portraits/men/1.jpg",
    seller: "Rohit Singh",
    watchDetails: [
      {
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
        model: "Submariner",
        brand: "Rolex",
        price: 850000,
        condition: "excellent",
        description: "Original box and papers included. Mint condition.",
      },
    ],
    address: [{ city: "Gurgaon" }],
    status: "pending",
    createdAt: "2026-04-02",
  },
];

const Allsells = () => {
  return (
     <div className="min-h-screen   relative overflow-hidden font-sans pb-20  ">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">
              Manage <span className="text-[#00ff00]">Sells</span>
            </h1>
            <p className="text-neutral-400 mt-2 text-sm">
               Review and approve user submitted watches
            </p>
          </div>
          <div className="flex gap-2">
            <div className="bg-zinc-900 border flex justify-center items-center border-neutral-700 px-4 py-2 rounded-lg text-sm">
              Total Revenue:{" "}
              <span className="text-[#00ff00] font-mono ml-2">
                ₹52
              </span>
            </div>
            <div className="bg-zinc-900 border border-neutral-700 px-4 py-2  flex justify-center items-center rounded-lg text-sm">
              Total Orders:{" "}
              <span className="text-[#00ff00] font-mono ml-2">
                ₹20
              </span>
            </div>
          </div>
        </header>


        {/* 🧱 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {listings.map((item) =>
            item.watchDetails.map((watch, index) => (

              <div
                key={index}
                className="group bg-zinc-900/40 border border-neutral-800 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all duration-500"
              >

                {/* 🖼 IMAGE */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={watch.image}
                    alt="watch"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Status */}
                  <span className="absolute top-3 right-3 text-xs px-3 py-1 bg-black/60 border border-green-500/20 text-green-400 rounded-full">
                    {item.status}
                  </span>
                </div>

                {/* 📦 CONTENT */}
                <div className="p-5 flex flex-col gap-3">

                  {/* Top */}
                  <div>
                    <div className="flex justify-between">
                      <p className="text-green-400 text-xs uppercase">
                        {watch.brand}
                      </p>
                      <p className="text-xs text-neutral-500 flex items-center font-mono gap-1">
                        <Calendar size={12} />
                        {item.createdAt}
                      </p>
                    </div>

                    <h2 className="text-lg font-semibold mt-1">
                      {watch.model}
                    </h2>

                    <p className="text-xl mt-2 font-light font-mono">
                      ₹{watch.price.toLocaleString()}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="text-sm text-neutral-400">
                    Condition:{" "}
                    <span className="capitalize">{watch.condition}</span>
                  </div>

                  <p className="text-xs text-neutral-500 italic">
                    "{watch.description}"
                  </p>

                  {/* 👤 Seller */}
                  <div className="flex items-center justify-between mt-4 border-t border-neutral-800 pt-4">

                    <div className="flex items-center gap-3">
                      <img
                        src={item.avtar}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm">{item.seller}</p>
                        <p className="text-xs text-neutral-500 flex items-center gap-1">
                          <MapPin size={12} />
                          {item.address[0].city}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-black transition">
                        <Check size={16} />
                      </button>
                      <button className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-black transition">
                        <X size={16} />
                      </button>
                    </div>

                  </div>
                </div>

              </div>

            ))
          )}

        </div>
      </div>
    </div>
  );
};

export default Allsells;