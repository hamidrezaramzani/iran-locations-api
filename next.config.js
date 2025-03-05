const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  i18n,
  assetPrefix: isProd ? process.env.WEBSITE_URL : '',
};

module.exports = nextConfig;
