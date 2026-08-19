import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ReactBits (.jsx) sem tipagem TypeScript
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
