"use client";

import React from "react";
import { X } from "lucide-react";

const ProductEyePop = ({ product, setIsOpen }: { product: any; setIsOpen: (isOpen: boolean) => void }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      {/* Modal */}
      <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 w-full max-w-md relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white"
        >
          <X size={18} />
        </button>

        <h2 className="text-xl font-bold text-white mb-4">Product Details</h2>
        <div className="space-y-3">
          <div className="w-full h-48 rounded-xl overflow-hidden mb-4 border border-neutral-700">
            <img
              src={product.productImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <p>
            <span className="font-semibold">Name:</span> {product.name}
          </p>
          <p>
            <span className="font-semibold">Price:</span> {product.price}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {product.category}
          </p>
          <p>
            <span className="font-semibold">Stock:</span> {product.stock}
          </p>
          <p>
            <span className="font-semibold">Status:</span> {product.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductEyePop;
