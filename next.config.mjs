/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    // Si tu repositorio NO es username.github.io, descomenta y ajusta el basePath
    // basePath: '/nombre-del-repositorio',
    // trailingSlash: true,
};

export default nextConfig;
