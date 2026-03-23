 "use client";

export default function Navbar() {
  return (
    <div className="w-full h-16 bg-[#020617] flex items-center justify-between px-6 border-b border-green-700">
      
      <h2 className="text-lg text-green-400 font-semibold">
        Admin Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <span className="text-gray-300">Rohit</span>
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black font-bold">
          R
        </div>
      </div>

    </div>
  );
}