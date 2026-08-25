/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.thum.io',
      },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
