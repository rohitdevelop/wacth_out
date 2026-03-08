"use client";

import Image from "next/image";
import React, { useState } from "react";

interface CategoryType {
  id: number;
  name: string;
  description: string;
  img: string;
}

const categories: CategoryType[] = [
  {
    id: 1,
    name: "Women",
    description:
      "Elegant & Trendy Fashion lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
    img: "https://sc04.alicdn.com/kf/H4634df71c6824f0b9db86e57b379b9a0B.jpg",
  },
  {
    id: 2,
    name: "Men",
    description:
      "Sophisticated Style lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
    img: "https://ae01.alicdn.com/kf/HTB1pYwOOAzoK1RjSZFlq6yi4VXaT.jpg",
  },
  {
    id: 3,
    name: "Kids",
    description:
      "Playful & Comfortable lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
    img: "https://www.jiomart.com/images/product/original/rvkkwwkkhj/swadesi-stuff-digital-black-dial-multi-function-sports-watch-7-light-boys-girls-product-images-rvkkwwkkhj-2-202202280806.jpg",
  },
];

const Category = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-gray-950 via-black to-gray-900">
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">
              Collections
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Discover premium quality products curated just for you
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((item) => {
            const isActive = active === item.id;

            return (
              <div
                key={item.id}
                onClick={() =>
                  setActive(isActive ? null : item.id)
                }
                className="group relative overflow-hidden rounded-3xl cursor-pointer w-full shadow-2xl shadow-emerald-900/10 h-[420px] sm:h-[500px] lg:h-[550px]"
              >
                {/* Image */}
                <div className="relative h-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 "
                    priority
                  />

                  {/* Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 ${
                      isActive
                        ? "opacity-90"
                        : "opacity-80 group-hover:opacity-90"
                    }`}
                  />

                  {/* Green Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-green-900 via-emerald-900/10 to-transparent transition-opacity duration-500 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <h3
                    className={`text-2xl sm:text-4xl font-bold text-white mb-2 transition-all duration-500 ${
                      isActive
                        ? "opacity-100 -translate-y-2"
                        : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:-translate-y-2"
                    }`}
                  >
                    {item.name}
                  </h3>

                  <p
                    className={`text-gray-300 text-sm sm:text-base mb-4 transition-all duration-500 ${
                      isActive
                        ? "opacity-100 -translate-y-2"
                        : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:-translate-y-2"
                    }`}
                  >
                    {item.description}
                  </p>

                  <button
                    className={`flex items-center gap-2 text-emerald-400 font-semibold text-sm sm:text-base transition-all duration-500 ${
                      isActive
                        ? "opacity-100 -translate-y-2"
                        : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:-translate-y-2"
                    }`}
                  >
                    Shop Now
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 sm:px-10 sm:py-4 bg-white text-black font-bold hover:bg-gray-100">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;