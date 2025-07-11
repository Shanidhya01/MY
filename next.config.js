// next.config.js
const nextConfig = {
  swcMinify: true, // Use SWC instead of Babel/Terser
  reactStrictMode: true,

  webpack: (config) => {
    // Disable source maps for compatibility
    config.devtool = false;
    return config;
  },
};

module.exports = nextConfig;
