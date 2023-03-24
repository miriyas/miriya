/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://www.digicamdb.com', 'miriya.sgp1.cdn.digitaloceanspaces.com'],
    imageSizes: [200, 280],
    minimumCacheTTL: 86400,
  },
  env: {
    NEXT_PUBLIC_GA_ID: 'G-BCXXRGTY78',
    NEXT_PUBLIC_CDN_URL: 'https://miriya.sgp1.cdn.digitaloceanspaces.com',
  },
  experimental: {
    appDir: true,
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/:all*(svg|jpg|png)',
  //       locale: false,
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000',
  //         },
  //       ],
  //     },
  //   ];
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
