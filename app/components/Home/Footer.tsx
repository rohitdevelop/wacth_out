import React from 'react'

const Footer = () => {
  return (
    <div>
      
      <footer className="relative bg-black overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-rfrom-transparent via-[#00ff00] to-transparent opacity-50"></div>

        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
          linear-gradient(#00ff00 1px, transparent 1px),
          linear-gradient(90deg, #00ff00 1px, transparent 1px)
        `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]
                  bg-[#00ff00] opacity-5 blur-[150px] rounded-full"
        />

        {/* Massive Background Text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <h1
            className="text-[10vw] lg:text-[15vw] font-black 
                   text-transparent bg-clip-text bg-gradient-to-b
                   from-white/10 to-transparent select-none 
                   whitespace-nowrap"
          >
            ArventoChrono
          </h1>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12"></div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-rfrom-transparent via-[#00ff00] to-transparent opacity-50"></div>
      </footer>
    </div>
  )
}

export default Footer
