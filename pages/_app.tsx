import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import '../styles/fonts.css'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  )
}

export default MyApp
