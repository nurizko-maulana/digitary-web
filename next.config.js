/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
          // Redirect /blog/*/ to /blog/*
        {
              source: '/blog/:path*/',
              destination: 'http://3.25.172.84/:path*/',
              permanent: true,
          },
      ]
    },
  }

module.exports = nextConfig
