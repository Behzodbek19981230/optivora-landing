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
      pathname: '/uploads/**',
    },
    // Production API (allow both http and https for flexibility)
    {
      protocol: 'http',
      hostname: 'api.bmsq.uz',
      pathname: '/uploads/**',
    },
    {
      protocol: 'https',
      hostname: 'api.bmsq.uz',
      pathname: '/uploads/**',
    },
  ],
},

};

export default nextConfig;
