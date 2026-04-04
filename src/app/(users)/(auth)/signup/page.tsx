"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../../../../../hooks/useAuth";
import { UserForm } from "../../../../../types/auth";
 const Page = () => {
  const [user, setUser] = useState<UserForm>({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
  });

  const { handleSignup } = useAuth();
  const handlChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

     await handleSignup({
      name: user.name,
      email: user.email,
      password: user.password,
      age: Number(user.age),
      gender: user.gender,
    });
     // optional: clear form
    setUser({
      name: "",
      email: "",
      password: "",
      age: "",
      gender: "",
    });

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
        pt-24 pb-20 sm:pt-28 sm:pb-24  
      "
      >
        {/* WHITE CARD */}
        <div
          className="w-full max-w-md bg-gradient-to-l from-black via-zinc-950 to-green-950/80 backdrop-blur-xl border-r shadow-[0_0_30px_rgba(0,255,0,0.05)] border border-neutral-600  px-6 py-6 sm:px-8 sm:py-8 md:p-10"
        >
          {/* Heading */}
          <div className="mb-4 text-center">
            <h1 className="text-2xl sm:text-3xl font-semibold text-white">
              Create <span className="text-[#00ff00]">Account</span>
            </h1>
            <p className="text-neutral-500 text-sm">
              Join the premium experience
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {/* Name */}
            <div>
              <label className="text-sm text-neutral-400">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={user.name}
                onChange={handlChange}
                className="w-full mt-1 p-3 border text-white border-neutral-500 focus:border-[#00ff00] outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-neutral-400">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handlChange}
                placeholder="Enter your email"
                className="w-full mt-1 p-3 border text-white border-neutral-500 focus:border-[#00ff00] outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-neutral-400">Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handlChange}
                placeholder="Enter password"
                className="w-full mt-1 p-3 border text-white border-neutral-500 focus:border-[#00ff00] outline-none"
              />
            </div>

            {/* Age & Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-neutral-400">Age</label>
                <input
                  type="number"
                  onChange={handlChange}
                  name="age"
                  value={user.age}
                  placeholder="Age"
                  className="w-full mt-1 p-3 border text-white border-neutral-500 focus:border-[#00ff00] outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-neutral-400">Gender</label>
                <select
                  name="gender"
                  value={user.gender}
                  onChange={handlChange}
                  className="w-full bg-black mt-1 p-3 border text-white border-neutral-500 focus:border-[#00ff00] outline-none"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-black text-white border border-white py-3 cursor-pointer font-semibold hover:bg-white hover:text-black transition"
            >
              Sign Up
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-neutral-500">
            Already have an account?{" "}
            <Link href={"/login"}>
              <span className="font-medium text-[#00ff00] cursor-pointer">
                Sign In
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
