/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GITHUB: process.env.GITHUB,
    LINKEDIN: process.env.LINKEDIN,
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
