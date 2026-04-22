"use client";

import React, { useEffect, useState } from "react";
import { Edit, Save, Plus, Trash } from "lucide-react";
import { useAuth } from "hooks/useAuth";
import ContactMessages from "../ui/ContactMessages";

// ✅ TYPE
type AddressType = {
  _id?: string;
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
};

type AdminType = {
  name?: string;
  email?: string;
  phone?: string;
  gender?: string;
  avatar?: string;
  role?: string;
  address?: AddressType[];
};

const AdminProfile = () => {
  const [admin, setAdmin] = useState<AdminType | null>(null);
  const [editMode, setEditMode] = useState(false);

  const { getSingleUser, updateProfile, deleteAddress } = useAuth();

  useEffect(() => {
    const fetchAdmin = async () => {
      const data = await getSingleUser();
      if (data) {
        setAdmin(data);
      }
    };
    fetchAdmin();
  }, [getSingleUser]);

  // ✅ HANDLE CHANGE
  const handleChange = (field: string, value: string) => {
    setAdmin((prev) => ({
      ...(prev || {}),
      [field]: value,
    }));
  };

  // ✅ ADDRESS CHANGE
  const handleAddressChange = (index: number, field: string, value: string) => {
    const updated = [...(admin?.address || [])];
    updated[index] = { ...updated[index], [field]: value };

    setAdmin((prev) => ({
      ...(prev as AdminType),
      address: updated,
    }));
  };

  // ✅ ADD ADDRESS
  const handleAddAddress = () => {
    setAdmin((prev) => ({
      ...(prev as AdminType),
      address: [
        ...(prev?.address || []),
        { street: "", city: "", state: "", country: "India", zipCode: "" },
      ],
    }));
  };

  // ✅ DELETE ADDRESS
  const handleDeleteAddress = async (addressId?: string, index?: number) => {
    try {
      // 🔥 If exists in DB
      if (addressId) {
        await deleteAddress(addressId);
      }

      // 🔥 Update UI instantly
      setAdmin((prev) => ({
        ...(prev as AdminType),
        address: prev?.address?.filter((_, i) => i !== index),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ SAVE
  const handleSave = async () => {
    try {
      if (!admin) return;
      await updateProfile(admin as any);
      setEditMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (!admin) {
    return (
      <div className="h-screen flex justify-center items-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white py-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            Admin <span className="text-green-500">Profile</span>
          </h1>

          <button
            onClick={editMode ? handleSave : () => setEditMode(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-gray-200  transition"
          >
            {editMode ? <Save size={16} /> : <Edit size={16} />}
            {editMode ? "Save" : "Edit"}
          </button>
        </div>

        {/* Profile */}
        <div className="bg-zinc-900/40 border border-neutral-800 rounded-2xl p-6 flex flex-col md:flex-row gap-6">
          <img
            src={
              admin.avatar || "https://randomuser.me/api/portraits/men/1.jpg"
            }
            className="w-32 h-32 rounded-full object-cover border-2 border-green-500/20"
          />

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              disabled={!editMode}
              value={admin.name || ""}
              onChange={(e) => handleChange("name", e.target.value)}
              className="input"
            />
            <input
              disabled={!editMode}
              value={admin.email || ""}
              onChange={(e) => handleChange("email", e.target.value)}
              className="input"
            />
            <input
              disabled={!editMode}
              value={admin.phone || ""}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="input"
            />
            <input
              disabled={!editMode}
              value={admin.gender || ""}
              onChange={(e) => handleChange("gender", e.target.value)}
              className="input"
            />
          </div>
        </div>

        {/* Address */}
        <div className="bg-zinc-900/40 border border-neutral-800 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg text-green-400">Address</h2>

            {editMode && (
              <button
                onClick={handleAddAddress}
                className="flex items-center gap-1 text-sm border px-3 py-1.5 rounded-lg hover:text-green-400"
              >
                <Plus size={14} /> Add
              </button>
            )}
          </div>

          {admin.address?.length ? (
            admin.address.map((addr, i) => (
              <div
                key={i}
                className="relative mb-4 p-4 border border-neutral-800 rounded-lg bg-black/40 space-y-2"
              >
                {/* DELETE BTN */}
                {editMode && (
                  <button
                    onClick={() => handleDeleteAddress(addr._id, i)}
                    className="absolute top-2 right-2 text-red-400 hover:text-red-600"
                  >
                    <Trash size={16} />
                  </button>
                )}

                <input
                  disabled={!editMode}
                  value={addr.street || ""}
                  onChange={(e) =>
                    handleAddressChange(i, "street", e.target.value)
                  }
                  className="input"
                  placeholder="Street"
                />
                <input
                  disabled={!editMode}
                  value={addr.city || ""}
                  onChange={(e) =>
                    handleAddressChange(i, "city", e.target.value)
                  }
                  className="input"
                  placeholder="City"
                />
                <input
                  disabled={!editMode}
                  value={addr.state || ""}
                  onChange={(e) =>
                    handleAddressChange(i, "state", e.target.value)
                  }
                  className="input"
                  placeholder="State"
                />
                <input
                  disabled={!editMode}
                  value={addr.country || ""}
                  onChange={(e) =>
                    handleAddressChange(i, "country", e.target.value)
                  }
                  className="input"
                  placeholder="Country"
                />
                <input
                  disabled={!editMode}
                  value={addr.zipCode || ""}
                  onChange={(e) =>
                    handleAddressChange(i, "zipCode", e.target.value)
                  }
                  className="input"
                  placeholder="Zip Code"
                />
              </div>
            ))
          ) : (
            <p className="text-neutral-500 text-sm">No address available</p>
          )}
        </div>

        {/* Stats (unchanged) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/40 p-6 rounded-2xl border border-neutral-800">
            <p className="text-sm text-neutral-400">Total Revenue</p>
            <h3 className="text-2xl text-green-400">₹200000</h3>
          </div>

          <div className="bg-zinc-900/40 p-6 rounded-2xl border border-neutral-800">
            <p className="text-sm text-neutral-400">Profit</p>
            <h3 className="text-2xl text-green-400">₹45000</h3>
          </div>

          <div className="bg-zinc-900/40 p-6 rounded-2xl border border-neutral-800">
            <p className="text-sm text-neutral-400">Loss</p>
            <h3 className="text-2xl text-red-400">₹75000</h3>
          </div>
        </div>
        <ContactMessages />
      </div>
    </div>
  );
};

export default AdminProfile;
