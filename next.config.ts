import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    LIARA_ENDPOINT: process.env.LIARA_ENDPOINT,
    LIARA_BUCKET_NAME: process.env.LIARA_BUCKET_NAME,
    LIARA_ACCESS_KEY: process.env.LIARA_ACCESS_KEY,
    LIARA_SECRET_KEY: process.env.LIARA_SECRET_KEY,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;