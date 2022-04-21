/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "https://iran-locations-api.vercel.app/" : ""
}

module.exports = nextConfig
