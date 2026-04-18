"use client";

import React, { useEffect } from "react";
import { Check, X, MapPin, Calendar } from "lucide-react";
import { useSell } from "hooks/useSell";

const Allsells = () => {
  const { allproducts, AllSell, loading } = useSell();

  // 🔥 Fetch data once
  useEffect(() => {
    AllSell();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-white">
        Loading...
      </div>
    );
  }

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
              <span className="text-[#00ff00] font-mono ml-2">₹52</span>
            </div>
            <div className="bg-zinc-900 border border-neutral-700 px-4 py-2  flex justify-center items-center rounded-lg text-sm">
              Total Orders:{" "}
              <span className="text-[#00ff00] font-mono ml-2">₹20</span>
            </div>
          </div>
        </header>
        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allproducts?.map((item: any) =>
            item.watchDetails?.map((watch: any) => (
              <div
                key={watch._id}
                className="bg-zinc-900/40 border border-neutral-800 rounded-2xl overflow-hidden hover:border-green-500/40 transition"
              >
                {/* Image */}
                <div className="h-56">
                  <img
                    src={watch.image}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  {/* Top */}
                  <div>
                    <div className="flex justify-between">
                      <p className="text-green-400 text-xs uppercase">
                        {watch.brand}
                      </p>

                      <p className="text-xs text-neutral-500 flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(item.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    <h2 className="text-lg font-semibold">{watch.model}</h2>

                    <p className="text-xl font-mono mt-2">
                      ₹{watch.price.toLocaleString()}
                    </p>
                  </div>

                  {/* Details */}
                  <p className="text-sm text-neutral-400">
                    Condition: {watch.condition}
                  </p>

                  {watch.description && (
                    <p className="text-xs text-neutral-500 italic">
                      "{watch.description}"
                    </p>
                  )}

                  {/* Seller */}
                  <div className="flex justify-between items-center pt-4 border-t border-neutral-800">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="w-9 h-9 rounded-full bg-[#00ff00]/10 flex items-center justify-center text-[#00ff00]">
                        {item.name?.charAt(0)}
                      </div>

                      <div>
                        <p className="text-sm">{item.name}</p>
                        <p className="text-xs text-neutral-500 flex items-center gap-1">
                          <MapPin size={12} />
                          {item.address?.[0]?.city || "N/A"}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-black">
                        <Check size={16} />
                      </button>

                      <button className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-black">
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
};

export default Allsells;
