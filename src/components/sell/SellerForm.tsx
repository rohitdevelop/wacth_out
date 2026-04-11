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
import { useSell } from "hooks/useSell";
import { toast } from "react-toastify";
import { log } from "console";

type Props = {
  sellerImage: string | null;
  setSellerImage: (img: string) => void;
  watchData: any;
};

export default function SellerForm({
  sellerImage,
  setSellerImage,
  watchData,
}: Props) {
  const [focused, setFocused] = useState<string | null>(null);
  const [values, setValues] = useState({
    name: "",
    phone: "",
    city: "",
  });
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const { CreateSell } = useSell();

  // 📸 Image Upload
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
      setSellerImage(URL.createObjectURL(selectedFile));
    }
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const selectedFile = e.dataTransfer.files?.[0];

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile); // ✅ ADD THIS
      setSellerImage(URL.createObjectURL(selectedFile));
    }
  };

  // ✏️ Input Change
  const handleChange =
    (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
    };

  const handleSubmit = async () => {
    if (!values.name || !values.phone || !values.city) {
      toast.warning("All fields are required");
    }
    if (!watchData || !watchData.watchDetails || watchData.watchDetails.length === 0) {
      toast.warning("watchDetails are required"); 
      return    
   }
  if (!watchData.watchDetails[0]?.brand) {
    toast.warning("Please complete watch details properly");
    return;
  }

    const formData = new FormData();

     formData.append("name", values.name);
    formData.append("phone", values.phone);

     formData.append(
      "address",
      JSON.stringify([
        {
          street: "test",
          city: values.city,
          state: "test",
          country: "India",
          zipCode: "123456",
        },
      ]),
    );
    formData.append("watchDetails", JSON.stringify(watchData.watchDetails));
    if (watchData?.file) {
      formData.append("image", watchData.file); 
    }

    try {
      await CreateSell(formData);
      setValues({
        name: "",
        city: "",
        phone: "",
      });
    } catch (err) {
      console.log(err);
    }
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
            <span className="text-neutral-500 normal-case">(optional)</span>
          </label>

          <label
            className={`relative flex flex-col items-center justify-center h-36 border cursor-pointer transition-all duration-300 overflow-hidden group
              ${
                isDragging
                  ? "border-[#00ff00] bg-[#00ff00]/5"
                  : "border-neutral-700 hover:border-[#00ff00]/50 bg-[#0a0a0a]"
              }`}
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
                  Drop image or <span className="text-[#00ff00]">browse</span>
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
                  focused === key ? "text-[#00ff00]" : "text-neutral-400"
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
                required
                className={`w-full bg-[#0a0a0a] pl-11 pr-4 py-3 text-white placeholder-neutral-500 border outline-none transition
                  ${
                    focused === key
                      ? "border-[#00ff00]"
                      : "border-neutral-700 hover:border-neutral-500"
                  }`}
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
        disabled={!watchData}
        onClick={handleSubmit}
        className="mt-8 w-full flex items-center justify-center gap-2 bg-white cursor-pointer text-black py-3 font-semibold hover:opacity-90 transition disabled:opacity-50"
      >
        Submit your Poduct
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
