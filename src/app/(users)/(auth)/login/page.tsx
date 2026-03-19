"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signinuser } from "../../../../../api/auth/auth.api"; // Your login API function

const Page = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signinuser(user);
      console.log(res);
      
      // Clear form
      setUser({
        email: "",
        password: "",
      });

      // Redirect after login (change path if needed)
      router.push("/"); // example path
    } catch (err: any) {
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex bg-black text-black overflow-hidden">
      {/* LEFT SIDE IMAGE */}
      <div className="relative hidden lg:block lg:w-1/2 h-screen">
        <Image
          src="https://wallpapers.com/images/hd/watch-background-2pb4by7o5s7o0vr0.jpg"
          alt="Luxury Watch"
          fill
          priority
          className="object-cover brightness-100"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black" />
      </div>

      {/* RIGHT SIDE FORM */}
      <div
        className="w-full lg:w-1/2 flex items-center justify-center 
        px-4 sm:px-6 md:px-10 lg:px-12 
        pt-24 pb-20 sm:pt-28 sm:pb-24"
      >
        {/* WHITE CARD */}
        <div
          className="w-full max-w-md 
          bg-[#111] border border-neutral-800 shadow-2xl 
          px-6 py-6 sm:px-8 sm:py-8 md:p-10"
        >
          {/* Heading */}
          <div className="mb-4 text-center">
            <h1 className="text-2xl sm:text-3xl font-semibold text-white">
              Sign <span className="text-[#00ff00]">In</span>
            </h1>
            <p className="text-neutral-500 text-sm">
              Join the premium experience
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {/* Email */}
            <div>
              <label className="text-sm text-neutral-400">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={handleChange}
                className="w-full mt-1 p-3 border text-white border-neutral-500 focus:border-[#00ff00] outline-none"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-neutral-400">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={user.password}
                onChange={handleChange}
                className="w-full mt-1 p-3 border text-white border-neutral-500 focus:border-[#00ff00] outline-none"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-black text-white border border-white py-3 font-semibold hover:bg-white hover:text-black transition"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-neutral-500">
            Don't have an account?{" "}
            <Link href={"/signup"}>
              <span className="font-medium text-[#00ff00] cursor-pointer">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;