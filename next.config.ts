import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    distDir: "build",
    basePath: "/Portfolio", // Set this to your GitHub repo name
  images: {
    unoptimized: true}
};

export default nextConfig;
