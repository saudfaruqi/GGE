// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "storage.googleapis.com" },
    ],
    // Required for static export
    unoptimized: true,
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable static export
  output: 'export',
};

module.exports = nextConfig;