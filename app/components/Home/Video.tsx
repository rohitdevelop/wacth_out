"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <video
        ref={videoRef}
        src="/videos/watch-home.mp4"
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Sound Toggle */}
      <button
        onClick={toggleSound}
        className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-md text-white p-3 rounded-full hover:scale-110 transition"
      >
        {isMuted ? <VolumeOff className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </section>
  );
};

export default VideoSection;
