"use client";

import React from "react";

import Footer from "./Home/Footer";
import Hero from "./Home/Hero";
import Product from "./Home/Product";
import Category from "./Home/Category";
import Video from "./Home/Video";
import Information from "./Home/Information";
const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col pt-24">
      <Hero />
      <Category />
      <Video />
      <Product />
      <Information />
      <Footer />
    </div>
  );
};

export default Home;
