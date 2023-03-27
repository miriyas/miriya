const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    domains: ['https://www.digicamdb.com', 'miriya.sgp1.cdn.digitaloceanspaces.com'],
    imageSizes: [100, 200, 280],
    minimumCacheTTL: 86400,
  },
  env: {
    NEXT_PUBLIC_GA_ID: 'G-BCXXRGTY78',
    NEXT_PUBLIC_CDN_URL: 'https://miriya.sgp1.cdn.digitaloceanspaces.com',
  },
  experimental: {
    appDir: true,
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: { removeViewBox: false },
                  },
                },
                {
                  name: 'cleanupIDs', // Prevent id collision
                  params: {
                    prefix: {
                      toString() {
                        this.counter = this.counter || 0;
                        return `id-${this.counter++}`;
                      },
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
