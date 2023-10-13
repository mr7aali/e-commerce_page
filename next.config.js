/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'**images.othoba.com'
      }
    ]
    
    
  }
}

module.exports = nextConfig
