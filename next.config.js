/** @type {import('next').NextConfig} */
const _ = require['lodash'];

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', '*'],
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
                  name: 'preset-default', // Prevent remove viewbox
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

module.exports = nextConfig;
