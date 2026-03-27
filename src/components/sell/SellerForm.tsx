"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import {
  User,
  Phone,
  MapPin,
  Upload,
  Pencil,
  Lock,
  ArrowRight,
} from "lucide-react";

type Props = {
  sellerImage: string | null;
  setSellerImage: (img: string) => void;
  submit: () => void;
};

export default function SellerForm({
  sellerImage,
  setSellerImage,
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
    if (file && file.type.startsWith("image/")) {
      setSellerImage(URL.createObjectURL(file));
    }
  };

  const handleChange =
    (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
    };

  const fields = [
    {
      key: "name",
      label: "Full Name",
      placeholder: "John Whitmore",
      type: "text",
      icon: <User size={16} />,
    },
    {
      key: "phone",
      label: "Phone Number",
      placeholder: "+44 7700 900 123",
      type: "tel",
      icon: <Phone size={16} />,
    },
    {
      key: "city",
      label: "City",
      placeholder: "London",
      type: "text",
      icon: <MapPin size={16} />,
    },
  ];

  return (
    <div className="relative">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-8">
        <span className="w-6 h-px bg-[#00ff00]" />
        <span className="text-[#00ff00] text-xs tracking-[0.3em] uppercase">
          Seller Details
        </span>
      </div>

      <div className="space-y-5">
        {/* Photo upload */}
        <div>
          <label className="block text-xs tracking-[0.15em] uppercase text-neutral-300 mb-2">
            Profile Photo{" "}
            <span className="text-neutral-500 normal-case">
              (optional)
            </span>
          </label>

          <label
            className={`
              relative flex flex-col items-center justify-center h-36 border cursor-pointer
              transition-all duration-300 overflow-hidden group
              ${
                isDragging
                  ? "border-[#00ff00] bg-[#00ff00]/5"
                  : "border-neutral-700 hover:border-[#00ff00]/50 bg-[#0a0a0a]"
              }
            `}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
          >
            {sellerImage ? (
              <>
                <Image
                  src={sellerImage}
                  alt="Seller"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition"
                />

                <div className="relative z-10 flex flex-col items-center gap-2 text-white/80">
                  <Pencil size={18} className="text-[#00ff00]" />
                  <span className="text-xs">Change Photo</span>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center gap-2 text-neutral-300">
                <Upload size={22} className="text-neutral-400" />
                <p className="text-xs">
                  Drop image or{" "}
                  <span className="text-[#00ff00]">browse</span>
                </p>
                <p className="text-[10px] text-neutral-500">
                  JPG, PNG — max 5MB
                </p>
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImage}
            />
          </label>
        </div>

        {/* Inputs */}
        {fields.map(({ key, label, placeholder, type, icon }) => (
          <div key={key}>
            <label className="block text-xs uppercase text-neutral-300 mb-2">
              {label}
            </label>

            <div className="relative">
              <div
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  focused === key
                    ? "text-[#00ff00]"
                    : "text-neutral-400"
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
                  w-full bg-[#0a0a0a] pl-11 pr-4 py-3 text-white placeholder-neutral-500
                  border outline-none transition
                  ${
                    focused === key
                      ? "border-[#00ff00]"
                      : "border-neutral-700 hover:border-neutral-500"
                  }
                `}
              />
            </div>
          </div>
        ))}

        {/* Privacy */}
        <div className="flex items-start gap-2 text-neutral-300 text-xs">
          <Lock size={14} className="text-[#00ff00] mt-0.5" />
          <p>Your data is safe and never shared.</p>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={submit}
        className="mt-8 w-full flex items-center justify-center gap-2 bg-white text-black py-3 font-semibold hover:opacity-90 transition"
      >
        Submit Listing
        <ArrowRight size={16} />
      </button>
    </div>
  );
}