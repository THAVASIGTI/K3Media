import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
    ],
    qualities: [75, 85],
  },
  // Dev only: serve folder addresses of the static demos in public/demo (e.g. /demo/jainttc/about/)
  // from their index.html, as GitHub Pages does. Static export doesn't support rewrites.
  ...(process.env.NODE_ENV === "development" && {
    async rewrites() {
      return [{ source: "/demo/:path*/", destination: "/demo/:path*/index.html" }];
    },
  }),
};

export default nextConfig;
