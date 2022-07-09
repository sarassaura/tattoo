/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    contentSecurityPolicy: ``,
    xContentTypeOptions: `nosniff`,
  },
}

module.exports = nextConfig
