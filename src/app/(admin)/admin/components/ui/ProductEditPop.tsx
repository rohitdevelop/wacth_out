"use client";

import { X } from "lucide-react";
import React, { useState } from "react";
import { useProduct } from "../../../../../../hooks/useProduct";

const ProductEditPop = ({
  product,
  setIsOpen,
}: {
  product: any;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const { EditeProducts, loading } = useProduct();

  const [formData, setFormData] = useState({
    name: product?.name || "",
    description: product?.description || "",
    price: product?.price || "",
    stock: product?.stock || "",
    category: product?.category || "men",
    isActive: product?.isActive ?? true,
  });

  // ✅ Handle change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    const newValue =
      e.target instanceof HTMLInputElement && e.target.type === "checkbox"
        ? e.target.checked
        : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  // ✅ Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await EditeProducts(product._id, formData);
      setIsOpen(false);
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm ">
      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-neutral-800 rounded-2xl shadow-xl">
        {/* Close */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition"
        >
          <X size={18} />
        </button>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            Edit <span className="text-[#00ff00]">Product</span>
          </h2>

          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00]"
            required
          />

          {/* Description */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Product Description"
            rows={3}
            className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00]"
          />

          {/* Price + Stock */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00]"
              required
            />

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Stock"
              className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00]"
            />
          </div>

          {/* Category */}
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00]"
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
              checked={formData.isActive}
              onChange={handleChange}
              className="accent-[#00ff00] w-4 h-4"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#00ff00] text-black font-semibold hover:opacity-90 transition"
            >
              {loading ? "Updating..." : "Update Product"}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 border border-neutral-600 hover:bg-white/5 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductEditPop;
