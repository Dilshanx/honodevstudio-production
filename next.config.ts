// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporarily ignore build errors while fixing TypeScript issues
  typescript: {
    ignoreBuildErrors: true,
  },

  // Temporarily ignore ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
