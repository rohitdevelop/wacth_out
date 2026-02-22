"use client"

import Image from "next/image"
import React from "react"

const Hero: React.FC = () => {
  return (
    <div>

    
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pb-12">

      {/* Text Section */}
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-wide leading-tight">
          Welcome to Arvento
          <span className="text-[#00ff00]">Chrono</span>
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl font-light tracking-widest uppercase text-gray-300 mb-6">
          Luxury Watches That Define You
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-10 leading-relaxed  max-w-2xl mx-auto">
          Discover precision-crafted timepieces designed for those who value
          elegance, performance, and timeless craftsmanship. Elevate your
          style with watches that speak sophistication.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-6xl h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden shadow-2xl">
        <Image
          src="https://wallpapercave.com/wp/wp7968173.jpg"
          alt="Luxury Watch"
          fill
          priority
          className="object-cover"
        />
      </div>

    </section>


    </div>
  )
}

export default Hero
