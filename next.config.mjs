/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'opengraph.githubassets.com'],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
