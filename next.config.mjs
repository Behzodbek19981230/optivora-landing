/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  reactStrictMode: false,
  experimental: { typedRoutes: true },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/ru',
        permanent: true,
      }
    ];
  },

 images: {
  remotePatterns: [
    // Local development backend
    {
      protocol: 'http',
      hostname: 'localhost',
      port: '4000',
      pathname: '/assets/**',
    },
    // Production API (allow both http and https for flexibility)
    {
      protocol: 'http',
      hostname: '45.138.159.166',
      pathname: '/assets/**',
    },
    {
      protocol: 'https',
      hostname: '45.138.159.166',
      pathname: '/assets/**',
    },
  ],
},

};

export default nextConfig;
