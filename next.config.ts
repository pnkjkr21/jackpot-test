import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,  // Ignore TypeScript errors during build
  },
  eslint: {
    ignoreDuringBuilds: true,  // Ignore ESLint errors during build
  }
};

module.exports = nextConfig;

export default nextConfig;
