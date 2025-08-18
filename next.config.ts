import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/myportfolio',
  assetPrefix: '/myportfolio/',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['placehold.co'],
  },
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

