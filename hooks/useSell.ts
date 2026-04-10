import { useContext } from "react";
import { SellContext } from "../context/sell.context";

export function useSell() {
  const context = useContext(SellContext);

  if (!context) {
    throw new Error("useSell must be used inside SellProvider");
  }

  return context;
}