import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    domains: ["images.unsplash.com"],
    qualities: [75, 90],
    unoptimized: true,
  },
};

export default nextConfig;
