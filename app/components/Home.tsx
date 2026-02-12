"use client";

import React from "react";

import Footer from "./Home/Footer";
import Hero from "./Home/Hero";
import Product from "./Home/Product";
import Category from "./Home/Category";
const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col pt-24">
      {/* Top Section (Text) */}
      <Hero />
      {/* ...................................................................................................................*/}
      <Product />
 <Category />
       {/* make a your spline sections make it more batter ............................. */}

      <Footer />
    </div>
  );
};

export default Home;
