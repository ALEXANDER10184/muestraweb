/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/muestraweb',
  assetPrefix: '/muestraweb/',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
