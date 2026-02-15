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

        {/* Cards */}
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            "https://img.freepik.com/free-vector/classic-watches-interface_250435-186.jpg?semt=ais_hybrid&w=740&q=80",
            "https://img.freepik.com/free-vector/classic-watches-interface_250435-185.jpg?semt=ais_hybrid&w=740&q=80",
            "https://img.freepik.com/free-vector/classic-watches-interface_250435-187.jpg?semt=ais_hybrid&w=740&q=80",
            "https://img.freepik.com/premium-photo/watch-with-red-black-face-word-s-it_862462-27969.jpg?semt=ais_hybrid&w=740&q=80",
          ].map((img, i) => (
            <div
              key={i}
              className="bg-[#111] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_25px_40px_rgba(0,255,0,0.35)] "
            >
              <img src={img} alt="Watch" className="w-full h-56 object-cover" />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#00ff00] mb-2">
                  Classic Luxury Watch
                </h3>

                <p className="text-gray-400 text-sm">
                  Timeless elegance crafted with precision for modern gentlemen.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-3.5">
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
              <img src={img} alt="Watch" className="w-full h-56 object-cover" />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#00ff00] mb-2">
                  Classic Luxury Watch
                </h3>

                <p className="text-gray-400 text-sm">
                  Timeless elegance crafted with precision for modern gentlemen.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


<section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-950 to-black text-white px-6 ">
  <div className="max-w-8xl w-full px-20">

    <div className="grid lg:grid-cols-3 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div className="space-y-8 text-center lg:text-left">

        <span className="text-xs font-semibold tracking-[0.35em] uppercase text-amber-500 border-b border-amber-500 pb-1">
          Swiss Engineering
        </span>

        <h1 className="text-5xl lg:text-6xl font-light leading-tight">
          Timeless <br />
          <span className="font-semibold text-white">
            Precision
          </span>
        </h1>

        <p className="text-zinc-400 leading-relaxed max-w-md mx-auto lg:mx-0">
          Crafted from the finest materials with meticulous attention to detail,
          each timepiece represents the pinnacle of horological excellence.
        </p>

        <div className="grid grid-cols-2 gap-6 pt-6">
          <div>
            <div className="text-3xl font-light text-white">316L</div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider">
              Stainless Steel
            </div>
          </div>

          <div>
            <div className="text-3xl font-light text-white">10 ATM</div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider">
              Water Resistant
            </div>
          </div>
        </div>

      </div>


      {/* CENTER SPLINE */}
      <div className="relative h-[600px] flex items-center justify-center">

        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />

        <Spline
          scene="https://prod.spline.design/G4Hgw7ruqJepTCl9/scene.splinecode"
          className="w-full h-full object-contain"
        />

      </div>


      {/* RIGHT CONTENT */}
      <div className="space-y-8 text-center lg:text-right">

        <div className="space-y-4">
          <div>
            <div className="text-3xl font-light text-white">42mm</div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider">
              Case Diameter
            </div>
          </div>

          <div>
            <div className="text-3xl font-light text-white">80hrs</div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider">
              Power Reserve
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3 pt-6 border-t border-zinc-800">
          <p className="text-zinc-400 text-sm">
            ✓ Sapphire crystal with anti-reflective coating
          </p>
          <p className="text-zinc-400 text-sm">
            ✓ Swiss automatic movement with 28,800 VPH
          </p>
          <p className="text-zinc-400 text-sm">
            ✓ Italian leather strap with deployment clasp
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-end">
          <button className="bg-white text-black px-8 py-4 tracking-wider text-sm hover:bg-zinc-200 transition">
            EXPLORE
          </button>

          <button className="border border-zinc-600 px-8 py-4 tracking-wider text-sm hover:bg-white hover:text-black transition">
            DETAILS
          </button>
        </div>

        {/* Trust */}
        <div className="flex gap-6 pt-6 text-xs text-zinc-500 uppercase tracking-widest justify-center lg:justify-end">
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
