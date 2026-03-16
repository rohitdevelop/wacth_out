"use client";

import { useState, useEffect, useRef } from "react";
import SallerForm from "@/components/sell/SallerForm";
import WacthForm from "@/components/sell/WacthForm";
import Footer from "@/components/Home/Footer";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Describe Your Watch",
    description:
      "Fill in your watch details — brand, model, condition, and photos.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-7 h-7"
      >
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <path d="M9 7h6M9 12h6M9 17h3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Your Information",
    description: "Provide your contact details so we can schedule a pickup.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-7 h-7"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "We Come to You",
    description: "Our courier picks up your watch directly from your location.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-7 h-7"
      >
        <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3" />
        <rect x="9" y="11" width="14" height="10" rx="1" />
        <circle cx="12" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Get Listed & Paid",
    description: "Your watch appears on our platform within 2–3 business days.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-7 h-7"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "How do you determine the value of my watch?",
    a: "Our certified horologists assess your watch based on brand, model, condition, service history, and current market demand. We use live auction data and recent sales to ensure you receive a fair and competitive valuation.",
  },
  {
    q: "Is my watch insured during pickup and listing?",
    a: "Yes. All watches in our possession are fully insured from the moment our courier picks them up until they are sold or returned to you. Your timepiece is treated with the utmost care.",
  },
  {
    q: "What percentage do you take from the sale?",
    a: "We operate on a transparent commission model — typically 8–12% depending on the watch's sale price. There are no hidden fees, listing charges, or upfront costs. You only pay when it sells.",
  },
  {
    q: "How long will it take for my watch to sell?",
    a: "Most luxury timepieces sell within 14–30 days of listing. High-demand models often sell within 72 hours. We actively market your piece to our network of 50,000+ verified buyers.",
  },
  {
    q: "What if I change my mind after submitting?",
    a: "You can withdraw your listing at any time before a sale is confirmed, free of charge. We believe in complete seller autonomy — no pressure, no penalties.",
  },
];

const carouselSlides = [
  {
    headline: "Turn Your Timepiece Into Value",
    sub: "The premium marketplace for pre-owned luxury watches.",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=900&q=80&fit=crop",
  },
  {
    headline: "Every Watch Has a Story",
    sub: "We help the right buyer find yours.",
    image:
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=900&q=80&fit=crop",
  },
  {
    headline: "Seamless. Secure. Swift.",
    sub: "Door-to-door pickup. Full insurance. Zero hassle.",
    image:
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=900&q=80&fit=crop",
  },
];

