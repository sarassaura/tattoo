const SEO = {
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_SITE_NAME,
    site_name: process.env.NEXT_PUBLIC_SITE_URL,
    images: [
      {
        url: './profile.webp',
        width: 640,
        height: 640,
        alt: 'Profile Picture',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    handle: '@victorvalentim',
    site: '@undergroundtattoo',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: './favicon.ico',
    },
  ],
}

export default SEO
