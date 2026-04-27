"use client";

import React, { useEffect } from "react";
import { useProduct } from "../../../hooks/useProduct";
import ProductCards from "../Ui/ProductCards";
const ProductsShow = ({ view }: { view: "grid" | "list" }) => {
  const { allProducts, AllProducts, loading } = useProduct();

  useEffect(() => {
    AllProducts();
  }, []);

  if (loading) {
    return <p className="text-white p-6">Loading products...</p>;
  }

  if (!allProducts?.length) {
    return <p className="text-neutral-500 p-6">No products found</p>;
  }

  return (
    <main className="flex-1 p-4 md:p-6">
      <h1 className="text-2xl mb-6 text-white">Products</h1>

      <div
        className={`grid gap-6 ${
          view === "grid"
            ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            : "grid-cols-1"
        }`}
      >
        {allProducts.map((item) => (
  <ProductCards key={item._id} item={item} view={view} />
))}
      </div>
    </main>
  );
};

export default ProductsShow;