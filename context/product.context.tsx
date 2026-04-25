"use client";

import React, { createContext, useState, ReactNode } from "react";
import { Product } from "types/product";
import { addProduct, getAllProducts } from "../api/products/product.api";
import { toast } from "react-toastify";
import { tr } from "framer-motion/client";

interface ProductContextType {
  addNewProduct: (data: Product) => Promise<any>;
  loading: boolean;
  allProducts: Product[];
  AllProducts: () => Promise<void>;
  product: Product | null;
}

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined,
);

interface Props {
  children: ReactNode;
}

export function ProductProvider({ children }: Props) {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  // added new product
  const addNewProduct = async (data: Product) => {
    setLoading(true);
    try {
      const res = await addProduct(data);
      console.log(res);

      setProduct(res.data);
      toast.success("Product added successfully ");

      return res.data;
    } catch (err: any) {
      console.error("Error adding product:", err);
      toast.error( err?.response?.data?.message || "Failed to add product");
      
    } finally {
      setLoading(false);
    }
  };

  // get all products
  const AllProducts = async () => {
    setLoading(true);
    try {
      const res = await getAllProducts();
      console.log(res.data);
      
      setAllProducts(res.data);
    } catch (err: any) {
      console.error("Error fetching products:", err);
        toast.error( err?.response?.data?.message || "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductContext.Provider
      value={{ addNewProduct, loading, allProducts, AllProducts, product }}
    >
      {children}
    </ProductContext.Provider>
  );
}
