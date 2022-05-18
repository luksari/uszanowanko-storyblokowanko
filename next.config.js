/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    localeDetection: false,
    locales: ['pl', 'en', 'es'],
    defaultLocale: 'pl',
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['a.storyblok.com'],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.tsx?$/,
      include: [options.dir],
      use: [
        'next-swc-loader',
        {
          loader: '@svgr/webpack',
          options: { babel: false },
        },
      ],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: `/${process.env.NEXT_PUBLIC_APP_CATALOG}/:path*`,
        destination: '/:path*',
      },
      {
        source: `/en/${process.env.NEXT_PUBLIC_APP_CATALOG}/:path*`,
        destination: '/en/:path*',
      },
      {
        source: `/es/${process.env.NEXT_PUBLIC_APP_CATALOG}/:path*`,
        destination: '/es/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
