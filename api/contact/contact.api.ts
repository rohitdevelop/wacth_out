import api from "../../lib/axios";
import { ContactMessage, CreateContactMessage } from "../../types/contact";

// submit query.................................
export const UserQuiry = async (data: CreateContactMessage) => {
  const res = await api.post("contact/createMessage", data);
  return res.data;
};


// all query for backend.................................
export const AllUserQuiry = async () => {
  const res = await api.get("contact/allMessages");
  return res.data;
};
