// "use client";

// import React, { useState, useEffect } from "react";
// import { Search, ShoppingCart, Heart, User, Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [showNav, setShowNav] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   // Hide / show navbar on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY && currentScrollY > 80) {
//         setShowNav(false); // scrolling down
//       } else {
//         setShowNav(true); // scrolling up
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <>
//       {/* NAVBAR */}
//       <nav
//         className={`fixed top-0 left-0 w-full z-50
//         transition-transform duration-500 ease-in-out
//         ${showNav ? "translate-y-0" : "-translate-y-full"}
//         bg-black/70 backdrop-blur-xl border-b border-[#0d400d]`}
//       >
//         <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

//           {/* LOGO */}
//           <h1 className="text-2xl font-bold tracking-wide text-white">
//             Arvento<span className="text-[#00ff00]">Chrono</span>
//           </h1>

//           {/* DESKTOP MENU */}
//           <ul className="hidden md:flex space-x-3 font-medium">
//             {["Home", "Shop", "Sell", "About", "Contact"].map((item) => (
//               <li
//                 key={item}
//                 className="relative px-2 py-2 text-gray-200 overflow-hidden group cursor-pointer"
//               >
//                 <span className="relative z-10 transition-all duration-300 group-hover:-translate-y-12 inline-block">
//                   {item}
//                 </span>
//                 <span className="absolute inset-0 flex items-center justify-center translate-y-12 transition-all duration-300 group-hover:translate-y-0 text-[#00ff00] font-semibold">
//                   {item}
//                 </span>
//               </li>
//             ))}
//           </ul>

//           {/* SEARCH */}
//           <div className="hidden lg:flex items-center border border-[#0d400d] rounded-lg px-3 py-2">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="bg-transparent outline-none text-sm px-2 text-white"
//             />
//             <Search size={18} className="text-[#00ff00]" />
//           </div>

//           {/* ICONS */}
//           <div className="hidden md:flex items-center space-x-4">
//             <ShoppingCart className="text-[#00ff00] cursor-pointer hover:scale-110 transition" />
//             <Heart className="text-[#00ff00] cursor-pointer hover:scale-110 transition" />

//             {/* USER DROPDOWN */}
//             <div className="relative group">
//               <User className="text-[#00ff00] cursor-pointer hover:scale-110 transition" />

//               <div
//                 className="absolute right-0 mt-4 w-40 bg-black/90 backdrop-blur-xl
//                 border border-[#00ff00]/30 rounded-xl shadow-xl overflow-hidden
//                 opacity-0 invisible group-hover:visible group-hover:opacity-100
//                 transition-all duration-300"
//               >
//                 <button className="w-full px-4 py-3 text-left text-white hover:bg-[#00ff00]/10">
//                   Sign Up
//                 </button>
//                 <button className="w-full px-4 py-3 text-left text-white hover:bg-[#00ff00]/10">
//                   Sign In
//                 </button>

//                 <button className="relative w-full px-4 py-3 text-left text-[#00ff00] font-semibold overflow-hidden group/item">
//                   <span className="relative z-10">Join Us</span>
//                   <span className="absolute inset-0 -translate-x-full group-hover/item:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <div className="md:hidden text-white">
//             {open ? (
//               <X onClick={() => setOpen(false)} />
//             ) : (
//               <Menu onClick={() => setOpen(true)} />
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* MOBILE DRAWER */}
//       <div
//         className={`fixed top-0 right-0 h-full w-1/2 bg-black/95 backdrop-blur-xl
//         z-40 transition-transform duration-300
//         ${open ? "translate-x-0" : "translate-x-full"}`}
//       >
//         <div className="pt-24 px-6 space-y-6">
//           {["Home", "Shop", "Sell", "About", "Contact"].map((item) => (
//             <div
//               key={item}
//               className="text-gray-100 text-lg hover:text-[#00ff00] hover:bg-[#1a431a] hover:pl-5 duration-300 cursor-pointer transition-all"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


"use client";

import React, { useState, useEffect } from "react";
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide / show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50
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
          <ul className="hidden md:flex space-x-8 font-medium items-center">

            <li className="cursor-pointer text-gray-200 hover:text-[#00ff00] transition">
              Home
            </li>

            {/* SHOP DROPDOWN */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 text-gray-200 hover:text-[#00ff00] transition">
                Shop <ChevronDown size={16} />
              </div>

              {/* Dropdown */}
              <div
                className="absolute left-0 mt-4 w-44 bg-black/95 backdrop-blur-xl 
                border border-[#00ff00]/30 rounded-xl shadow-xl overflow-hidden
                opacity-0 invisible group-hover:visible group-hover:opacity-100
                transition-all duration-300"
              >
                {["Men", "Women", "Kids", "Phones"].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-3 text-white hover:bg-[#00ff00]/10 hover:text-[#00ff00] transition cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </li>

            <li className="cursor-pointer text-gray-200 hover:text-[#00ff00] transition">
              Sell
            </li>

            <li className="cursor-pointer text-gray-200 hover:text-[#00ff00] transition">
              About
            </li>

            <li className="cursor-pointer text-gray-200 hover:text-[#00ff00] transition">
              Contact
            </li>
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
                <button className="w-full px-4 py-3 text-left text-white hover:bg-[#00ff00]/10">
                  Sign Up
                </button>
                <button className="w-full px-4 py-3 text-left text-white hover:bg-[#00ff00]/10">
                  Sign In
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden text-white">
            {open ? (
              <X onClick={() => setOpen(false)} />
            ) : (
              <Menu onClick={() => setOpen(true)} />
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-black/95 backdrop-blur-xl
        z-40 transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="pt-24 px-6 space-y-6 text-gray-100">

          <div className="hover:text-[#00ff00] cursor-pointer">Home</div>

          {/* MOBILE SHOP DROPDOWN */}
          <div>
            <div
              onClick={() => setMobileShopOpen(!mobileShopOpen)}
              className="flex justify-between items-center cursor-pointer"
            >
              <span>Shop</span>
              <ChevronDown
                size={18}
                className={`transition-transform ${mobileShopOpen ? "rotate-180" : ""}`}
              />
            </div>

            {mobileShopOpen && (
              <div className="ml-4 mt-3 space-y-3">
                {["Men", "Women", "Kids", "Phones"].map((item) => (
                  <div
                    key={item}
                    className="text-gray-400 hover:text-[#00ff00] transition cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="hover:text-[#00ff00] cursor-pointer">Sell</div>
          <div className="hover:text-[#00ff00] cursor-pointer">About</div>
          <div className="hover:text-[#00ff00] cursor-pointer">Contact</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
