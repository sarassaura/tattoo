/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    contentSecurityPolicy: ``,
    /*     loader: 'cloudinary',
    path: 'https://res.cloudinary.com', */
    // https://res.cloudinary.com/campoflorescente/f_auto,c_limit,w_1920,q_auto/https://res.cloudinary.com/campoflorescente/image/upload/v1656849844/lagarto-snake.webp
    ///                                            _next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcampoflorescente%2Fimage%2Fupload%2Fv1656849844%2Flagarto-original.webp&w=828&q=75
    // https://vitor-underground-tattoo.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcampoflorescente%2Fimage%2Fupload%2Fv1656849844%2Flagarto-snake.webp&w=828&q=75
    loader: 'cloudinary',
    path: 'https://vitor-underground-tattoo.vercel.app/image/upload/',
  },
  i18n,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
