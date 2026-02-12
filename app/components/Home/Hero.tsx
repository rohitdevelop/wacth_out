import React from 'react'

const Hero = () => {
  return (
    <div>
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
    </div>
  )
}

export default Hero
