"use client";

import React, { createContext, useState, ReactNode } from "react";
import { UserQuiry, AllUserQuiry } from "../api/contact/contact.api";
import { ContactMessage } from "../types/contact";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface ContactContextType {
  quirycreated: (data: ContactMessage) => Promise<void>;
  getAllMessages: () => Promise<void>;
  loading: boolean;
  message: ContactMessage | null;
  allmessage: ContactMessage[]; 
}

export const ContactContext = createContext<ContactContextType | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

export function ContactProvider({ children }: Props) {
  const [message, setMessage] = useState<ContactMessage | null>(null);
  const [allmessage, setAllMessage] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

   const quirycreated = async (data: ContactMessage) => {
    setLoading(true);
    try {
      const res = await UserQuiry(data);

      setMessage(res.data);
      toast.success("Message sent successfully ✅");

      router.push("/"); // optional
    } catch (err: any) {
      const errorMsg =
        err?.response?.data?.message || "Something went wrong";

      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

   const getAllMessages = async () => {
    setLoading(true);
    try {
      const res = await AllUserQuiry();

      setAllMessage(res.data);
     } catch (err: any) {
      const errorMsg =
        err?.response?.data?.message || "Failed to fetch messages";

      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        quirycreated,
        getAllMessages,
        loading,
        message,
        allmessage, 
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}