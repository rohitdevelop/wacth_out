import React, { useEffect } from "react";
import { useProduct } from "../../../../../../hooks/useProduct";
import { Pencil, Trash2, Eye } from "lucide-react";
 
const AllProductsTable = ({onEdit, onView }) => {
   

  const { allProducts, AllProducts, loading, DeleteProducts, } =
    useProduct();

  useEffect(() => {
    AllProducts();
  }, []);

  const deletebtn = (id) => {
    DeleteProducts(id);
  };

  if (loading) {
    return <p className="text-white p-5">Loading...</p>;
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-neutral-700 bg-neutral-900/20 backdrop-blur-md">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          {/* HEADER */}
          <thead>
            <tr className="bg-neutral-800/40 border-b border-neutral-700">
              {["Product", "Name", "Category", "Price", "Actions"].map((h) => (
                <th
                  key={h}
                  className="px-6 py-4 text-xs font-semibold text-neutral-400 uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y divide-neutral-800">
            {allProducts?.map((item) => (
              <tr
                key={item._id}
                className="hover:bg-[#00ff00]/[0.03] transition-all"
              >
                {/* IMAGE */}
                <td className="px-6 py-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-neutral-700">
                    <img
                      src={item.productImage}
                      className="w-full h-full object-cover"
                      alt={item.name}
                    />
                  </div>
                </td>

                {/* NAME */}
                <td className="px-6 py-4">
                  <p className="text-sm font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-neutral-500 font-mono mt-1">
                    ID: #{item._id?.slice(-5)}
                  </p>
                </td>

                {/* CATEGORY */}
                <td className="px-6 py-4">
                  <span className="text-xs px-3 py-1 rounded-md font-medium bg-neutral-800 text-neutral-300 border border-neutral-700">
                    {item.category}
                  </span>
                </td>

                {/* PRICE */}
                <td className="px-6 py-4 text-sm font-mono font-semibold text-neutral-200">
                  ₹{item.price}
                </td>

                {/* ACTIONS */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button onClick={() => onView(item)} className="w-9 h-9 flex items-center justify-center rounded-md border border-neutral-700 hover:border-green-400 hover:text-green-400 transition">
                      <Eye size={16} />
                    </button>

                    <button
                      onClick={() => {onEdit(item)}}
                      className="w-9 h-9 flex items-center justify-center rounded-md border border-neutral-700 hover:border-blue-400 hover:text-blue-400 transition"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() => deletebtn(item._id)}
                      className="w-9 h-9 flex items-center justify-center rounded-md border border-neutral-700 hover:border-red-400 hover:text-red-400 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    </div>
  );
};

export default AllProductsTable;
