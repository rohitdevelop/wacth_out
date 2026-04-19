"use client";

import React, { useState, useEffect } from "react";
import { Pencil, Save, Plus, X, Trash } from "lucide-react";
import { useAuth } from "hooks/useAuth";

const Page = () => {
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState<any>(null);

  const { getSingleUser, updateProfile, deleteAddress } = useAuth();

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

  const handleSave = async () => {
    try {
      await updateProfile(user);
      setEdit(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddAddress = () => {
    setUser((prev: any) => ({
      ...prev,
      address: [
        ...(prev.address || []),
        { street: "", city: "", state: "", country: "India", zipCode: "" },
      ],
    }));
  };

  const handleAddressChange = (index: number, field: string, value: string) => {
    const updatedAddress = [...user.address];
    updatedAddress[index][field] = value;

    setUser((prev: any) => ({
      ...prev,
      address: updatedAddress,
    }));
  };

  // DELETE ADDRESS
const handleDeleteAddress = async (addressId: string) => {
  try {
    await deleteAddress(addressId);

    setUser((prev: any) => ({
      ...prev,
      address: prev.address.filter(
        (addr: any) => addr._id !== addressId
      ),
    }));

  } catch (error) {
    console.log(error);
  }
};

  if (!user) {
    return (
      <div className="h-screen flex justify-center items-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24 bg-black text-white">

      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 shadow-lg">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-24 h-24 rounded-full bg-[#00ff00]/10 flex items-center justify-center text-[#00ff00] text-3xl font-bold mb-4 border border-[#00ff00]/30">
            {user?.name?.charAt(0)}
          </div>

          <h1 className="text-3xl font-semibold">{user?.name}</h1>
          <p className="text-neutral-400 text-sm">{user?.email}</p>

          <button
            onClick={edit ? handleSave : () => setEdit(true)}
            className="mt-5 flex items-center gap-2 text-sm border border-neutral-700 px-5 py-2 rounded-lg hover:border-[#00ff00] hover:text-[#00ff00] transition"
          >
            {edit ? <Save size={16} /> : <Pencil size={16} />}
            {edit ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

        {/* Personal Info */}
        <div className="mb-10">
          <h2 className="section-title">Personal Details</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <input disabled={!edit} value={user?.name || ""} onChange={(e) => handleChange("name", e.target.value)} placeholder="Name" className="input" />
            <input disabled={!edit} value={user?.age || ""} onChange={(e) => handleChange("age", e.target.value)} placeholder="Age" className="input" />
            <input disabled={!edit} value={user?.gender || ""} onChange={(e) => handleChange("gender", e.target.value)} placeholder="Gender" className="input" />
            <input disabled={!edit} value={user?.phone || ""} onChange={(e) => handleChange("phone", e.target.value)} placeholder="Phone" className="input" />
            <input disabled value={user?.email || ""} className="input text-neutral-500" />
          </div>
        </div>

        {/* Address */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="section-title">Address</h2>

            {edit && (
              <button
                onClick={() => handleAddAddress()}
                className="flex items-center gap-1 text-sm border px-3 py-1.5 rounded-lg hover:text-[#00ff00]"
              >
                <Plus size={14} /> Add Address
              </button>
            )}
          </div>

          {user?.address?.length === 0 ? (
            <p className="text-neutral-500 text-sm">No address added</p>
          ) : (
            user.address.map((addr: any, index: number) => (
              <div
                key={index}
                className="relative mb-5 p-4 border border-neutral-800 rounded-xl bg-black/40 space-y-3"
              >
                {/* ❌ Delete Button */}
                {edit && (
                  <button
                    onClick={() => handleDeleteAddress(addr._id)}
                    className="absolute top-2 right-2 p-1 cursor-pointer rounded-full hover:bg-red-500/20 text-red-400"
                  >
                    <Trash size={16} />
                  </button>
                )}

                <input value={addr.street} disabled={!edit} onChange={(e) => handleAddressChange(index, "street", e.target.value)} placeholder="Street" className="input" />
                <input value={addr.city} disabled={!edit} onChange={(e) => handleAddressChange(index, "city", e.target.value)} placeholder="City" className="input" />
                <input value={addr.state} disabled={!edit} onChange={(e) => handleAddressChange(index, "state", e.target.value)} placeholder="State" className="input" />
                <input value={addr.country} disabled={!edit} onChange={(e) => handleAddressChange(index, "country", e.target.value)} placeholder="Country" className="input" />
                <input value={addr.zipCode} disabled={!edit} onChange={(e) => handleAddressChange(index, "zipCode", e.target.value)} placeholder="Zip Code" className="input" />
              </div>
            ))
          )}
        </div>

        {/* Meta */}
        <div>
          <h2 className="section-title">Account Info</h2>
          <p className="text-neutral-400 text-sm">
            Status: {user?.isActive ? "Active" : "Inactive"}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Page;