export default function SellPage() {
  const [sellerImage, setSellerImage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [slide, setSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [watchImage, setWatchImage] = useState<string | null>(null);

  const nextStep = () => {
    console.log("Go to seller form");
  };

  const prevStep = () => {
    console.log("Go to previous step");
  };
  const submit = () => {
    setSubmitted(true);
  };
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSlide((s) => (s + 1) % carouselSlides.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goToSlide = (i: number) => {
    setSlide(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSlide((s) => (s + 1) % carouselSlides.length);
    }, 5000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#080808] text-white gap-6">
        <div className="w-20 h-20 rounded-full border-2 border-[#00ff00] flex items-center justify-center mb-2 animate-pulse">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c9a84c"
            strokeWidth="2"
            className="w-10 h-10"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-light tracking-widest text-[#00ff00] uppercase">
          Listing Submitted
        </h1>
        <p className="text-neutral-400 text-lg tracking-wide">
          We will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white font-['Cormorant_Garamond',serif]">
      {/* ── HERO CAROUSEL ─────────────────────────────────────── */}
      <section className="relative w-full h-[92vh] min-h-[560px] overflow-hidden">
        {carouselSlides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === slide ? 1 : 0 }}
          >
            <Image
              src={s.image}
              alt={s.headline}
              width={500}
              height={500}
              className="w-full h-full object-cover scale-105"
              style={{ filter: "brightness(0.35)" }}
            />
          </div>
        ))}

        {/* Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            opacity: 0.4,
          }}
        />

        {/* Gold vertical accent */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#00ff00] to-transparent hidden md:block" />

        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 lg:px-32 max-w-5xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-none tracking-tight mb-6 transition-all duration-700">
            {carouselSlides[slide].headline}
          </h1>
          <p className="text-neutral-300 text-lg sm:text-xl font-['Montserrat',sans-serif] font-light tracking-wide max-w-lg mb-10">
            {carouselSlides[slide].sub}
          </p>
          <a
            href="#sell-form"
            className="inline-flex items-center gap-3 w-fit px-8 py-4 border border-white  text-sm tracking-[0.2em] uppercase font-['Montserrat',sans-serif] hover:bg-white hover:text-black transition-all duration-300"
          >
            Start Selling
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {carouselSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`transition-all duration-300 rounded-full ${i === slide ? "w-8 h-2 bg-[#00ff00]" : "w-2 h-2 bg-neutral-600 hover:bg-neutral-400"}`}
            />
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="py-28 px-6 md:px-16 lg:px-32 max-w-8xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-px bg-[#00ff00]" />
          <span className="text-[#00ff00] text-xs tracking-[0.35em] uppercase font-['Montserrat',sans-serif]">
            The Process
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-20">
          Four steps to
          <br />
          <em className="text-[#00ff00] not-italic">sell with confidence</em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-8 border border-neutral-800 hover:border-white transition-all duration-500 group"
            >
              {/* Step number background */}
              <div className="absolute top-6 right-6 text-[80px] font-light text-neutral-900 leading-none select-none group-hover:text-neutral-800 transition-colors duration-500 font-['Montserrat',sans-serif]">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="text-[#00ff00] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-light tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-['Montserrat',sans-serif] font-light">
                  {step.description}
                </p>
              </div>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-px w-px h-12 -translate-y-1/2 bg-[#c9a84c]/20" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── SELL FORM SECTION ─────────────────────────────────── */}
      <section
        id="sell-form"
        className="py-20 bg-[#0c0c0c] border-t border-b border-neutral-900"
      >
        <div className="max-w-8xl mx-auto px-6 md:px-16 lg:px-32">
          {/* Watch Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
            {/* Left: copy */}
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-px bg-[#00ff00]" />
                <span className="text-[#00ff00] text-xs tracking-[0.35em] uppercase font-['Montserrat',sans-serif]">
                  Step 01
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-light leading-tight tracking-tight mb-6">
                Tell us about
                <br />
                <em className="text-[#00ff00] not-italic">your watch</em>
              </h2>
              <p className="text-neutral-400 text-base leading-relaxed font-['Montserrat',sans-serif] font-light max-w-sm mb-8">
                The more detail you provide, the faster and higher your listing
                will perform. Be specific — buyers love accuracy.
              </p>
              <ul className="space-y-3">
                {[
                  "High-resolution images boost sale speed by 3×",
                  "Accurate condition grading builds buyer trust",
                  "Original box & papers increase value significantly",
                ].map((tip, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-['Montserrat',sans-serif] text-neutral-500"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff00] mt-2 shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: form */}
            <div className="bg-[#111] border border-neutral-800 p-8 md:p-10">
              <WacthForm
                watchImage={watchImage}
                setWatchImage={setWatchImage}
                nextStep={nextStep}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-6 mb-24">
            <div className="flex-1 h-px bg-neutral-800" />
            <div className="w-2 h-2 rotate-45 border border-[#00ff00]" />
            <div className="flex-1 h-px bg-neutral-800" />
          </div>

          {/* Seller Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="bg-[#111] border border-neutral-800 p-8 md:p-10 lg:order-1 order-1">
              <SallerForm
                sellerImage={sellerImage}
                setSellerImage={setSellerImage}
                prevStep={prevStep}
                submit={submit}
              />
            </div>

            <div className="lg:sticky lg:top-32 lg:order-1 order-2">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-px bg-[#00ff00]" />
                <span className="text-[#00ff00] text-xs tracking-[0.35em] uppercase font-['Montserrat',sans-serif]">
                  Step 02
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-light leading-tight tracking-tight mb-6">
                Your contact
                <br />
                <em className="text-[#00ff00] not-italic">information</em>
              </h2>
              <p className="text-neutral-400 text-base leading-relaxed font-['Montserrat',sans-serif] font-light max-w-sm mb-8">
                We use this solely to coordinate pickup and payment. Your data
                is never shared with third parties.
              </p>
              <div className="flex items-center gap-3 p-4 border border-neutral-800 bg-[#0a0a0a]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00ff00"
                  strokeWidth="1.5"
                  className="w-5 h-5 shrink-0"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                <p className="text-xs text-neutral-500 font-['Montserrat',sans-serif]">
                  All personal data is encrypted and stored securely per GDPR
                  compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────────────── */}
      <section className="py-16 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10,000+", label: "Watches Sold" },
              { value: "98%", label: "Seller Satisfaction" },
              { value: "£2.4M+", label: "Paid Out to Sellers" },
              { value: "48hr", label: "Average Pickup Time" },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-3xl sm:text-4xl font-light text-[#00ff00] tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-500 tracking-[0.2em] uppercase font-['Montserrat',sans-serif]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────────────── */}
      <section className="py-28 px-6 md:px-16 lg:px-32 max-w-8xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-px bg-[#00ff00]" />
          <span className="text-[#00ff00] text-xs tracking-[0.35em] uppercase font-['Montserrat',sans-serif]">
            Before You List
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-16">
          Common questions
          <br />
          <em className="text-[#00ff00] not-italic">from sellers</em>
        </h2>

        <div className=" space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-neutral-800 last:border-b">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between py-7 text-left group"
              >
                <span className="text-lg sm:text-xl font-light tracking-wide pr-8 group-hover:text-[#00ff00] transition-colors duration-300">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 border border-neutral-700 flex items-center justify-center transition-all duration-300 ${openFaq === i ? "border-[#00ff00] rotate-45" : "group-hover:border-[#00ff00]/50"}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-4 h-4"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${openFaq === i ? "max-h-40 pb-7" : "max-h-0"}`}
              >
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-['Montserrat',sans-serif] font-light">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER CTA ────────────────────────────────────────── */}
      <section className="py-28 px-6 text-center bg-[#0c0c0c] border-t border-neutral-900">
        <p className="text-[#00ff00] text-xs tracking-[0.35em] uppercase mb-6 font-['Montserrat',sans-serif]">
          Ready to begin?
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-10 max-w-2xl mx-auto">
          Your watch deserves
          <br />
          the right audience.
        </h2>
        <a
          href="#sell-form"
          className="inline-flex items-center gap-3 px-10 py-5 border text-sm tracking-[0.25em] uppercase font-['Montserrat',sans-serif] font-medium hover:bg-white hover:text-black transition-colors duration-300"
        >
          List My Watch
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-4 h-4"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </section>
      <Footer />
    </div>
  );
}
