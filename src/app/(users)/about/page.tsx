"use client";

import Footer from "@/components/Home/Footer";
import Image from "next/image";

const G = "#00ff00";

const stats = [
  { value: "12K+", label: "Watches Sold" },
  { value: "98%", label: "Happy Customers" },
  { value: "150+", label: "Premium Brands" },
  { value: "5yr", label: "Of Excellence" },
];

const features = [
  {
    icon: "◷",
    title: "Swiss Precision",
    desc: "Every piece inspected against the highest horological standards before reaching your wrist.",
  },
  {
    icon: "◈",
    title: "Authenticated & Certified",
    desc: "Certificate of authenticity and manufacturer warranty included with every timepiece.",
  },
  {
    icon: "◻",
    title: "Secure Payments",
    desc: "Bank-grade encryption with 20+ payment methods including flexible installment plans.",
  },
  {
    icon: "◫",
    title: "White Glove Delivery",
    desc: "Insured express shipping in a luxury gift box with real-time tracking.",
  },
  {
    icon: "◉",
    title: "Expert Consultation",
    desc: "Master watchmakers available 24/7 to help you find the perfect timepiece.",
  },
  {
    icon: "◑",
    title: "2-Year Service Plan",
    desc: "Free servicing, battery replacements, and strap changes for two full years.",
  },
];

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CEO, Mumbai",
    initials: "RS",
    quote:
      "Delivered a flawless Rolex in 48 hours. The packaging alone felt like an event.",
  },
  {
    name: "Priya Mehta",
    role: "Architect, Delhi",
    initials: "PM",
    quote:
      "Authentication certificate and white-glove unboxing won me over completely.",
  },
  {
    name: "Aditya Verma",
    role: "Investor, Bangalore",
    initials: "AV",
    quote:
      "Third purchase this year. Expert consultation helped me pick a watch I'll cherish forever.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden
        >
          <div className="absolute w-[480px] h-[480px] rounded-full border border-[#00ff00]/8" />
          <div className="absolute w-[320px] h-[320px] rounded-full border border-[#00ff00]/5" />
          <div className="absolute w-[640px] h-[640px] rounded-full border border-white/3" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_50%,rgba(0,255,0,0.04),transparent)] pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <p
            className="text-xs tracking-[.3em] uppercase mb-5"
            style={{ color: `${G}88` }}
          >
            Est. 2019 · Premium Timepieces
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.05] mb-6">
            About{" "}
            <span className="font-semibold" style={{ color: G }}>
              ArventoChrono
            </span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            We curate the worlds finest timepieces for those who understand that
            true luxury is measured in precision — not just style.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              className="px-8 py-3.5 rounded-full text-black text-sm font-semibold tracking-wide hover:brightness-110"
              style={{ background: G }}
            >
              Explore Collection
            </button>
            <button className="px-8 py-3.5 rounded-full text-sm border border-white/15 text-white/70 hover:bg-white/5">
              Our Story ↓
            </button>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <div className="border-y border-white/5 bg-[#0a0a0a] py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="font-mono text-4xl md:text-5xl font-light mb-1"
                style={{ color: G }}
              >
                {s.value}
              </p>
              <p className="text-xs text-white/40 tracking-widest uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── STORY ────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-3 rounded-2xl border border-[#00ff00]/8 -z-10" />
          <Image
            src="https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&w=900&q=80"
            alt="Luxury watch"
            width={500}
            height={500}
            className="w-full  object-cover rounded-2xl"
          />
          <div className="absolute -bottom-4 -right-4 bg-[#111] border border-[#00ff00]/20 rounded-xl px-5 py-4">
            <p className="font-mono text-2xl" style={{ color: G }}>
              150+
            </p>
            <p className="text-xs text-white/40 mt-0.5">Curated Brands</p>
          </div>
        </div>

        <div>
          <p
            className="text-xs tracking-[.25em] uppercase mb-4"
            style={{ color: `${G}70` }}
          >
            Our Origin
          </p>
          <h2 className="text-4xl md:text-5xl font-light leading-tight">
            Born from a love
            <br />
            <span className="font-semibold" style={{ color: G }}>
              of horology
            </span>
          </h2>
          <div className="w-12 h-px my-6" style={{ background: G }} />
          <p className="text-white/50 leading-relaxed mb-4">
            ArventoChrono started in 2019 with a simple idea — make luxury
            watches accessible to everyone who appreciates craftsmanship and
            precision.
          </p>
          <p className="text-white/50 leading-relaxed mb-8">
            Today we partner directly with 150+ brands, from revered Swiss
            manufactures to independent ateliers, delivering timepieces as
            extraordinary as the moments you wear them for.
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80"
              alt="Founder"
              width={500}
              height={500}
              className="w-10 h-10 rounded-full object-cover border border-white/15"
            />
            <div>
              <p className="text-sm font-medium">Arjun Arvento</p>
              <p className="text-xs text-white/40">
                Founder & Master Watchmaker
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[.25em] uppercase mb-3"
              style={{ color: `${G}70` }}
            >
              Why Choose Us
            </p>
            <h2 className="text-4xl font-light">The ArventoChrono promise</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[#111] border border-white/5 rounded-2xl p-7 hover:border-[#00ff0030] transition-colors h-full"
              >
                <span className="text-2xl mb-4 block" style={{ color: G }}>
                  {f.icon}
                </span>
                <h3 className="font-semibold text-base mb-2">{f.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs tracking-[.25em] uppercase mb-3"
              style={{ color: `${G}70` }}
            >
              Stories
            </p>
            <h2 className="text-4xl font-light">From our collectors</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#111] border border-white/5 rounded-2xl p-7 flex flex-col h-full hover:border-[#00ff0030] transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, k) => (
                    <svg
                      key={k}
                      viewBox="0 0 12 12"
                      className="w-3 h-3"
                      fill={G}
                    >
                      <path d="M6 1l1.35 2.73 3.01.44-2.18 2.12.51 3-2.69-1.42L3.31 9.29l.51-3L1.64 4.17l3.01-.44z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/55 text-sm leading-relaxed italic flex-1"></p>
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-medium text-black"
                    style={{ background: G }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-white/35">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto rounded-3xl border border-[#00ff00]/15 bg-[#0a0a0a] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_50%,rgba(0,255,0,0.05),transparent)] pointer-events-none" />
          <div className="relative z-10">
            <p
              className="text-xs tracking-[.28em] uppercase mb-4"
              style={{ color: `${G}60` }}
            >
              Your Next Chapter
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Find the watch
              <br />
              <span className="font-semibold" style={{ color: G }}>
                that defines you
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
              <button
                className="px-9 py-4 rounded-full text-black font-semibold text-sm tracking-wide hover:brightness-110"
                style={{ background: G }}
              >
                Shop Collection
              </button>
              <button
                className="px-9 py-4 rounded-full text-sm border hover:bg-white/5"
                style={{ borderColor: `${G}30`, color: `${G}cc` }}
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
