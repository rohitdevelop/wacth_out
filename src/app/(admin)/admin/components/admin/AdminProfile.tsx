"use client";

import React, { useState } from "react";
import { Edit, Save, MapPin, Mail, Phone } from "lucide-react";

const initialAdmin = {
  id: 1,
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  name: "Rohit Singh",
  email: "rohit@gmail.com",
  phone: "+91 98765 43210",
  gender: "Male",
  role: "Admin",
  address: {
    street: "Sector 15",
    city: "Gurgaon",
    state: "Haryana",
    country: "India",
    zip: "122001",
  },
  revenue: 120000,
  profit: 45000,
};

const AdminProfile = () => {
  const [admin, setAdmin] = useState(initialAdmin);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (field:string, value:string) => {
    setAdmin((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            Admin <span className="text-green-500">Profile</span>
          </h1>

          <button
            onClick={() => setEditMode(!editMode)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-black transition"
          >
            {editMode ? <Save size={16} /> : <Edit size={16} />}
            {editMode ? "Save" : "Edit"}
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-zinc-900/40 border border-neutral-800 rounded-2xl p-6 flex flex-col md:flex-row gap-6">

          {/* Avatar */}
          <img
            src={admin.avatar}
            className="w-32 h-32 rounded-full object-cover border-2 border-green-500/20"
          />

          {/* Info */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              disabled={!editMode}
              value={admin.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="bg-black/50 border border-neutral-700 rounded-lg p-2"
            />

            <input
              disabled={!editMode}
              value={admin.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="bg-black/50 border border-neutral-700 rounded-lg p-2"
            />

            <input
              disabled={!editMode}
              value={admin.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="bg-black/50 border border-neutral-700 rounded-lg p-2"
            />

            <input
              disabled={!editMode}
              value={admin.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              className="bg-black/50 border border-neutral-700 rounded-lg p-2"
            />

          </div>
        </div>

        {/* Address Section */}
        <div className="bg-zinc-900/40 border border-neutral-800 rounded-2xl p-6">
          <h2 className="text-lg mb-4 text-green-400">Address</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(admin.address).map(([key, value]) => (
              <input
                key={key}
                disabled={!editMode}
                value={value}
                onChange={(e) =>
                  setAdmin((prev) => ({
                    ...prev,
                    address: { ...prev.address, [key]: e.target.value },
                  }))
                }
                className="bg-black/50 border border-neutral-700 rounded-lg p-2"
                placeholder={key}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900/40 p-6 rounded-2xl border border-neutral-800">
            <p className="text-sm text-neutral-400">Total Revenue</p>
            <h3 className="text-2xl text-green-400">₹{admin.revenue}</h3>
          </div>

          <div className="bg-zinc-900/40 p-6 rounded-2xl border border-neutral-800">
            <p className="text-sm text-neutral-400">Profit</p>
            <h3 className="text-2xl text-green-400">₹{admin.profit}</h3>
          </div>

          <div className="bg-zinc-900/40 p-6 rounded-2xl border border-neutral-800">
            <p className="text-sm text-neutral-400">Loss</p>
            <h3 className="text-2xl text-red-400">₹{admin.revenue - admin.profit}</h3>
          </div>

        </div>

        {/* Fake Graph Section */}
        <div className="bg-zinc-900/40 border border-neutral-800 rounded-2xl p-6">
          <h2 className="text-lg mb-4 text-green-400">Performance Graph</h2>

          <div className="h-40 flex items-end gap-2">
            {[40, 60, 30, 80, 50, 90].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 bg-green-500/40 rounded-t-lg hover:bg-green-500 transition"
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminProfile;
