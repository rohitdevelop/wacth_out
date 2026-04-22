"use client";

import React from "react";
import { X, MapPin, User as UserIcon } from "lucide-react";
import { SafeUser } from "types/auth";

// ✅ Props
type UsersEyeProps = {
  selectedUser: SafeUser;
  setIsOpen: (isOpen: boolean) => void;
};

const UsersEye = ({ selectedUser, setIsOpen }: UsersEyeProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm ">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-neutral-800 rounded-2xl shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-neutral-800">
          <div>
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <UserIcon size={18} className="text-[#00ff00]" />
              User Details
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              ID: {selectedUser._id}
            </p>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT SIDE - USER INFO */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
              Basic Info
            </h3>

            <div className="space-y-2 text-sm text-zinc-300">
              <p>
                <b>Name:</b> {selectedUser.name}
              </p>
              <p>
                <b>Email:</b> {selectedUser.email}
              </p>
              <p>
                <b>Phone:</b> {selectedUser.phone}
              </p>
              <p>
                <b>Age:</b> {selectedUser.age}
              </p>
              <p>
                <b>Gender:</b> {selectedUser.gender}
              </p>
            </div>

            {/* Status Badges */}
            <div className="flex gap-2 mt-4">
              <span
                className={`px-2 py-1 text-xs rounded ${
                  selectedUser.isActive
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {selectedUser.isActive ? "Active" : "Inactive"}
              </span>

              <span
                className={`px-2 py-1 text-xs rounded ${
                  selectedUser.isEmailVerified
                    ? "bg-blue-500/10 text-blue-400"
                    : "bg-yellow-500/10 text-yellow-400"
                }`}
              >
                {selectedUser.isEmailVerified ? "Verified" : "Not Verified"}
              </span>

              <span className="px-2 py-1 text-xs rounded bg-zinc-800 text-zinc-300 uppercase">
                {selectedUser.role}
              </span>
            </div>
          </div>

          {/* RIGHT SIDE - ADDRESS */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-2">
              <MapPin size={14} />
              Address
            </h3>

            {selectedUser.address && selectedUser.address.length > 0 ? (
              selectedUser.address.map((addr, i) => (
                <div
                  key={i}
                  className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-sm text-zinc-300"
                >
                  <p>{addr.street}</p>
                  <p>
                    {addr.city}, {addr.state}
                  </p>
                  <p>
                    {addr.country} - {addr.zipCode}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-zinc-500 text-sm">No address available</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-neutral-800 flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="px-6 py-2 bg-white text-black font-semibold    transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersEye;
