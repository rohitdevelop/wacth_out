"use client";

import React, { useState, useEffect } from "react";
import { Pencil, Save } from "lucide-react";
import { useAuth } from "hooks/useAuth";

const Page = () => {
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState<any>(null);

  const { getSingleUser } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getSingleUser();
      setUser(data);
    };
    fetchUser();
  }, []);

  const handleChange = (field: string, value: string) => {
    setUser((prev: any) => ({
      ...(prev || {}),
      [field]: value,
    }));
  };

  // ⛔ loading safe
  if (!user) {
    return (
      <div className="h-screen flex justify-center items-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">

      <div className="w-full max-w-3xl bg-white/5 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 md:p-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">

          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-[#00ff00]/10 flex items-center justify-center text-[#00ff00] text-2xl font-bold mb-3">
            {user?.name?.charAt(0)}
          </div>

          <h1 className="text-2xl font-semibold">{user?.name}</h1>
          <p className="text-neutral-400 text-sm">{user?.email}</p>

          <button
            onClick={() => setEdit(!edit)}
            className="mt-4 flex items-center gap-2 text-sm border border-neutral-700 px-4 py-2 rounded-md hover:border-[#00ff00] hover:text-[#00ff00]"
          >
            {edit ? <Save size={14} /> : <Pencil size={14} />}
            {edit ? "Save" : "Edit Profile"}
          </button>
        </div>

        {/* Personal Info */}
        <div className="mb-8">
          <h2 className="text-sm text-neutral-400 mb-3 uppercase">
            Personal Details
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              disabled={!edit}
              value={user?.name || ""}
              onChange={(e) => handleChange("name", e.target.value)}
              className="bg-black border border-neutral-800 p-3 rounded-md"
            />

            <input
              disabled={!edit}
              value={user?.age || ""}
              onChange={(e) => handleChange("age", e.target.value)}
              className="bg-black border border-neutral-800 p-3 rounded-md"
            />

            <input
              disabled={!edit}
              value={user?.gender || ""}
              onChange={(e) => handleChange("gender", e.target.value)}
              className="bg-black border border-neutral-800 p-3 rounded-md"
            />

            <input
              disabled
              value={user?.email || ""}
              className="bg-black border border-neutral-800 p-3 rounded-md text-neutral-500"
            />

          </div>
        </div>

        {/* Address */}
        <div className="mb-8">
          <h2 className="text-sm text-neutral-400 mb-3 uppercase">
            Address
          </h2>

          {user?.address?.length === 0 ? (
            <p className="text-neutral-500 text-sm">No address added</p>
          ) : (
            user.address.map((addr: any, index: number) => (
              <div
                key={index}
                className="mb-3 p-3 border border-neutral-800 rounded-md"
              >
                <p>{addr.street}</p>
                <p>{addr.city}, {addr.state}</p>
                <p>{addr.country} - {addr.zipCode}</p>
              </div>
            ))
          )}
        </div>

        {/* Meta Info */}
        <div>
          <h2 className="text-sm text-neutral-400 mb-3 uppercase">
            Account Info
          </h2>

          <div className="text-sm text-neutral-400 space-y-1">
            <p>Status: {user?.isActive ? "Active" : "Inactive"}</p>
            <p>Email Verified: {user?.isEmailVerified ? "Yes" : "No"}</p>
            <p>Role: {user?.role}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;