/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "https://iran-locations-api.liara.run/" : "",
};

module.exports = nextConfig;
