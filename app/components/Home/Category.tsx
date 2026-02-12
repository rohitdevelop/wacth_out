// "use client"
// import React, { useEffect, useState } from "react"

// const categories = [
//   { id: 1, title: "Luxury Watches", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
//   { id: 2, title: "Smart Watches", img: "https://images.unsplash.com/photo-1511732351157-1865efcb7b7e" },
//   { id: 3, title: "Classic Edition", img: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5" },
//   { id: 4, title: "Sport Series", img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df" },
//   { id: 5, title: "Minimal Design", img: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6" },
//   { id: 6, title: "Limited Edition", img: "https://images.unsplash.com/photo-1484704849700-f032a568e944" },
// ]

// const Category = () => {
//   const [current, setCurrent] = useState(0)
//   const [isTransitioning, setIsTransitioning] = useState(false)

//   // Auto Slide with smooth loop
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide()
//     }, 4000)
//     return () => clearInterval(interval)
//   }, [current])

//   const nextSlide = () => {
//     if (isTransitioning) return
//     setIsTransitioning(true)
//     setCurrent((prev) => (prev + 1) % categories.length)
//     setTimeout(() => setIsTransitioning(false), 600)
//   }

//   const prevSlide = () => {
//     if (isTransitioning) return
//     setIsTransitioning(true)
//     setCurrent((prev) => (prev === 0 ? categories.length - 1 : prev - 1))
//     setTimeout(() => setIsTransitioning(false), 600)
//   }

//   const goToSlide = (index) => {
//     if (isTransitioning || index === current) return
//     setIsTransitioning(true)
//     setCurrent(index)
//     setTimeout(() => setIsTransitioning(false), 600)
//   }

//   // Get indices for visible cards
//   const getPrevIndex = () => (current === 0 ? categories.length - 1 : current - 1)
//   const getNextIndex = () => (current + 1) % categories.length

//   return (
//     <section className="bg-gradient-to-b from-black via-green-950 to-black py-10 text-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="text-center mb-12 sm:mb-16 lg:mb-20">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-3 sm:mb-4">
//             Explore <span className="font-bold">Categories</span>
//           </h2>
//           <span className="text-amber-500 text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase">
//             Collections
//           </span>
//         </div>

//         {/* 3D Carousel Container */}
//         <div className="relative h-[200px] sm:h-[400px] lg:h-[500px] flex items-center justify-center mb-8 sm:mb-12">
          
//           {/* Left Card (Back) - Hidden on mobile */}
//           <div
//             className="hidden md:block absolute left-[5%] lg:left-[12%] xl:left-[15%] z-10 cursor-pointer transition-all duration-600 ease-out"
//             onClick={prevSlide}
//             style={{
//               transform: isTransitioning ? 'translateX(-30px) scale(0.7)' : 'translateX(0) scale(0.75)',
//               opacity: isTransitioning ? 0.2 : 0.4
//             }}
//           >
//             <div className="relative w-[100px] lg:w-[200px] xl:w-[200px] h-[200px] lg:h-[340px] xl:h-[380px] rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl hover:opacity-60 transition-opacity duration-300">
//               <img
//                 src={`${categories[getPrevIndex()].img}?auto=format&fit=crop&w=800&q=80`}
//                 alt={categories[getPrevIndex()].title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/50" />
//               <div className="absolute inset-0 backdrop-blur-sm" />
//               <div className="absolute bottom-4 left-2 right-12">
//                 <h4 className="text-sm lg:text-base font-semibold truncate">
//                   {categories[getPrevIndex()].title}
//                 </h4>
//               </div>
//             </div>
//           </div>
//           <div
//             className="hidden md:block absolute left-[5%] lg:left-[12%] xl:left-[15%] z-10 cursor-pointer transition-all duration-600 ease-out"
//             onClick={prevSlide}
//             style={{
//               transform: isTransitioning ? 'translateX(-30px) scale(0.7)' : 'translateX(0) scale(0.75)',
//               opacity: isTransitioning ? 0.2 : 0.4
//             }}
//           >
//             <div className="relative w-[180px] lg:w-[220px] xl:w-[250px] h-[280px] lg:h-[340px] xl:h-[380px] rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl hover:opacity-60 transition-opacity duration-300">
//               <img
//                 src={`${categories[getPrevIndex()].img}?auto=format&fit=crop&w=800&q=80`}
//                 alt={categories[getPrevIndex()].title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/50" />
//               <div className="absolute inset-0 backdrop-blur-sm" />
//               <div className="absolute bottom-4 left-4 right-4">
//                 <h4 className="text-sm lg:text-base font-semibold truncate">
//                   {categories[getPrevIndex()].title}
//                 </h4>
//               </div>
//             </div>
//           </div>

