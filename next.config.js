/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: {
      autoLabel: 'dev-only',
      labelFormat: '[filename]--[local]',
    },
  },
};

module.exports = nextConfig;
