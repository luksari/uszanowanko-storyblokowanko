/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['pl', 'en', 'es'],
    defaultLocale: 'pl',
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