//           {/* Center Card (Front) */}
//           <div 
//             className="relative z-30 transition-all duration-600 ease-out"
//             style={{
//               transform: isTransitioning ? 'scale(0.95)' : 'scale(1)',
//               opacity: isTransitioning ? 0.7 : 1
//             }}
//           >
//             <div className="relative w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] h-[380px] sm:h-[440px] md:h-[480px] lg:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] group">
              
//               {/* Image */}
//               <img
//                 src={`${categories[current].img}?auto=format&fit=crop&w=1000&q=90`}
//                 alt={categories[current].title}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />
              
//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
              
//               {/* Border Glow */}
//               <div className="absolute inset-0 border-2 border-green-500/20 rounded-2xl sm:rounded-3xl" />
              
//               {/* Content */}
//               <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8">
//                 <div className="mb-2 sm:mb-3">
//                   <span className="text-amber-400 text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase">
//                     Collection
//                   </span>
//                 </div>
//                 <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4 leading-tight">
//                   {categories[current].title}
//                 </h3>
//                 <button className="bg-white text-black px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-amber-500 hover:text-white transition-all duration-300 flex items-center gap-2 group/btn">
//                   View Collection
//                   <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>

              
//             </div>
//           </div>

//           {/* Right Card (Back) - Hidden on mobile */}
//           <div
//             className="hidden md:block absolute right-[5%] lg:right-[12%] xl:right-[15%] z-10 cursor-pointer transition-all duration-600 ease-out"
//             onClick={nextSlide}
//             style={{
//               transform: isTransitioning ? 'translateX(30px) scale(0.7)' : 'translateX(0) scale(0.75)',
//               opacity: isTransitioning ? 0.2 : 0.4
//             }}
//           >
//             <div className="relative w-[180px] lg:w-[220px] xl:w-[250px] h-[280px] lg:h-[340px] xl:h-[380px] rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl hover:opacity-60 transition-opacity duration-300">
//               <img
//                 src={`${categories[getNextIndex()].img}?auto=format&fit=crop&w=800&q=80`}
//                 alt={categories[getNextIndex()].title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/50" />
//               <div className="absolute inset-0 backdrop-blur-sm" />
//               <div className="absolute bottom-4 left-4 right-4">
//                 <h4 className="text-sm lg:text-base font-semibold truncate">
//                   {categories[getNextIndex()].title}
//                 </h4>
//               </div>
//             </div>
//           </div>
//           <div
//             className="hidden md:block absolute right-[5%] lg:right-[12%] xl:right-[15%] z-10 cursor-pointer transition-all duration-600 ease-out"
//             onClick={nextSlide}
//             style={{
//               transform: isTransitioning ? 'translateX(30px) scale(0.7)' : 'translateX(0) scale(0.75)',
//               opacity: isTransitioning ? 0.2 : 0.4
//             }}
//           >
//             <div className="relative w-[180px] lg:w-[220px] xl:w-[250px] h-[280px] lg:h-[340px] xl:h-[380px] rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl hover:opacity-60 transition-opacity duration-300">
//               <img
//                 src={`${categories[getNextIndex()].img}?auto=format&fit=crop&w=800&q=80`}
//                 alt={categories[getNextIndex()].title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/50" />
//               <div className="absolute inset-0 backdrop-blur-sm" />
//               <div className="absolute bottom-4 left-4 right-4">
//                 <h4 className="text-sm lg:text-base font-semibold truncate">
//                   {categories[getNextIndex()].title}
//                 </h4>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={prevSlide}
//             disabled={isTransitioning}
//             className="absolute left-2 sm:left-4 lg:left-6 xl:left-8 z-40 bg-white/5 backdrop-blur-xl p-2.5 sm:p-3 lg:p-4 rounded-full hover:bg-white/10 transition-all duration-300 border border-white/10 group disabled:opacity-50 disabled:cursor-not-allowed"
//             aria-label="Previous"
//           >
//             <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           <button
//             onClick={nextSlide}
//             disabled={isTransitioning}
//             className="absolute right-2 sm:right-4 lg:right-6 xl:right-8 z-40 bg-white/5 backdrop-blur-xl p-2.5 sm:p-3 lg:p-4 rounded-full hover:bg-white/10 transition-all duration-300 border border-white/10 group disabled:opacity-50 disabled:cursor-not-allowed"
//             aria-label="Next"
//           >
//             <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>

