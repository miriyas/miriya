/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', '*'],
  },
  env: {
    NEXT_PUBLIC_GA_ID: 'G-BCXXRGTY78',
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
