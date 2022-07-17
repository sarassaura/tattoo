import { Box } from '@mui/material'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Container from '../components/container'
import Logo from '../components/logo'
import Slider from '../components/slider'

function home() {
  return (
    <Container>
      <Logo />
      <Box display="flex" flexGrow={1} flexShrink={0} width="100%">
        <Slider />
      </Box>
    </Container>
  )
}

/* export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'home',
        'slider',
        'facts',
      ])),
    },
  }
} */

export default home
