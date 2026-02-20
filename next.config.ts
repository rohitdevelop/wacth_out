import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wallpapercave.com",
      },
      {
        protocol: "https",
        hostname: "sc04.alicdn.com",
      },
      {
        protocol: "https",
        hostname: "ae01.alicdn.com",
      },
      {
        protocol: "https",
        hostname: "www.jiomart.com",
      },
        { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "static.vecteezy.com" },
      { protocol: "https", hostname: "assets-metrostyle.abs-cbn.com" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "www.lepage.fr" },
    ],
  },
};

export default nextConfig;
