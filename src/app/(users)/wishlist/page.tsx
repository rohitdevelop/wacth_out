"use client";
import React from "react";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

const Page = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Rolex Day-Date",
      price: 450000,
      img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
    },
    {
      id: 2,
      name: "Patek Philippe Nautilus",
      price: 1200000,
      img: "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      
      {/* Heading */}
      <h1 className="text-4xl font-light mb-10">
        Your <span className="text-[#00ff00] font-semibold">Wishlist</span>
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="border border-neutral-800 bg-[#0a0a0a] p-4 hover:border-neutral-600 transition group"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
              />

              {/* Heart Icon */}
              <button className="absolute top-3 right-3 text-[#00ff00]">
                <Heart size={18} fill="#00ff00" />
              </button>
            </div>

            {/* Details */}
            <div className="mt-4">
              <h2 className="text-lg">{item.name}</h2>
              <p className="text-neutral-400 text-sm mb-4">
                ₹{item.price.toLocaleString()}
              </p>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 border border-neutral-700 py-2 text-sm hover:border-[#00ff00] hover:text-[#00ff00] transition">
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>

                <button className="p-2 border border-neutral-700 hover:border-red-500 hover:text-red-500 transition">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Page;