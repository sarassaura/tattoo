import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import '../styles/fonts.css'
import '@splidejs/react-splide/css/skyblue'
import '../styles/slider.css'
import { DefaultSeo } from 'next-seo'
import SEO from '../helpers/seo'
import theme from '../styles/theme'

function MyApp({ Component, pageProps, router }: AppProps) {
  let title: string | string[] = router.route
  title = title.split('/')
  const description = title[1]
  const route = `/${title[1]}`
  title = title[1].charAt(0).toUpperCase() + title[1].slice(1)
  title = title === '' ? '' : `${title} - `
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DefaultSeo
        title={`${title}WhiteTiger`}
        description={`Veja mais em ${description}`}
        languageAlternates={[
          {
            hrefLang: 'pt-BR',
            href: `${process.env.NEXT_PUBLIC_SITE_URL}/pt-BR${route}`,
          },
          {
            hrefLang: 'en',
            href: `${process.env.NEXT_PUBLIC_SITE_URL}${route}`,
          },
        ]}
        {...SEO}
      />
      <Component {...pageProps} key={router.route} />
    </ThemeProvider>
  )
}

export default MyApp
