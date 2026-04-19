"use client";

import { useContact } from "hooks/useContact";
import React, { useEffect } from "react";

const ContactMessages = () => {
  const { getAllMessages, allmessage, loading } = useContact();

  useEffect(() => {
    getAllMessages(); // ✅ only call API
  }, []);

  return (
    <div className="bg-zinc-900/40 border border-neutral-800 rounded-2xl p-6">
      <h2 className="text-lg mb-6 text-green-400 text-center">
        All Messages of Users
      </h2>

      <div className="space-y-4">
        {loading ? (
          <p className="text-neutral-500 text-sm text-center">
            Loading...
          </p>
        ) : allmessage.length === 0 ? (
          <p className="text-neutral-500 text-sm text-center">
            No messages found
          </p>
        ) : (
          allmessage.map((msg) => (
            <div
              key={msg._id}
              className="border border-neutral-800 rounded-xl p-4 bg-black/40"
            >
              <div className="flex justify-between">
                <p className="font-semibold">{msg.name}</p>
                <p className="text-xs text-neutral-500">
                  {new Date(msg.createdAt).toLocaleDateString()}
                </p>
              </div>

              <p className="text-sm text-neutral-400">{msg.email}</p>

              <p className="text-xs text-green-400 mt-1">
                Topic: {msg.topic}
              </p>

              <p className="text-sm mt-2">{msg.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContactMessages;