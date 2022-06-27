import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import '../styles/fonts.css'
import theme from '../styles/theme'
import Layout from '../components/layout'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
