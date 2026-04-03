"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Home/Footer";
import Image from "next/image";

export default function SellPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ── HERO SECTION ─────────────────────────────────────── */}
       <section className="relative w-full h-96 overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://t4.ftcdn.net/jpg/08/11/15/31/360_F_811153195_s2vVHpvkhXYdh35b75nBf9vQ69Fp5cAj.jpg"
            alt="Our Products"
            fill // Use fill for hero backgrounds
            className="object-cover"
            priority
            style={{ filter: "brightness(0.35)" }}
          />
        </div>

        {/* Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-1"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            opacity: 0.4,
          }}
        />

        {/* Gold vertical accent */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#00ff00] to-transparent hidden md:block z-10" />

        {/* CONTENT CONTAINER */}
        {/* Added 'justify-center' to the parent flex to center text vertically */}
        <div className="relative z-10 w-full px-8 md:px-20 lg:px-32 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-4xl lg:text-6xl pt-10   font-light leading-none tracking-tight mb-6 transition-all duration-700">
              Our Products
            </h1>
            <p className="text-neutral-300  font-['Montserrat',sans-serif] font-light tracking-wide max-w-lg mb-10">
              High-quality curated selection designed for your specific needs.
              Experience the difference.
            </p>
            <a
              href="#sell-form"
              className="inline-flex items-center gap-3 w-fit px-8 py-4 border border-white text-sm tracking-[0.2em] uppercase font-['Montserrat',sans-serif] hover:bg-white hover:text-black transition-all duration-300"
            >
              Start Products
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
