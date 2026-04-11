"use client";

import { createContext, ReactNode, useState } from "react";
import { SellProducts, GetAllSellProducts } from "../api/seller/sell.api";
import { Sellproducts } from "../types/sell-products";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// ✅ FIXED TYPE
interface SellContextType {
  CreateSell: (data: FormData) => Promise<Sellproducts>; // ✅ change here
  AllSell: () => Promise<Sellproducts[]>;
  sellProduct: Sellproducts | null;
  allproducts: Sellproducts[];
  loading: boolean;
}

export const SellContext = createContext<SellContextType | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

export const SellProvider = ({ children }: Props) => {
  const [sellProduct, setSellProduct] = useState<Sellproducts | null>(null);
  const [allproducts, setAllProducts] = useState<Sellproducts[]>([]);
  const [loading, setLoading] = useState(false);
const router = useRouter()
  //  CREATE PRODUCT
  const CreateSell = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await SellProducts(data);

      setSellProduct(res.seller);
      toast.success("Product listed successfully");
      router.push("/profile")
      return res.data;
    } catch (error: any) {
      const errorMsg =
        error?.response?.data?.message || "Something went wrong";

      toast.error(errorMsg);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //  GET ALL PRODUCTS
  const AllSell = async () => {
    setLoading(true);
    try {
      const res = await GetAllSellProducts();

      setAllProducts(res.data);

      return res.allWatches;
    } catch (error: any) {
      const errorMsg =
        error?.response?.data?.message || "Something went wrong";

      toast.error(errorMsg);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <SellContext.Provider
      value={{
        CreateSell,
        AllSell,
        sellProduct,
        allproducts,
        loading,
      }}
    >
      {children}
    </SellContext.Provider>
  );
};