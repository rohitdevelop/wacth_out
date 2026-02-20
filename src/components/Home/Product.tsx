import React from "react";
import Spline from "@splinetool/react-spline";

const Product = () => {
  return (
    <div>
<section className="bg-black py-16">
  {/* Heading */}
  <div className="text-center mb-14">
    <h1 className="text-4xl md:text-6xl font-bold tracking-wide font-serif text-white">
      Our <span className="text-[#00ff00]">Collections</span>
    </h1>
  </div>

  {/* Cards Row 1 */}
  <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
    {[
      "https://img.freepik.com/free-vector/classic-watches-interface_250435-186.jpg?semt=ais_hybrid&w=740&q=80",
      "https://img.freepik.com/free-vector/classic-watches-interface_250435-185.jpg?semt=ais_hybrid&w=740&q=80",
      "https://img.freepik.com/free-vector/classic-watches-interface_250435-187.jpg?semt=ais_hybrid&w=740&q=80",
      "https://img.freepik.com/premium-photo/watch-with-red-black-face-word-s-it_862462-27969.jpg?semt=ais_hybrid&w=740&q=80",
    ].map((img, i) => (
      <div
        key={i}
        className="bg-[#111] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_25px_40px_rgba(0,255,0,0.35)]"
      >
        <img src={img} alt="Watch" className="w-full h-44 sm:h-56 object-cover" />

        <div className="p-4 sm:p-6 text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-[#00ff00] mb-2">
            Classic Luxury Watch
          </h3>

          <p className="text-gray-400 text-xs sm:text-sm">
            Timeless elegance crafted with precision for modern gentlemen.
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Cards Row 2 */}
  <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 mt-6 sm:mt-3.5">
    {[
      "https://img.freepik.com/premium-photo/watch-with-red-black-face-word-s-it_862462-27969.jpg?semt=ais_hybrid&w=740&q=80",
      "https://img.freepik.com/free-vector/classic-watches-interface_250435-186.jpg?semt=ais_hybrid&w=740&q=80",
      "https://img.freepik.com/free-vector/classic-watches-interface_250435-185.jpg?semt=ais_hybrid&w=740&q=80",
      "https://img.freepik.com/free-vector/classic-watches-interface_250435-187.jpg?semt=ais_hybrid&w=740&q=80",
    ].map((img, i) => (
      <div
        key={i}
        className="bg-[#111] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_25px_40px_rgba(0,255,0,0.35)]"
      >
        <img src={img} alt="Watch" className="w-full h-44 sm:h-56 object-cover" />

        <div className="p-4 sm:p-6 text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-[#00ff00] mb-2">
            Classic Luxury Watch
          </h3>

          <p className="text-gray-400 text-xs sm:text-sm">
            Timeless elegance crafted with precision for modern gentlemen.
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

<section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-950 to-black text-white px-4 sm:px-6 lg:px-10 py-16">
  <div className="max-w-7xl w-full">

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">

      {/* LEFT CONTENT */}
      <div className="space-y-6 sm:space-y-8 text-center lg:text-left">

        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-amber-500 border-b border-amber-500 pb-1 inline-block">
          Swiss Engineering
        </span>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light leading-tight">
          Timeless <br />
          <span className="font-semibold text-white">
            Precision
          </span>
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
          Crafted from the finest materials with meticulous attention to detail,
          each timepiece represents the pinnacle of horological excellence.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
          <div>
            <div className="text-2xl sm:text-3xl font-light text-white">316L</div>
            <div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider">
              Stainless Steel
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-light text-white">10 ATM</div>
            <div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider">
              Water Resistant
            </div>
          </div>
        </div>
      </div>


      {/* CENTER SPLINE */}
      <div className="relative h-[550px] sm:h-[950px] lg:h-[600px] flex items-center justify-center">

        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />

        <Spline
          scene="https://prod.spline.design/G4Hgw7ruqJepTCl9/scene.splinecode"
          className="w-full h-full object-contain"
        />
      </div>


      {/* RIGHT CONTENT */}
      <div className="space-y-6 sm:space-y-8 text-center lg:text-right">

        <div className="space-y-3 sm:space-y-4">
          <div>
            <div className="text-2xl sm:text-3xl font-light text-white">42mm</div>
            <div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider">
              Case Diameter
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-light text-white">80hrs</div>
            <div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider">
              Power Reserve
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2 sm:space-y-3 pt-4 sm:pt-6 border-t border-zinc-800">
          <p className="text-zinc-400 text-xs sm:text-sm">
            ✓ Sapphire crystal with anti-reflective coating
          </p>
          <p className="text-zinc-400 text-xs sm:text-sm">
            ✓ Swiss automatic movement with 28,800 VPH
          </p>
          <p className="text-zinc-400 text-xs sm:text-sm">
            ✓ Italian leather strap with deployment clasp
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center lg:justify-end">
          <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 tracking-wider text-xs sm:text-sm hover:bg-zinc-200 transition">
            EXPLORE
          </button>

          <button className="border border-zinc-600 px-6 sm:px-8 py-3 sm:py-4 tracking-wider text-xs sm:text-sm hover:bg-white hover:text-black transition">
            DETAILS
          </button>
        </div>

        {/* Trust */}
        <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 sm:pt-6 text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest justify-center lg:justify-end">
          <div>5-Year Warranty</div>
          <div>Free Shipping</div>
          <div>30-Day Returns</div>
        </div>

      </div>

    </div>
  </div>
</section>

    </div>
  );
};

export default Product;
