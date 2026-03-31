"use client";

import { X } from "lucide-react";
import React from "react";

const AddProductForm = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm ">

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-neutral-800 rounded-2xl shadow-xl">

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition"
        >
          <X size={18} />
        </button>

        {/* Form */}
        <form className="p-6 sm:p-8 space-y-3">

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            Add <span className="text-[#00ff00]">Product</span>
          </h2>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00] transition"
            required
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Product Description"
            rows={3}
            className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00] transition"
            required
          />

          {/* Image URLs */}
          <input
            type="text"
            name="productImage"
            placeholder="Image URLs (comma separated)"
            className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00] transition"
            required
          />

          {/* Price + Stock */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00] transition"
              required
            />

            <input
              type="number"
              name="stock"
              placeholder="Stock"
              className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00] transition"
            />
          </div>

          {/* Category */}
          <select
            name="category"
            className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00] transition"
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kid">Kid</option>
            <option value="sports">Sports</option>
          </select>

          {/* Active Toggle */}
          <div className="flex items-center justify-between bg-black border border-neutral-800 px-4 py-3 rounded-lg">
            <span className="text-sm text-neutral-300">Active Product</span>
            <input
              type="checkbox"
              name="isActive"
              className="accent-[#00ff00] w-4 h-4"
              defaultChecked
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-semibold cursor-pointer hover:opacity-90 transition"
            >
              Add Product
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 border border-neutral-400  hover:bg-white/5 transition"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddProductForm;