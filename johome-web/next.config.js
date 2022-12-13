/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: true,
 swcMinify: true,
 typescript: {
  ignoreBuildErrors: true,
 },
 eslint: {
  ignoreDuringBuilds: true,
 },
 output: "standalone",
};

module.exports = nextConfig;
