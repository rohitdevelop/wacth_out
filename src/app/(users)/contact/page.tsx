"use client";

import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 mt-20">

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>

          <p className="text-[#00ff00] uppercase tracking-[0.3em] text-sm mb-4">
            Contact Us
          </p>

          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Let's talk about
            <br />
            <span className="text-[#00ff00]">your watch</span>
          </h1>

          <p className="text-neutral-400 mb-10 max-w-md">
            Have a question about selling your watch or our marketplace?
            Our team is ready to help you with pricing, pickup, or any other inquiry.
          </p>

          {/* CONTACT INFO */}

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-neutral-700">
                📞
              </div>
              <div>
                <p className="text-sm text-neutral-400">Phone</p>
                <p className="text-white font-mono">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-neutral-700">
                ✉️
              </div>
              <div>
                <p className="text-sm text-neutral-400">Email</p>
                <p className="text-white">support@watchmarket.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-neutral-700">
                📍
              </div>
              <div>
                <p className="text-sm text-neutral-400">Location</p>
                <p className="text-white">India</p>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}

        <div className="bg-[#111] border border-neutral-800 p-8 md:p-10">

          <h2 className="text-2xl mb-6 font-light">
            Send us a message
          </h2>

          <form className="space-y-2">

            <div>
              <label className="text-sm text-neutral-400">
                Full Name
              </label>
              <input
                type="text"
                className="w-full mt-2 bg-black border border-neutral-700 p-3 focus:outline-none focus:border-[#00ff00]"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-400">
                Email
              </label>
              <input
                type="email"
                className="w-full mt-2 bg-black border border-neutral-700 p-3 focus:outline-none focus:border-[#00ff00]"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-400">
                Subject
              </label>
              <input
                type="text"
                className="w-full mt-2 bg-black border border-neutral-700 p-3 focus:outline-none focus:border-[#00ff00]"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-400">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full mt-2 bg-black border border-neutral-700 p-3 focus:outline-none focus:border-[#00ff00]"
              />
            </div>

            <button
              type="submit"
              className="w-full border  py-3 font-medium hover:bg-white hover:text-black transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Page;