"use client";

import React from "react";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

const admins = [
  {
    id: 1,
    name: "Rohit Singh",
    email: "rohit@gmail.com",
    phone: "+91 98765 43210",
    location: "India",
    role: "Super Admin",
  },
  {
    id: 2,
    name: "Amit Kumar",
    email: "amit@gmail.com",
    phone: "+91 91234 56789",
    location: "Delhi",
    role: "Admin",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,0,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 ">

        {/* 🔥 Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-4xl font-semibold">
            Admin <span className="text-[#00ff00]">Profiles</span>
          </h1>
          <p className="text-neutral-400 mt-2 text-sm">
            Manage and view all administrative accounts
          </p>
        </div>

        {/* 🧱 Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {admins.map((admin, index) => (
            <div
              key={admin.id}
              className={`relative p-8 border rounded-2xl backdrop-blur-md transition-all duration-300 group
                ${index === 0 
                  ? "border-[#00ff00]/40 bg-[#00ff00]/5 scale-[1.02]" 
                  : "border-neutral-800 bg-white/5 hover:border-[#00ff00]/30"}
              `}
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#00ff00]/5 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-[#00ff00]/10 flex items-center justify-center text-[#00ff00] text-xl font-bold mb-5">
                {admin.name.charAt(0)}
              </div>

              {/* Name */}
              <h2 className="text-xl font-semibold mb-1">{admin.name}</h2>

              {/* Role Badge */}
              <span className={`inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full mb-4
                ${admin.role === "Super Admin"
                  ? "bg-[#00ff00]/10 text-[#00ff00]"
                  : "bg-neutral-800 text-neutral-300"}
              `}>
                <ShieldCheck size={14} />
                {admin.role}
              </span>

              {/* Info */}
              <div className="space-y-2 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <Mail size={14} /> {admin.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} /> {admin.phone}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} /> {admin.location}
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#00ff00]/40 to-transparent" />
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Page;