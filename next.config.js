// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Configure styled-components for SSR
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
