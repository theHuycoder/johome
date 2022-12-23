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
 images: {
  domains: ["res.cloudinary.com"],
 },
 compiler: {
  styledComponents: {
   ssr: true,
  },
 },
};

module.exports = nextConfig;
