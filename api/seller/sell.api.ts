import api from "../../lib/axios";


// products send for sell-----------------------------------------------  
export const SellProducts = async (data: FormData) => {
  const res = await api.post("sell/createSeller", data);
  return res.data;
};


// products get admin for sell-----------------------------------------------  
export const GetAllSellProducts = async () => {
  const res = await api.get("sell/sellWatches");
  return res.data;
};
