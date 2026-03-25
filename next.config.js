/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  images: {
    domains: ['image.thum.io'],
    unoptimized: true,
  },
}

module.exports = nextConfig
