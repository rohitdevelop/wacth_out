"use client";

import React, { useState, useEffect } from "react";
import { Search, ShoppingCart, Heart, User,Timer,Home } from "lucide-react";
 import Link from "next/link";

const Navbar: React.FC  = () => {
   const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide / show navbar on scroll
useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    setShowNav(!(currentScrollY > lastScrollY && currentScrollY > 80));
    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [lastScrollY]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`hidden md:block fixed top-0 left-0 w-full z-50
        transition-transform duration-500 ease-in-out
        ${showNav ? "translate-y-0" : "-translate-y-full"}
        bg-black/70 backdrop-blur-xl border-b border-[#0d400d]`}
      >
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* LOGO */}
          <h1 className="text-2xl font-bold tracking-wide text-white">
            Arvento<span className="text-[#00ff00]">Chrono</span>
          </h1>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex space-x-3 font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              { name: "Sell", path: "/sell" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li
                key={item.name}
                className="relative px-2 py-2 text-gray-200 overflow-hidden group cursor-pointer"
              >
                <Link href={item.path}>
                  <span className="relative z-10 transition-all duration-300 group-hover:-translate-y-12 inline-block">
                    {item.name}
                  </span>

                  <span className="absolute inset-0 flex items-center justify-center translate-y-12 transition-all duration-300 group-hover:translate-y-0 text-[#00ff00] font-semibold">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* SEARCH */}
          <div className="hidden lg:flex items-center border border-[#0d400d] rounded-lg px-3 py-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm px-2 text-white"
            />
            <Search size={18} className="text-[#00ff00]" />
          </div>

          {/* ICONS */}
          <div className="hidden md:flex items-center space-x-4">
            <ShoppingCart className="text-[#00ff00] cursor-pointer hover:scale-110 transition" />
            <Heart className="text-[#00ff00] cursor-pointer hover:scale-110 transition" />

            {/* USER DROPDOWN */}
            <div className="relative group">
              <User className="text-[#00ff00] cursor-pointer hover:scale-110 transition" />

              <div
                className="absolute right-0 mt-4 w-40 bg-black/90 backdrop-blur-xl
                border border-[#00ff00]/30 rounded-xl shadow-xl overflow-hidden
                opacity-0 invisible group-hover:visible group-hover:opacity-100
                transition-all duration-300"
              >
                <Link href={"/signup"}>
                <button className="w-full px-4 py-3 text-left text-white hover:bg-[#00ff00]/10">
                  Sign Up
                </button>
                </Link>
                <Link href={"/login"}>
                <button className="w-full px-4 py-3 text-left text-white hover:bg-[#00ff00]/10">
                  Sign In
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      {/* MOBILE BOTTOM NAVBAR */}
      <div className={`md:hidden fixed top-0 left-0 w-full z-50
        transition-transform duration-500 ease-in-out
        ${showNav ? "translate-y-0" : "-translate-y-full"}
        bg-black/70 backdrop-blur-xl border-b border-[#0d400d]`}>
        {/* Search */}
        <div className="flex items-center px-4 py-3 gap-2">
          <input
            type="text"
            placeholder="Search watches..."
            className="flex-1 bg-[#111] border border-[#0d400d] rounded-lg px-3 py-2 text-sm text-white outline-none"
          />

          <button className="bg-[#07ee07] text-black px-4 py-2 rounded-lg text-sm">
            Shop
          </button>
        </div>

        {/* Categories */}
        <div className="flex items-center justify-center gap-4 px-4 pb-3 text-sm text-white">
          <button className="whitespace-nowrap hover:text-[#00ff00]">
            Men
          </button>
          <button className="whitespace-nowrap hover:text-[#00ff00]">
            Women
          </button>
          <button className="whitespace-nowrap hover:text-[#00ff00]">
            Kids
          </button>
          <button className="whitespace-nowrap hover:text-[#00ff00]">
            Luxury
          </button>
          <button className="whitespace-nowrap hover:text-[#00ff00]">
            Sports
          </button>
        </div>
      </div>
      {/* MOBILE TOP NAVBAR */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-black/95 border-t border-[#0d400d] z-50">
        <div className="flex justify-around items-center py-2">
          <Link
            href="/"
            className="flex flex-col items-center text-white text-xs"
          >
            <Home size={22} className="text-[#00ff00]" />
            Home
          </Link>

          <Link
            href="/wishlist"
            className="flex flex-col items-center text-white text-xs"
          >
            <Heart size={22} className="text-[#00ff00]" />
            wishlist
          </Link>

          <Link
            href="/sell"
            className="flex flex-col items-center text-white text-xs"
          >
            <Timer size={22} className="text-[#00ff00]" />
            Shell
          </Link>

          <Link
            href="/cart"
            className="flex flex-col items-center text-white text-xs"
          >
            <ShoppingCart size={22} className="text-[#00ff00]" />
            Cart
          </Link>

          <Link
            href="/profile"
            className="flex flex-col items-center text-white text-xs"
          >
            <User size={22} className="text-[#00ff00]" />
            Profile
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
