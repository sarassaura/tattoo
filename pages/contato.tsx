import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Form from '../components/form'

function contato() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation('contato')
  return (
    <>
      <Typography mt="24px">{t('text')}</Typography>
      <Form />
    </>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['contato', 'form'])),
    },
  }
}

export default contato
