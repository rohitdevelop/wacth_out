"use client";

import React, { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

const ProductCards = ({ item, view }: { item: any; view: "grid" | "list" }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className={`bg-neutral-900 border border-neutral-700  overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
        view === "list" ? "flex gap-5 p-4 items-center" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`overflow-hidden ${
          view === "list" ? "w-40 h-32" : "h-48 w-full"
        }`}
      >
        <img
          src={item.productImage[0]}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className={`${view === "list" ? "flex-1" : "p-4"} space-y-2`}>
        <h2 className="text-lg font-bold text-white">{item.name}</h2>

        <p className="text-xs text-neutral-400 uppercase">
          {item.description}
        </p>

        <p className="text-green-400 font-bold font-mono">
          ₹{item.price}
        </p>

        <p className="text-sm text-neutral-400">
          Stock: {item.stock}
        </p>
 

        {/* Actions */}
        <div className="flex items-center justify-between pt-3">
          <button
            className="flex items-center gap-2 px-3 py-2 text-xs font-bold  bg-[#00ff00] text-black hover:scale-105 transition-all"
            onClick={() => console.log("Add to cart", item)}
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>

          <button
            onClick={() => setLiked(!liked)}
            className={`p-2 border transition-all ${
              liked
                ? "text-pink-500 border-pink-500"
                : "border-neutral-700 hover:border-pink-500 hover:text-pink-400"
            }`}
          >
            <Heart size={18} fill={liked ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;