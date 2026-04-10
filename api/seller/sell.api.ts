import api from "../../lib/axios";
 
export const SellProducts = async (data: FormData) => {
  const res = await api.post("sell/createSeller", data);
  return res.data;
};
export const GetAllSellProducts = async () => {
  const res = await api.get("sell/sellWatches");
  return res.data;
};
