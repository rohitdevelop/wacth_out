"use client";

import Footer from "@/components/Home/Footer";
import SideNavbar from "@/components/shop/SideNavbar";
import TopNav from "@/components/shop/TopNav";

export default function SellPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* 🔝 TOP NAV */}
      <div className="fixed top-0 left-0 w-full z-50 h-16">
        <TopNav />
      </div>

      {/* 📌 SIDEBAR */}
      <div className="fixed top-16 left-0 z-40">
        <SideNavbar />
      </div>

      {/* 🧠 MAIN CONTENT */}
      <main
        className="
          pt-20
          ml-16 lg:ml-64
          p-4 md:p-6
          transition-all duration-300
        "
      >
        klasjhdfjsadfl
      </main>

      <Footer />
    </div>
  );
}