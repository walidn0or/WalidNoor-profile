/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname,
    }
    return config
  },
  experimental: {
    webpackBuildWorker: true
  },
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,
}

module.exports = nextConfig
