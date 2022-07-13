import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import '../styles/fonts.css'
import { DefaultSeo } from 'next-seo'
import { appWithTranslation } from 'next-i18next'
import SEO from '../helpers/seo'
import theme from '../styles/theme'
import Layout from '../components/layout'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout router={router}>
        <DefaultSeo
          title={`${router.route} - Underground`}
          description={`Veja mais em: ${router.route}`}
          {...SEO}
        />
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
