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
  trailingSlash: true,
  output: 'export',
  
  // Add this for proper asset handling in static export
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://www.globalgreenexport.com' : '',
  
  // Ensure static files are copied
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

module.exports = nextConfig;