"use client";

import { useState, useRef } from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Review {
  id: number;
  name: string;
  role: string;
  image: string;
  comment: string;
  rating: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?u=1",
    comment:
      "The interface is incredibly intuitive. It saved our team hours of work every week!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Designer",
    image: "https://i.pravatar.cc/150?u=2",
    comment:
      "Absolutely love the aesthetic and the performance. Highly recommend to everyone.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Marketing Director",
    image: "https://i.pravatar.cc/150?u=3",
    comment:
      "Great customer support and a very solid feature set. Worth every penny.",
    rating: 4,
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Founder",
    image: "https://i.pravatar.cc/150?u=4",
    comment:
      "A game changer for our startup. Scaling has never been this seamless.",
    rating: 5,
  },
  {
    id: 5,
    name: "Olivia Brown",
    role: "UX Researcher",
    image: "https://i.pravatar.cc/150?u=5",
    comment:
      "The attention to detail in this product is unmatched. Simply brilliant.",
    rating: 5,
  },
  {
    id: 6,
    name: "Daniel Park",
    role: "CTO",
    image: "https://i.pravatar.cc/150?u=6",
    comment:
      "Robust, reliable, and beautifully designed. Our entire engineering team is impressed.",
    rating: 5,
  },
  {
    id: 7,
    name: "Aisha Patel",
    role: "Head of Growth",
    image: "https://i.pravatar.cc/150?u=7",
    comment:
      "Conversion rates jumped 40% after switching. The data speaks for itself.",
    rating: 5,
  },
  {
    id: 8,
    name: "Lucas Meyer",
    role: "Full-Stack Dev",
    image: "https://i.pravatar.cc/150?u=8",
    comment:
      "Clean APIs, great docs, zero friction. This is how software should be built.",
    rating: 5,
  },
];

// ─── Star Component ────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="w-3.5 h-3.5"
          fill={i < rating ? "#00ff00" : "none"}
          stroke={i < rating ? "none" : "#333"}
          strokeWidth="1.5"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

// ─── Review Card ──────────────────────────────────────────────────────────────

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className="
        relative flex-shrink-0 w-[300px] sm:w-[320px]
        bg-[#111111] border border-[#1e1e1e] rounded-2xl p-6
        hover:border-[#00ff00]/20
        hover:shadow-[0_0_40px_rgba(0,255,0,0.05),0_20px_60px_rgba(0,0,0,0.5)]
        transition-all duration-300 cursor-default overflow-hidden
        group
      "
    >
      {/* Decorative big quote */}
      <span className="absolute -top-2 right-4 text-[100px] font-black leading-none text-[#00ff00] opacity-[0.04] select-none pointer-events-none">
        &ldquo;
      </span>

      {/* Stars + Verified */}
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={review.rating} />
        <CheckCircle className="w-4 h-4 text-[#00ff00] opacity-60" />
      </div>

      {/* Comment */}
      <p className="text-[#888] text-sm leading-relaxed italic font-light mb-6 min-h-[72px]">
        &ldquo;{review.comment}&rdquo;
      </p>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-[#00ff00]/20 to-transparent mb-5" />

      {/* Profile */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <Image
            src={review.image}
            alt={review.name}
            width={44}
            height={44}
            className="rounded-full object-cover border border-[#00ff00]/20"
            unoptimized
          />
          <span className="absolute inset-0 rounded-full ring-1 ring-[#00ff00]/10 group-hover:ring-[#00ff00]/30 transition-all duration-300" />
        </div>
        <div>
          <p className="text-white text-sm font-bold tracking-tight leading-tight">
            {review.name}
          </p>
          <p className="text-[#444] text-[10px] uppercase tracking-widest mt-0.5">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main Carousel ────────────────────────────────────────────────────────────

export default function ReviewCarousel() {
  const [paused, setPaused] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  // Triple for seamless CSS infinite loop
  const looped: Review[] = [...reviews, ...reviews, ...reviews];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.3334%); }
        }

        .ticker-track {
          animation: ticker 40s linear infinite;
          will-change: transform;
        }

        .ticker-track.paused {
          animation-play-state: paused;
        }

        /* Hide mobile scrollbar */
        .mobile-scroll::-webkit-scrollbar { display: none; }
        .mobile-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section
        className="relative bg-[#0a0a0a] overflow-hidden py-20"
        // style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Green radial glow */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 45% at 50% 0%, rgba(0,255,0,0.045) 0%, transparent 70%)",
          }}
        />

        {/* ── Header ── */}
        <div className="relative z-10 text-center px-6 mb-14">
          <p
            className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#00ff00] mb-4"
            // style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Testimonials
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            // style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Loved by{" "}
            <span className="text-[#00ff00]">thousands</span>
          </h2>
          <p className="text-[#555] text-sm font-light mt-3 max-w-sm mx-auto">
            Real feedback from the people who matter most.
          </p>
        </div>

        {/* ── Desktop: CSS Infinite Ticker ── */}
        <div
          className="hidden md:block relative overflow-hidden py-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Edge fades */}
          <div
            aria-hidden
            className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg, #0a0a0a 40%, transparent)" }}
          />
          <div
            aria-hidden
            className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
            style={{ background: "linear-gradient(-90deg, #0a0a0a 40%, transparent)" }}
          />

          {/* Ticker */}
          <div
            className={`ticker-track flex gap-6 w-max${paused ? " paused" : ""}`}
          >
            {looped.map((review, idx) => (
              <ReviewCard key={`${review.id}-${idx}`} review={review} />
            ))}
          </div>
        </div>

        {/* ── Mobile: Native Snap Scroll (no arrows) ── */}
        <div className="md:hidden">
          <div
            ref={mobileRef}
            className="mobile-scroll flex gap-5 overflow-x-auto px-6 snap-x snap-mandatory pb-2"
          >
            {reviews.map((review) => (
              <div key={review.id} className="snap-center flex-shrink-0">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Pause / Resume button (desktop only) ── */}
        <div className="hidden md:flex justify-center mt-10 relative z-10">
          <button
            onClick={() => setPaused((p) => !p)}
            className="
              px-6 py-2.5 border border-[#222] bg-[#111]
              text-[#555] text-[11px] font-bold tracking-[0.2em] uppercase
              hover:border-[#00ff00]/40 hover:text-[#00ff00]
              hover:shadow-[0_0_24px_rgba(0,255,0,0.12)]
              transition-all duration-300
            "
            // style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {paused ? "▶ Resume" : "⏸ Pause"}
          </button>
        </div>
 
      </section>
    </>
  );
}