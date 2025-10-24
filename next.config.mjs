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
  
     
   
     {
      protocol: 'https',
      hostname: 'optivora-group.com',
      pathname: '/assets/**',
    },

    
    {
      protocol: 'https',
      hostname: 'api.optivora-group.com',
      pathname: '/assets/**',
    },
  ],
},

};

export default nextConfig;
