import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Box } from '@mui/material'
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

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common'])),
  },
})

export default home
