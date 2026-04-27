import React, { useEffect } from "react";
import { useProduct } from "../../../../../../hooks/useProduct";
import { Pencil, Trash2, Eye } from "lucide-react";

const AllProductsTable = ({}) => {
  const { allProducts, AllProducts, loading } = useProduct();

  useEffect(() => {
    AllProducts();
  }, []);

  if (loading) {
    return <p className="text-white p-5">Loading...</p>;
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-neutral-700 bg-neutral-900/20 backdrop-blur-md">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-neutral-800/40 border-b border-neutral-700">
              {[
                "Product",
                "Name",
                "Category",
                "Price",
                "Stock",
                "Status",
                "Actions",
              ].map((h) => (
                <th
                  key={h}
                  className="px-6 py-5 text-[11px] font-black text-neutral-300 uppercase tracking-widest"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-neutral-800">
            {allProducts?.map((item) => (
              <tr
                key={item._id}
                className="group hover:bg-[#00ff00]/[0.02] transition-colors"
              >
                <td className="px-6 py-5">
                  <div className="w-14 h-14 rounded-xl overflow-hidden border border-neutral-700">
                    <img
                      src={item.productImage}
                      className="w-full h-full object-cover"
                      alt={item.name}
                    />
                  </div>
                </td>

                <td className="px-6 py-5">
                  <p className="text-sm font-bold text-white group-hover:text-[#00ff00] transition-colors">
                    {item.name}
                  </p>
                  <p className="text-[10px] text-neutral-500 font-mono mt-1">
                    ID: #{item._id?.slice(-5)}
                  </p>
                </td>

                <td className="px-6 py-5">
                  <span className="text-[10px] px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider bg-neutral-700 text-white">
                    {item.category}
                  </span>
                </td>

                <td className="px-6 py-5 text-sm font-mono font-bold text-neutral-200">
                  ₹{item.price}
                </td>

                <td className="px-6 py-5 text-sm font-semibold text-neutral-300">
                  {item.stock}{" "}
                  <span className="text-[10px] text-neutral-600 uppercase ml-1">
                    units
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${
                      item.isActive
                        ? "bg-green-500/5 text-green-400 border-green-500/20"
                        : "bg-red-500/5 text-red-400 border-red-500/20"
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        item.isActive ? "bg-green-400" : "bg-red-400"
                      }`}
                    />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {item.isActive ? "Active" : "Inactive"}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-5 flex gap-3">
                  <button className="p-2 rounded-lg border border-neutral-700 cursor-pointer hover:text-green-400 hover:border-green-400">
                    <Eye size={16} />
                  </button>

                  <button className="p-2 rounded-lg border border-neutral-700 cursor-pointer hover:text-blue-400 hover:border-blue-400">
                    <Pencil size={16} />
                  </button>

                  <button className="p-2 rounded-lg border border-neutral-700 cursor-pointer hover:text-red-400 hover:border-red-400">
                    <Trash2 size={16} />
                  </button>
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
