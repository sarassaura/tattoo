import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import '../styles/fonts.css'
import '@splidejs/react-splide/css/skyblue'
import '../styles/slider.css'
import { DefaultSeo } from 'next-seo'
import { AnimatePresence } from 'framer-motion'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import SEO from '../helpers/seo'
import theme from '../styles/theme'

function MyApp({ Component, pageProps, router }: AppProps) {
  const queryClient = new QueryClient()
  let title: string | string[] = router.route
  title = title.split('/')
  const description = title[1]
  const route = `/${title[1]}`
  title = title[1].charAt(0).toUpperCase() + title[1].slice(1)
  title = title === '' ? '' : `${title} - `
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DefaultSeo
          title={`${title}Underground`}
          description={`Veja mais em ${description}`}
          languageAlternates={[
            {
              hrefLang: 'pt-BR',
              href: `${process.env.NEXT_PUBLIC_SITE_URL}${route}`,
            },
            {
              hrefLang: 'en',
              href: `${process.env.NEXT_PUBLIC_SITE_URL}/en${route}`,
            },
          ]}
          {...SEO}
        />
        <AnimatePresence exitBeforeEnter initial>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
