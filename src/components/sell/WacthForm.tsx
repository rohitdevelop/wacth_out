"use client";

import { ChangeEvent } from "react";
import Image from "next/image";
type Props = {
  watchImage: string | null;
  setWatchImage: (img: string) => void;
  nextStep: () => void;
};

export default function WatchForm({
  watchImage,
  setWatchImage,
  nextStep,
}: Props) {
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setWatchImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* <label className="border border-dashed border-[#00ff00] p-6 text-center cursor-pointer">
        {watchImage ? (
          <Image
            src={watchImage}
            alt="watch"
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
        ) : (
          "Upload Watch Image"
        )}
        <input type="file" className="hidden" onChange={handleImage} />
      </label> */}

      <input
        placeholder="Brand"
        className="bg-black border border-[#00ff00] p-2"
      />
      <input
        placeholder="Model"
        className="bg-black border border-[#00ff00] p-2"
      />
      <input
        placeholder="Price ₹"
        type="number"
        className="bg-black border border-[#00ff00] p-2"
      />

      <textarea
        placeholder="Description"
        className="bg-black border border-[#00ff00] p-2"
      />

      <button onClick={nextStep} className="border border-[#00ff00] py-2 mt-2">
        Continue
      </button>
    </div>
  );
}
