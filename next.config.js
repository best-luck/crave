/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.dutchie.com'
      },
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh'
      },
      {
        protocol: 'https',
        hostname: 'admin.dutchie.com'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'selltreez-product-shared-bucket-test-us-west-2.s3.amazonaws.com'
      },
      {
        protocol: 'https',
        hostname: 'treezpartnersandbox2.s3.amazonaws.com'
      },
      {
        protocol: 'https',
        hostname: 'treezbuildpartnersandbox2.s3.amazonaws.com'
      },
      {
        protocol: 'https',
        hostname: 'treezsfw.s3.amazonaws.com'
      },
      {
        protocol: 'https',
        hostname: 'store-treez-development.s3.us-west-2.amazonaws.com'
      }
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  experimental: { 
    nftTracing: true 
  }
};

module.exports = nextConfig;
