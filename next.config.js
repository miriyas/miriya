const { withSentryConfig } = require('@sentry/nextjs');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

const id = Math.random().toString(32).slice(2);

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    imageSizes: [100, 140, 200, 280],
    minimumCacheTTL: 86400,
    domains: ['miriya.sgp1.cdn.digitaloceanspaces.com', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miriya.sgp1.cdn.digitaloceanspaces.com',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
      preventFullImport: true,
    },
  },
  experimental: {
    appDir: true,
    optimizeCss: true,
    // swcPlugins: [['next-superjson-plugin', {}]],
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
                {
                  name: 'prefixIds',
                  params: {
                    // Use that ID here.
                    // Do NOT generate the ID itself in the "prefix" function
                    // because that will result in each ID being unique,
                    // breaking the gradient references within a single SVG.
                    prefix: id,
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

// Inected Content via Sentry Wizard Below

module.exports =
  process.env.ENVIRONMENT === 'production'
    ? withSentryConfig(
        module.exports,
        {
          // For all available options, see:
          // https://github.com/getsentry/sentry-webpack-plugin#options

          // Suppresses source map uploading logs during build
          silent: true,

          org: 'miriya',
          project: 'miriya',
        },
        {
          // For all available options, see:
          // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

          // Upload a larger set of source maps for prettier stack traces (increases build time)
          widenClientFileUpload: true,

          // Transpiles SDK to be compatible with IE11 (increases bundle size)
          transpileClientSDK: true,

          // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
          tunnelRoute: '/monitoring',

          // Hides source maps from generated client bundles
          hideSourceMaps: true,

          // Automatically tree-shake Sentry logger statements to reduce bundle size
          disableLogger: true,
        },
      )
    : module.exports;
