import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  images: {
    // All images used are local in /public
    dangerouslyAllowSVG: true,
  },
}

export default nextConfig

