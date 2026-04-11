import api from "../../lib/axios";
import { ContactMessage } from "../../types/contact";

// submit query.................................
export const UserQuiry = async (data: ContactMessage) => {
  const res = await api.post("contact/createMessage", data);
  return res.data;
};


// all query for backend.................................
export const AllUserQuiry = async () => {
  const res = await api.get("contact/createMessage");
  return res.data;
};
