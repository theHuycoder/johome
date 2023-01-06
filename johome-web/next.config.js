/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
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
        styledComponents: true,
    },
};

module.exports = nextConfig;
