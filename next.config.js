/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'**images.othoba.com'
      },
      {
        protocol:'https',
        hostname:'**images.unsplash.com'
      },
      {
        protocol:'https',
        hostname:'**i.ibb.co'
      }
    ]
    
    
  }
}

module.exports = nextConfig
