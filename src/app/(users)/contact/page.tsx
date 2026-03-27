"use client";

import { Mail, MapPinned, Phone } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 mt-20">
      <div className="px-6 md:px-16 lg:px-32 max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
        <div>
          <p className="text-[#00ff00] uppercase tracking-[0.3em] text-sm mb-4">
            Contact Us
          </p>

          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Lets talk about
            <br />
            <span className="text-[#00ff00]">your watch</span>
          </h1>

          <p className="text-neutral-400 mb-10 max-w-md">
            Have a question about selling your watch or our marketplace? Our
            team is ready to help you with pricing, pickup, or any other
            inquiry.
          </p>

          {/* CONTACT INFO */}

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-neutral-700">
                <Phone />
              </div>
              <div>
                <p className="text-sm text-neutral-400">Phone</p>
                <p className="text-white font-mono">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-neutral-700">
                <Mail />
              </div>
              <div>
                <p className="text-sm text-neutral-400">Email</p>
                <p className="text-white">support@ArventoChrono.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-neutral-700">
                <MapPinned />
              </div>
              <div>
                <p className="text-sm text-neutral-400">Location</p>
                <p className="text-white">India</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}

        <div
          className="     bg-gradient-to-l from-black via-zinc-950 to-green-950/80

     backdrop-blur-xl border-r border-green-500/20

     shadow-[0_0_30px_rgba(0,255,0,0.05)]  p-8 md:p-10"
        >
          <h2 className="text-2xl mb-6 font-light">Send us a message</h2>

          <form className="space-y-2">
            <div>
              <label className="text-sm text-neutral-400">Full Name</label>
              <input
                type="text"
                className="w-full mt-2 bg-black border border-neutral-700 p-3 focus:outline-none focus:border-[#00ff00]"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-400">Email</label>
              <input
                type="email"
                className="w-full mt-2 bg-black border border-neutral-700 p-3 focus:outline-none focus:border-[#00ff00]"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-400">Subject</label>
              <input
                type="text"
                className="w-full mt-2 bg-black border border-neutral-700 p-3 focus:outline-none focus:border-[#00ff00]"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-400">Message</label>
              <textarea
                rows={5}
                className="w-full mt-2 bg-black border border-neutral-700 p-3 focus:outline-none focus:border-[#00ff00]"
              />
            </div>

            <button
              type="submit"
              className="w-full border  py-3 font-medium cursor-pointer hover:bg-white hover:text-black transition"
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
