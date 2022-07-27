import { Box } from '@mui/material'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import Logo from '../components/logo'
import Slider from '../components/slider'
import pt from '../locales/pt-BR/home.json'
import en from '../locales/en/home.json'
import ptl from '../locales/pt-BR/common.json'
import enl from '../locales/en/common.json'
import Layout from '../components/layout'
import { TextProps } from '../interfaces/trampos'

function home(props: TextProps) {
  return (
    <Layout router="/" text={props.layout}>
      <Container>
        <Logo title={props.text.title} sub={props.text.subtitle} />
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
