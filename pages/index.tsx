import { Box } from '@mui/material'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import Logo from '../components/logo'
import Slider from '../components/slider'
import pt from '../locales/pt-BR/home'
import en from '../locales/en/home'
import ptl from '../locales/pt-BR/common'
import enl from '../locales/en/common'
import Layout from '../components/layout'
import { TextProps } from '../interfaces/trampos'
import Thing from '../public/logo'

function home(props: TextProps) {
  return (
    <Layout router="/" text={props.layout}>
      <Container>
        <Box
          display="flex"
          width="100%"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Logo title={props.text.title} sub={props.text.subtitle} />
          <Thing />
        </Box>
        <Box display="flex" flexGrow={1} flexShrink={0} width="100%">
          <Slider cards={props.text.cards} />
        </Box>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const text = locale === 'en' ? en : pt
  const layout = locale === 'en' ? enl : ptl
  return {
    props: {
      text,
      layout,
    },
  }
}

export default home
