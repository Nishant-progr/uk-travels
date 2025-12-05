/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
        // Enable image optimization for production
        unoptimized: false,
    },
    // Ensure proper environment variable handling
    env: {
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
    // Enable React strict mode for better development experience
    reactStrictMode: true,
    // Optimize production builds
    swcMinify: true,
};

module.exports = nextConfig;
