/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["fitathletic.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
