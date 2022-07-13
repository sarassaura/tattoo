const SEO = {
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.SITE_NAME,
    site_name: process.env.SITE_URL,
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
  languageAlternates: [
    {
      hrefLang: 'en',
      href: `${process.env.SITE_URL}/en`,
    },
  ],
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
