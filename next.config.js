/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')();
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  // output: 'export',   // ❌ remove: conflicts with Server Actions
  eslint: { ignoreDuringBuilds: true },
  images: {
    // When not exporting statically, you can remove `unoptimized`
    domains: ['images.pexels.com'],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
    serverActions: true, // ✅ enable Server Actions
  },
};

module.exports = withPWA(withMDX(nextConfig));
