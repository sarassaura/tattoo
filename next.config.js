/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
]
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    contentSecurityPolicy: ``,
  },
}

module.exports = nextConfig
