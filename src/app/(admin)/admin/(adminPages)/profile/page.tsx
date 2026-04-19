"use client";

import React from "react";
import AdminProfile from "../../components/admin/AdminProfile";

const Page = () => {
  return (
    <div className="min-h-screen   relative overflow-hidden font-sans pb-20  ">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">
              Manage <span className="text-[#00ff00]">Profile</span>
            </h1>
            <p className="text-neutral-400 mt-2 text-sm">
              Manage the all persnal details of yours
            </p>
          </div>
          <div className="flex gap-2">
            <button className=" cursor-pointer border flex justify-center items-center border-neutral-700 px-8 py-2 text-2xl text-white">
              PROFILE
            </button>
          </div>
        </header>
        <div className="border border-neutral-800 w-full"></div>
        <AdminProfile />
      </div>
    </div>
  );
};

export default Page;
