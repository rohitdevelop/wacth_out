"use client";

import React, { createContext, useState, ReactNode } from "react";
import { Product } from "types/product";
import { addProduct, getAllProducts, deleteProduct, editProduct } from "../api/products/product.api";
import { toast } from "react-toastify";
 
interface ProductContextType {
  addNewProduct: (data: FormData) => Promise<any>;
  loading: boolean;
  allProducts: Product[];
  AllProducts: () => Promise<void>;
  product: Product | null;
  DeleteProducts: (id: string) => Promise<void>;
  EditeProducts: (id: string, data: Partial<Product>) => Promise<void>;
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
  const addNewProduct = async (data: FormData) => {
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
      console.log(res.ourproducts);
      
      setAllProducts(res.ourproducts);
    } catch (err: any) {
      console.error("Error fetching products:", err);
        toast.error( err?.response?.data?.message || "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  const DeleteProducts = async (id: string) =>{
      await deleteProduct(id);
       toast.success("Product deleted successfully ");
       AllProducts();

  }

  const EditeProducts =  async (id: string, data: Partial<Product>) =>{
    await editProduct(id, data);
     toast.success("Product edite successfully ");
     AllProducts();
  }

  return (
    <ProductContext.Provider
      value={{ addNewProduct, loading, allProducts, AllProducts, product, DeleteProducts, EditeProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
}
