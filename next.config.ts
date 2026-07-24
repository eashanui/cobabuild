import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/cobabuild",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
