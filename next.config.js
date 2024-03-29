/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack :(config)=>{
    config.resolve = {
      ...config.resolve,
      fallback :{
        fs :false
      }
    }
    return config;
  } 
}

module.exports = nextConfig
