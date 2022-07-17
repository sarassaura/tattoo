// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Call from '../components/callme'
import Container from '../components/container'
import Form from '../components/form'

function contato() {
  return (
    <Container>
      <Call />
      <Form />
    </Container>
  )
}

/* export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contato', 'form'])),
    },
  }
} */

export default contato
