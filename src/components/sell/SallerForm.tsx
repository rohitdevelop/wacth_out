"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";

type Props = {
  sellerImage: string | null;
  setSellerImage: (img: string) => void;
  prevStep: () => void;
  submit: () => void;
};

export default function SellerForm({
  sellerImage,
  setSellerImage,
  prevStep,
  submit,
}: Props) {
  const [focused, setFocused] = useState<string | null>(null);
  const [values, setValues] = useState({ name: "", phone: "", city: "" });
  const [isDragging, setIsDragging] = useState(false);

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSellerImage(URL.createObjectURL(file));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) setSellerImage(URL.createObjectURL(file));
  };

  const handleChange = (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
  };

  const fields = [
    {
      key: "name",
      label: "Full Name",
      placeholder: "John Whitmore",
      type: "text",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
          <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
      ),
    },
    {
      key: "phone",
      label: "Phone Number",
      placeholder: "+44 7700 900 123",
      type: "tel",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.36.27 2.68.76 3.88a1 1 0 01-.23 1.11l-2.41 1.8z" />
        </svg>
      ),
    },
    {
      key: "city",
      label: "City",
      placeholder: "London",
      type: "text",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="relative"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Section label */}
      <div className="flex items-center gap-3 mb-8">
        <span className="w-6 h-px bg-[#00ff00]" />
        <span
          className="text-[#00ff00] text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.3em" }}
        >
          Seller Details
        </span>
      </div>

      <div className="space-y-5">
        {/* Photo upload */}
        <div className="mb-2">
          <label className="block text-xs tracking-[0.15em] uppercase text-neutral-500 mb-2">
            Profile Photo <span className="text-neutral-700 normal-case tracking-normal">(optional)</span>
          </label>
          <label
            className={`
              relative flex flex-col items-center justify-center h-36 border cursor-pointer
              transition-all duration-300 overflow-hidden group
              ${isDragging ? "border-[#00ff00] bg-[#c9a84c]/5" : "border-neutral-700 hover:border-[#c9a84c]/50 bg-[#0a0a0a]"}
            `}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
          >
            {sellerImage ? (
              <>
                <Image
                  src={sellerImage}
                  alt="Seller"
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M3 21c0-4.97 4.03-9 9-9s9 4.03 9 9" />
                </svg>
                <div className="text-center">
                  <p className="text-xs tracking-wider mb-0.5">Drop image or <span className="text-[#00ff00]">browse</span></p>
                  <p className="text-[10px] text-neutral-700">JPG, PNG — max 5MB</p>
                </div>
              </div>
            )}
            <input type="file" accept="image/*" className="hidden" onChange={handleImage} />
          </label>
        </div>

        {/* Input fields */}
        {fields.map(({ key, label, placeholder, type, icon }) => (
          <div key={key} className="relative group">
            <label className="block text-xs tracking-[0.15em] uppercase text-neutral-500 mb-2">
              {label}
            </label>
            <div className="relative">
              {/* Icon */}
              <div
                className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                  focused === key ? "text-[#00ff00]" : "text-neutral-600"
                }`}
              >
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

              {/* Filled indicator */}
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

        {/* Privacy note */}
        <div className="flex items-start gap-3 p-3.5 bg-[#0a0a0a] border border-neutral-800/60">
          <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" className="w-4 h-4 shrink-0 mt-0.5">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          <p className="text-[11px] text-neutral-600 leading-relaxed tracking-wide">
            Your details are encrypted and never shared. Used only for pickup coordination and payment.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 mt-10">
        <button
          onClick={prevStep}
          className="flex items-center gap-2 px-6 py-3.5 border border-neutral-700 text-neutral-400 text-xs tracking-[0.2em] uppercase hover:border-neutral-500 hover:text-neutral-300 transition-all duration-300"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          Back
        </button>

        <button
          onClick={submit}
          className="flex-1 relative overflow-hidden flex items-center justify-center gap-3 px-8 py-3.5 bg-[#00ff00] text-black text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#b8963e] active:scale-[0.98] transition-all duration-300 group"
        >
          <span>Submit Listing</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      {/* Step indicator */}
      <div className="flex items-center gap-2 mt-6 justify-center">
        <span className="w-6 h-0.5 bg-[#00ff00]/40 rounded-full" />
        <span className="w-6 h-0.5 bg-[#00ff00] rounded-full" />
      </div>
    </div>
  );
}