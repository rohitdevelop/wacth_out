"use client";

import { ChangeEvent } from "react";
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
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSellerImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* <label className="border border-dashed border-[#00ff00] p-6 text-center cursor-pointer">
        {sellerImage ? (
          <Image
            src={sellerImage}
            alt="watch"
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
        ) : (
          "Upload Seller Photo"
        )}
        <input type="file" className="hidden" onChange={handleImage} />
      </label> */}

      <input
        placeholder="Full Name"
        className="bg-black border border-[#00ff00] p-2"
      />
      <input
        placeholder="Phone"
        className="bg-black border border-[#00ff00] p-2"
      />
      <input
        placeholder="City"
        className="bg-black border border-[#00ff00] p-2"
      />

      <div className="flex gap-3">
        <button onClick={prevStep} className="border border-gray-600 px-4 py-2">
          Back
        </button>

        <button
          onClick={submit}
          className="bg-[#00ff00] text-black px-6 py-2 font-bold"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
