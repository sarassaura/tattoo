import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import '../styles/fonts.css'
import '@splidejs/react-splide/css/skyblue'
import '../styles/slider.css'
import { DefaultSeo } from 'next-seo'
import { appWithTranslation } from 'next-i18next'
import { AnimatePresence } from 'framer-motion'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import SEO from '../helpers/seo'
import theme from '../styles/theme'
import Layout from '../components/layout'

function MyApp({ Component, pageProps, router }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout router={router}>
          <DefaultSeo
            title={`${router.route} - Underground`}
            description={`Veja mais em: ${router.route}`}
            languageAlternates={[
              {
                hrefLang: 'pt-BR',
                href: `${process.env.NEXT_PUBLIC_SITE_URL}${router.route}`,
              },
              {
                hrefLang: 'en',
                href: `${process.env.NEXT_PUBLIC_SITE_URL}/en${router.route}`,
              },
            ]}
            {...SEO}
          />
          <AnimatePresence exitBeforeEnter initial>
            <Component {...pageProps} key={router.route} />
            <ReactQueryDevtools initialIsOpen />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