//           {/* Swipe Indicator - Mobile Only */}
//           <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 animate-pulse">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
//             </svg>
//             <span className="text-xs">Swipe</span>
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </div>
//         </div>
     
//       </div>
//     </section>
//   )
// }

// export default Category














"use client"
import React, { useEffect, useState } from "react"

const categories = [
  { id: 1, title: "Luxury Watches", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
  { id: 2, title: "Smart Watches", img: "https://images.unsplash.com/photo-1511732351157-1865efcb7b7e" },
  { id: 3, title: "Classic Edition", img: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5" },
  { id: 4, title: "Sport Series", img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df" },
  { id: 5, title: "Minimal Design", img: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6" },
  { id: 6, title: "Limited Edition", img: "https://images.unsplash.com/photo-1484704849700-f032a568e944" },
]

export default function Category() {
  const [current, setCurrent] = useState(0)

  // ✅ Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % categories.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % categories.length)
  }

  const prevIndex =
    current === 0 ? categories.length - 1 : current - 1
  const nextIndex =
    (current + 1) % categories.length

  return (
    <section className="bg-black py-16 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Explore Categories
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center h-[450px]">

          {/* Left Card */}
          <div
            onClick={prevSlide}
            className="hidden md:block absolute left-0 cursor-pointer opacity-40 hover:opacity-70 transition-all duration-500"
          >
            <img
              src={`${categories[prevIndex].img}?auto=format&fit=crop&w=800&q=80`}
              alt=""
              className="w-[200px] h-[300px] object-cover rounded-xl"
            />
          </div>

          {/* Center Card */}
          <div className="z-20 transition-all duration-700 ease-in-out">
            <img
              src={`${categories[current].img}?auto=format&fit=crop&w=1000&q=90`}
              alt=""
              className="w-[320px] md:w-[400px] h-[400px] object-cover rounded-2xl shadow-2xl"
            />
            <h3 className="text-center text-2xl mt-4 font-semibold">
              {categories[current].title}
            </h3>
          </div>

          {/* Right Card */}
          <div
            onClick={nextSlide}
            className="hidden md:block absolute right-0 cursor-pointer opacity-40 hover:opacity-70 transition-all duration-500"
          >
            <img
              src={`${categories[nextIndex].img}?auto=format&fit=crop&w=800&q=80`}
              alt=""
              className="w-[200px] h-[300px] object-cover rounded-xl"
            />
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-6 bg-white/10 p-3 rounded-full"
          >
            ◀
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-6 bg-white/10 p-3 rounded-full"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  )
}
