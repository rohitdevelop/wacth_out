// "use client";

// import { X } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { useProduct } from "hooks/useProduct";

// const AddProductForm = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     productImage: "",
//     price: 0,
//     stock: 0,
//     category: "men",
//     isActive: true,
//   });

//   const { addNewProduct } = useProduct();

//   useEffect(()=>{
//    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//       e.preventDefault();
//       try {
//          const res = await addNewProduct(formData);
//          console.log(res.product);
         
//          if(res.success){
//           setIsOpen(false);
//          }

//       } catch (error) {
//         console.error("Error adding product:", error);

//       }

//     };

//     handleSubmit();
//   },[])
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm ">

//       {/* Modal */}
//       <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-neutral-800 rounded-2xl shadow-xl">

//         {/* Close Button */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-4 right-4 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition"
//         >
//           <X size={18} />
//         </button>

//         {/* Form */}
//         <form className="p-6 sm:p-8 space-y-3">

//           {/* Heading */}
//           <h2 className="text-2xl sm:text-3xl font-semibold text-center">
//             Add <span className="text-[#00ff00]">Product</span>
//           </h2>

//           {/* Name */}
//           <input
//             type="text"
//             name="name"
//             placeholder="Product Name"
//             className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00] transition"
//             required
//           />

//           {/* Description */}
//           <textarea
//             name="description"
//             placeholder="Product Description"
//             rows={3}
//             className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00] transition"
//             required
//           />

//           {/* Image URLs */}
//           <input
//             type="text"
//             name="productImage"
//             placeholder="Image URLs (comma separated)"
//             className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00] transition"
//             required
//           />

//           {/* Price + Stock */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <input
//               type="number"
//               name="price"
//               placeholder="Price"
//               className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00] transition"
//               required
//             />

//             <input
//               type="number"
//               name="stock"
//               placeholder="Stock"
//               className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00] transition"
//             />
//           </div>

//           {/* Category */}
//           <select
//             name="category"
//             className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00] transition"
//           >
//             <option value="men">Men</option>
//             <option value="women">Women</option>
//             <option value="kid">Kid</option>
//             <option value="sports">Sports</option>
//           </select>

//           {/* Active Toggle */}
//           <div className="flex items-center justify-between bg-black border border-neutral-800 px-4 py-3 rounded-lg">
//             <span className="text-sm text-neutral-300">Active Product</span>
//             <input
//               type="checkbox"
//               name="isActive"
//               className="accent-[#00ff00] w-4 h-4"
//               defaultChecked
//             />
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-3 pt-2">
//             <button
//               type="submit"
//               className="w-full py-3 bg-white text-black font-semibold cursor-pointer hover:opacity-90 transition"
//             >
//               Add Product
//             </button>

//             <button
//               type="button"
//               onClick={() => setIsOpen(false)}
//               className="w-full py-3 border border-neutral-400  hover:bg-white/5 transition"
//             >
//               Cancel
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProductForm;

"use client";

import { X } from "lucide-react";
import React, { useState } from "react";
import { useProduct } from "hooks/useProduct";

const AddProductForm = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => {

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "men",
    isActive: true,
    productImage: [] as File[],
  });

  const { addNewProduct } = useProduct();

  // ✅ Handle input change (UI same)
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ✅ File change (IMPORTANT)
  const handleFileChange = (e: any) => {
    setFormData({
      ...formData,
      productImage: Array.from(e.target.files),
    });
  };

  // ✅ Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("stock", formData.stock);
      data.append("category", formData.category);
      data.append("isActive", String(formData.isActive));

      formData.productImage.forEach((file) => {
        data.append("productImage", file);
      });

      await addNewProduct(data);

      setIsOpen(false);
     
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

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
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-3">

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            Add <span className="text-[#00ff00]">Product</span>
          </h2>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            onChange={handleChange}
            className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00] transition"
            required
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Product Description"
            rows={3}
            onChange={handleChange}
            className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00] transition"
            required
          />

          {/* 🔥 IMAGE INPUT (UI SAME LOOK, just type change) */}
          <input
            type="file"
            name="productImage"
            multiple
            onChange={handleFileChange}
            className="w-full p-3 bg-black border border-neutral-700 rounded-lg text-white file:bg-[#00ff00] file:text-black file:border-none file:px-3 file:py-1 file:rounded file:cursor-pointer"
            required
          />

          {/* Price + Stock */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="number"
              name="price"
              placeholder="Price"
              onChange={handleChange}
              className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00] transition"
              required
            />

            <input
              type="number"
              name="stock"
              placeholder="Stock"
              onChange={handleChange}
              className="w-full p-3 bg-black border border-neutral-700 rounded-lg focus:outline-none focus:border-[#00ff00] focus:ring-1 focus:ring-[#00ff00] transition"
            />
          </div>

          {/* Category */}
          <select
            name="category"
            onChange={handleChange}
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
              onChange={handleChange}
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