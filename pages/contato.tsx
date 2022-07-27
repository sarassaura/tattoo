import { GetStaticProps } from 'next'
import Call from '../components/callme'
import Container from '../components/container'
import Form from '../components/form'
import en from '../locales/en/contato'
import pt from '../locales/pt-BR/contato'
import ptl from '../locales/pt-BR/common'
import enl from '../locales/en/common'
import Layout from '../components/layout'

interface LayoutProps {
  logo: string
  name: string
  description: string
  address: string
  phone: string
  cell: string
  gmail: string
  copyright: string
  menu: {
    first: string
    second: string
    third: string
  }
}

interface Inputs {
  id: number
  name: string
  label: string
  type: string
  multi: boolean
  value: number
  message: string
  maxText: string | false
  required: boolean
}

interface ContactProps {
  text: string
  input: Inputs[]
  button: string
  alert: {
    title: string
    body: string
  }
}

interface TextProps {
  text: ContactProps
  layout: LayoutProps
}

function contato(props: TextProps) {
  return (
    <Layout router="/contato" text={props.layout}>
      <Container>
        <Call text={props.text.text} />
        <Form t={props.text} />
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

export default contato
