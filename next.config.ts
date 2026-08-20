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
  async rewrites() {
    // URL limpa para o gerador de assinaturas (arquivo estático em /public)
    return [{ source: "/assinatura", destination: "/assinatura.html" }];
  },
};

export default nextConfig;
