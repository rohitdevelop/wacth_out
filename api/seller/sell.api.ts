import api from "../../lib/axios";
import { Sellproducts } from "types/sell-products";

export const SellProducts = async (data: Sellproducts) => {
  const res = await api.post("sell/createSeller", data);
  return res.data;
};
export const GetAllSellProducts = async () => {
  const res = await api.get("sell/sellWatches");
  return res.data;
};
