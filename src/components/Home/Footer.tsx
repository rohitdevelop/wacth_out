import React, { useState, useEffect } from "react";

const Footer = () => {
const [time, setTime] = useState({ h: "00", m: "00", s: "00" });
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        h: String(now.getHours()).padStart(2, "0"),
        m: String(now.getMinutes()).padStart(2, "0"),
        s: String(now.getSeconds()).padStart(2, "0"),
      });
      setBlink((prev) => !prev);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
 <section className="relative flex flex-col w-[90vw] items-center justify-center min-h-56 bg-[#080808] overflow-hidden px-4">
 
      {/* Scanlines overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)",
        }}
      />

      {/* Top label */}
      <p className="relative z-20 mb-6 sm:mb-10 text-[10px] sm:text-xs md:text-sm tracking-[0.5em] uppercase text-green-400/60 font-mono">
        Live Clock
      </p>

      {/* Time display */}
      <div className="relative z-20 flex items-start justify-center gap-1 sm:gap-2 md:gap-4">

        {/* HOURS */}
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <span
            className="font-black leading-none text-white select-none"
            style={{
              fontSize: "clamp(5.5rem, 24vw, 22rem)",
              fontFamily: "'Arial Black', 'Impact', sans-serif",
              letterSpacing: "-0.03em",
             }}
          >
            {time.h}
          </span>
          <span className="text-[9px] sm:text-xs tracking-[0.4em] uppercase text-white/20 font-mono">
            Hours
          </span>
        </div>

        {/* Colon 1 */}
        <span
          className="font-black leading-none select-none transition-opacity duration-100"
          style={{
            fontSize: "clamp(4.5rem, 20vw, 18rem)",
            fontFamily: "'Arial Black', 'Impact', sans-serif",
            color: "#00ff00",
             paddingTop: "clamp(0.15rem, 0.8vw, 0.6rem)",
           }}
        >
          :
        </span>

        {/* MINUTES */}
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <span
            className="font-black leading-none text-white select-none"
            style={{
              fontSize: "clamp(5.5rem, 24vw, 22rem)",
              fontFamily: "'Arial Black', 'Impact', sans-serif",
              letterSpacing: "-0.03em",
             }}
          >
            {time.m}
          </span>
          <span className="text-[9px] sm:text-xs tracking-[0.4em] uppercase text-white/20 font-mono">
            Minutes
          </span>
        </div>

        {/* Colon 2 */}
        <span
          className="font-black leading-none select-none transition-opacity duration-100"
          style={{
            fontSize: "clamp(4.5rem, 20vw, 18rem)",
            fontFamily: "'Arial Black', 'Impact', sans-serif",
            color: "#00ff00",
             paddingTop: "clamp(0.15rem, 0.8vw, 0.6rem)",
           }}
        >
          :
        </span>

        {/* SECONDS */}
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <span
            className="font-black leading-none select-none"
            style={{
              fontSize: "clamp(5.5rem, 24vw, 22rem)",
              fontFamily: "'Arial Black', 'Impact', sans-serif",
              letterSpacing: "-0.03em",
              color: "#00ff00",
             }}
          >
            {time.s}
          </span>
          <span className="text-[9px] sm:text-xs tracking-[0.4em] uppercase text-green-400/40 font-mono">
            Seconds
          </span>
        </div>
      </div>
 
    </section>


      <section className="relative w-full md:h-[1100px] h-[900px]">
        {/* Background Image */}
        <img
          src="https://www.lepage.fr/75894-zoom_default/hublot-big-bang-unico-dark-green-ceramic-automatic-watch-skeleton-dial-orange-rubber-strap-42-mm.jpg"
          alt="Luxury Watch"
          className="absolute inset-0 w-full h-full pt-10 object-cover"
        />
        {/* Dark Overlay */} {/* Content */}
        <div className="relative z-10 md:pt-5 pt-12 h-full text-center text-white px-6">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <h1
              className="text-[4rem] sm:text-[10rem] md:text-[10rem] font-extrabold whitespace-nowrap text-white"
              style={{ letterSpacing: "-0.05em" }}
            >
              TIME IS LUXURY
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center md:mt-[700px] mt-[600px]">
            <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-2xl">
              Discover precision, elegance and timeless craftsmanship. Elevate
              your style with iconic performance.
            </p>
            <button className="mt-15 px-8 py-3 font-semibold tracking-wider bg-white text-black hover:bg-gray-200">
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      <footer className="relative bg-green-950 text-white overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
              animation: "gridMove 20s linear infinite",
            }}
          />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        {/* Massive Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
          <h1
            className="text-[14rem] font-bold whitespace-nowrap"
            style={{ letterSpacing: "-0.05em" }}
          >
            ArventoChrono
          </h1>
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold tracking-wide text-white">
                  Arvento<span className="text-[#00ff00]">Chrono</span>
                </h1>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Crafting timeless elegance. Premium watches for those who value
                precision and style.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Shop Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Shop</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    Men Watches
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    Women Watches
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    Limited Edition
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    Sale
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    Warranty
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe for exclusive offers and latest collections.
              </p>
              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-100 to-gray-100 px-4 text-black py-1.5  text-sm font-medium hover:shadow-lg hover:shadow-green-500/50 transition-all">
                    Join
                  </button>
                </div>
                <div className="flex items-start space-x-2 text-xs text-gray-500">
                  <input type="checkbox" className="mt-0.5" />
                  <span>I agree to receive marketing emails</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 ArventoChrono. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">We accept:</span>
              <div className="flex space-x-2">
                <div className="w-10 h-7 bg-white/10 rounded flex items-center justify-center text-xs font-bold">
                  VISA
                </div>
                <div className="w-10 h-7 bg-white/10 rounded flex items-center justify-center text-xs font-bold">
                  MC
                </div>
                <div className="w-10 h-7 bg-white/10 rounded flex items-center justify-center text-xs font-bold">
                  AMEX
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes gridMove {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(50px, 50px);
            }
          }
        `}</style>
      </footer>
    </div>
  );
};

export default Footer;
