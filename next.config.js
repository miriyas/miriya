/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://www.digicamdb.com', 'miriya.sgp1.cdn.digitaloceanspaces.com', 'localhost', '*'],
    minimumCacheTTL: 86400,
  },
  env: {
    NEXT_PUBLIC_GA_ID: 'G-BCXXRGTY78',
    NEXT_PUBLIC_CDN_URL: 'https://miriya.sgp1.cdn.digitaloceanspaces.com',
  },
  experimental: {
    appDir: true,
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
                // {
                //   name: 'preset-default', // Prevent remove viewbox
                //   params: {
                //     overrides: { removeViewBox: false },
                //   },
                // },
                // {
                //   name: 'cleanupIDs', // Prevent id collision
                //   params: {
                //     prefix: {
                //       toString() {
                //         this.counter = this.counter || 0;
                //         return `id-${this.counter++}`;
                //       },
                //     },
                //   },
                // },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
