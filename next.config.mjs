/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  reactStrictMode: false,
  experimental: { typedRoutes: true },

  output: 'export',

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'optivora-group.com',
        pathname: '/assets/**',
      },

      {
        protocol: 'https',
        hostname: 'api1.optivora-group.com',
        pathname: '/assets/**',
      },
    ],
  },

};

export default nextConfig;
