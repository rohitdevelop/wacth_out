import api from "../../lib/axios";
import { ContactMessage } from "../../types/contact";

export const UserQuiry = async (data: ContactMessage) => {
  const res = await api.post("contact/createMessage", data);
  return res.data;
};


export const AllUserQuiry = async () => {
  const res = await api.get("contact/createMessage");
  return res.data;
};
