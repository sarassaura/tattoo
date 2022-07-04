const SEO = {
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.undergroundtattoo.com.br/',
    site_name: 'Underground',
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
