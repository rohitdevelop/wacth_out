import api from "../../lib/axios";
import { Product } from "../../types/product";
// Admin--------------------------------------------------------------

// add products...............................................
export const addProduct = async (data: FormData) => {
  const res = await api.post("/products/createproduct", data);
  return res.data;
};

// all products...............................................
export const getAllProducts = async () => {
  const res = await api.get("/products/allproducts");
  return res.data;
};

// delete products...............................................
export const deleteProduct = async (id: string) => {
  const res = await api.delete(`/products/deleteproducts/${id}`);
  return res.data;
};

//  edite products...............................................
 export const editProduct = async (id: string, data: Partial<Product>) => {
  const res = await api.patch(`/products/editproducts/${id}`, data);
  return res.data;
};