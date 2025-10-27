import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // `typedRoutes` moved out of `experimental` in Next.js 15
  typedRoutes: true,
  images: {
    // All images used are local in /public
    dangerouslyAllowSVG: true,
  },
}

export default nextConfig
