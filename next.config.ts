import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ReactBits (.jsx) sem tipagem TypeScript
    ignoreBuildErrors: true,
  },
  images: {
    // imagens do Sanity (CDN)
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
};

export default nextConfig;
