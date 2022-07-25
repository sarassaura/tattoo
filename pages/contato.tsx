import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Call from '../components/callme'
import Container from '../components/container'
import Form from '../components/form'
import Layout from '../components/layout'

function contato() {
  return (
    <Layout router="/contato">
      <Container>
        <Call />
        <Form />
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common'])),
  },
})

export default contato
