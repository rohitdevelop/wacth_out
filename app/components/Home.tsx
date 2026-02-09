import React from "react";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col pt-24">
      {/* Top Section (Text) */}
      <section className="pb-28">
        <div className="flex-1 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide font-serif">
            Welcome to <span className="text-[#00ff00]">ArventoChrono</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-light tracking-widest uppercase text-gray-300 mb-4">
            Luxury Watches That Define You
          </h2>

          <p className="max-w-2xl text-gray-400 mb-8 leading-relaxed">
            Discover precision-crafted timepieces designed for those who value
            elegance, performance, and timeless craftsmanship. Elevate your
            style with watches that speak sophistication.
          </p>
        </div>

        {/* Bottom Section (Image) */}
        <div className="flex justify-center items-center">
          <img
            src="https://wallpapercave.com/wp/wp7968173.jpg"
            alt="watch"
            className="w-[80vw] h-[90vh] mt-9 object-cover"
          />
        </div>
      </section>

      {/* ...................................................................................................................*/}
      <section className="bg-black py-16">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide font-serif text-white">
            Our <span className="text-[#00ff00]">Collections</span>
          </h1>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            "https://img.freepik.com/free-vector/classic-watches-interface_250435-186.jpg?semt=ais_hybrid&w=740&q=80",
            "https://img.freepik.com/free-vector/classic-watches-interface_250435-185.jpg?semt=ais_hybrid&w=740&q=80",
            "https://img.freepik.com/free-vector/classic-watches-interface_250435-187.jpg?semt=ais_hybrid&w=740&q=80",
            "https://img.freepik.com/premium-photo/watch-with-red-black-face-word-s-it_862462-27969.jpg?semt=ais_hybrid&w=740&q=80",
          ].map((img, i) => (
            <div
              key={i}
              className="bg-[#111] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_25px_40px_rgba(0,255,0,0.35)] hover:-translate-y-3"
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

      <section>
       <img
  src="https://media.istockphoto.com/id/177547733/photo/wrist-watch.jpg?s=612x612&w=0&k=20&c=XwYy2SHk68baSF-iK104tAHEm2Jio5idYnriPYmkgHI="
  className="w-full h-56 object-cover object-top"
/>

      </section>
    </div>
  );
};

export default Home;
