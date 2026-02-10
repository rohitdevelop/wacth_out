"use client";

import React from "react";
import Spline from "@splinetool/react-spline";
import Splinecene from "./Splinecene";
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

 <section className="min-h-screen">
  {/* Section 1 */}
  <div className="flex flex-col lg:flex-row items-center">
    
    {/* Left — Spline */}
    <div className="w-full lg:w-1/2 h-[70vh] ">
      <Spline scene="https://prod.spline.design/G4Hgw7ruqJepTCl9/scene.splinecode" />
    </div>

    {/* Right — Text */}
    <div className="w-full lg:w-1/2 px-8 lg:px-16 py-10">
      <h2 className="text-4xl lg:text-5xl font-bold mb-6">
        Timeless Precision Watches
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed">
        Experience the perfect blend of innovation, craftsmanship, and luxury.
        Our premium watch collection is designed for those who value precision,
        performance, and timeless elegance. Every detail is carefully engineered
        to deliver unmatched comfort and sophisticated style for everyday wear.
      </p>
    </div>
  </div>

  {/* Section 2 */}
<div className="flex flex-col lg:flex-row items-center w-full min-h-screen bg-black ">

  {/* Left — Text */}
  <div className="w-full lg:w-1/2 px-8 lg:px-16 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
      Designed for Modern Lifestyle
    </h2>

    <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
      Crafted with premium materials and advanced technology, our watches are
      built to complement both professional and casual lifestyles. Elevate
      your presence with a design that speaks confidence, durability, and
      refined aesthetics.
    </p>
  </div>

  {/* Right — Spline */}
  <div className="w-full lg:w-1/2 h-[70vh] lg:h-screen flex items-center justify-center">
    <Spline scene="https://prod.spline.design/YI3wyyAfwxlBhqqb/scene.splinecode" />
  </div>
</div>

</section>



















 {/* <footer>
         <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          excepturi similique porro. Quod officia hic obcaecati soluta
          inventore, consequuntur perspiciatis nulla aliquam voluptates esse
          facere alias nesciunt labore accusamus amet quas praesentium ullam.
          Modi obcaecati atque suscipit quam nesciunt dolor nam nostrum minima
          tenetur error accusamus eveniet rem vel, totam deserunt explicabo
          dignissimos dicta illum repellat iusto. Quod dolores aspernatur
          debitis ducimus odio neque. Vitae laboriosam numquam incidunt, rerum
          quisquam pariatur, ut culpa laborum eaque voluptatibus architecto
          cupiditate vel?
        </p>

        <img
          src="https://media.istockphoto.com/id/177547733/photo/wrist-watch.jpg?s=612x612&w=0&k=20&c=XwYy2SHk68baSF-iK104tAHEm2Jio5idYnriPYmkgHI="
          className="w-full h-96 object-cover "
        />
  </footer> */}
    </div>
  );
};

export default Home;
