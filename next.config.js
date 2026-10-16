// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Static export can't run the image optimizer.
    unoptimized: true,
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  trailingSlash: true,
  output: "export",
  // NOTE: no assetPrefix. It was previously hardcoded to a single domain,
  // which breaks every asset the moment the site is served from anywhere else
  // (staging, a preview URL, or a different production domain).
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

module.exports = nextConfig;
