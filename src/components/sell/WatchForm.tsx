"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";

type Props = {
  watchImage: string | null;
  setWatchImage: (img: string) => void;
 
};

const conditions = ["New", "Excellent", "Good", "Fair"];

export default function WatchForm({ watchImage, setWatchImage }: Props) {
  const [focused, setFocused] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [condition, setCondition] = useState<string | null>(null);
  const [values, setValues] = useState({ brand: "", model: "", price: "", description: "" });

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setWatchImage(URL.createObjectURL(file));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) setWatchImage(URL.createObjectURL(file));
  };

  const handleChange = (field: string) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const fields = [
    {
      key: "brand",
      label: "Brand",
      placeholder: "Rolex, Omega, Patek Philippe…",
      type: "text",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
        </svg>
      ),
    },
    {
      key: "model",
      label: "Model / Reference",
      placeholder: "Submariner 126610LN",
      type: "text",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
          <rect x="6" y="2" width="12" height="20" rx="2" />
          <path d="M9 7h6M9 12h4" />
        </svg>
      ),
    },
    {
      key: "price",
      label: "Asking Price (₹)",
      placeholder: "250,000",
      type: "number",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative" style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* Section label */}
      <div className="flex items-center gap-3 mb-8">
        <span className="w-6 h-px bg-[#00ff00]" />
        <span
          className="text-[#00ff00] text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Watch Details
        </span>
      </div>

      <div className="space-y-5">

        {/* Image Upload */}
        <div>
          <label className="block text-xs tracking-[0.15em] uppercase text-neutral-500 mb-2">
            Watch Photo <span className="text-neutral-700 normal-case tracking-normal">(optional)</span>
          </label>
          <label
            className={`
              relative flex flex-col items-center justify-center h-44 border cursor-pointer
              transition-all duration-300 overflow-hidden group
              ${isDragging ? "border-[#00ff00] bg-[#c9a84c]/5" : "border-neutral-700 hover:border-[#00ff00]/50 bg-[#0a0a0a]"}
            `}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
          >
            {watchImage ? (
              <>
                <Image
                  src={watchImage}
                  alt="Watch"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                  <span className="text-xs text-white/70 tracking-wider">Change Photo</span>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center gap-3 text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300">
                {/* Watch icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-9 h-9">
                  <rect x="7" y="6" width="10" height="12" rx="5" />
                  <path d="M9 6V4h6v2M9 18v2h6v-2" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M12 10v2l1 1" />
                </svg>
                <div className="text-center">
                  <p className="text-xs tracking-wider mb-0.5">
                    Drop image or <span className="text-[#00ff00]">browse</span>
                  </p>
                  <p className="text-[10px] text-neutral-700">JPG, PNG — max 10MB</p>
                </div>
              </div>
            )}
            <input type="file" accept="image/*" className="hidden" onChange={handleImage} />
          </label>
        </div>

        {/* Text fields */}
        {fields.map(({ key, label, placeholder, type, icon }) => (
          <div key={key}>
            <label className="block text-xs tracking-[0.15em] uppercase text-neutral-500 mb-2">
              {label}
            </label>
            <div className="relative">
              <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focused === key ? "text-[#00ff00]" : "text-neutral-600"}`}>
                {icon}
              </div>
              <input
                type={type}
                value={values[key as keyof typeof values]}
                onChange={handleChange(key)}
                onFocus={() => setFocused(key)}
                onBlur={() => setFocused(null)}
                placeholder={placeholder}
                className={`
                  w-full bg-[#0a0a0a] pl-11 pr-4 py-3.5 text-sm text-white placeholder-neutral-700
                  border transition-all duration-300 outline-none tracking-wide
                  ${focused === key
                    ? "border-[#00ff00] shadow-[0_0_0_1px_rgba(201,168,76,0.15)]"
                    : "border-neutral-800 hover:border-neutral-600"
                  }
                `}
              />
              {values[key as keyof typeof values] && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" className="w-3.5 h-3.5">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Condition selector */}
        <div>
          <label className="block text-xs tracking-[0.15em] uppercase text-neutral-500 mb-2">
            Condition
          </label>
          <div className="grid grid-cols-4 gap-2">
            {conditions.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCondition(c)}
                className={`
                  py-2.5 text-xs tracking-[0.15em] uppercase border transition-all duration-300
                  ${condition === c
                    ? "border-[#00ff00] text-[#00ff00] bg-[#c9a84c]/8"
                    : "border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-400"
                  }
                `}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs tracking-[0.15em] uppercase text-neutral-500 mb-2">
            Description
          </label>
          <div className="relative">
            <textarea
              value={values.description}
              onChange={handleChange("description")}
              onFocus={() => setFocused("description")}
              onBlur={() => setFocused(null)}
              placeholder="Year of purchase, service history, accessories included, reason for selling…"
              rows={4}
              className={`
                w-full bg-[#0a0a0a] px-4 py-3.5 text-sm text-white placeholder-neutral-700
                border transition-all duration-300 outline-none tracking-wide resize-none leading-relaxed
                ${focused === "description"
                  ? "border-[#00ff00] shadow-[0_0_0_1px_rgba(201,168,76,0.15)]"
                  : "border-neutral-800 hover:border-neutral-600"
                }
              `}
            />
            <div className="absolute bottom-3 right-3 text-[10px] text-neutral-700 tabular-nums">
              {values.description.length} / 500
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <button
        
        className="w-full mt-10 flex items-center justify-center gap-3 px-8 py-4 text-white border text-xs tracking-[0.25em] uppercase font-semibold hover:bg-white hover:text-black  transition-all duration-300 group"
      >
        <span>Continue to Seller Info</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>

      {/* Step indicator */}
      <div className="flex items-center gap-2 mt-6 justify-center">
        <span className="w-6 h-0.5 bg-[#00ff00] rounded-full" />
        <span className="w-6 h-0.5 bg-[#c9a84c]/30 rounded-full" />
      </div>
    </div>
  );
}