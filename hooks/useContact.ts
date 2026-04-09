import { useContext } from "react";
import { ContactContext } from "../context/contact.context";

export function useContact() {
  const context = useContext(ContactContext);

  if (!context) {
    throw new Error("useContact must be used inside AuthProvider");
  }

  return context;
}