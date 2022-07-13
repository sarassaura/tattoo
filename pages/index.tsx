import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Slider from '../components/slider'

function home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation('common')
  return (
    <>
      <Typography variant="h1">{t('title')}</Typography>
      <Typography marginBottom={3}>{t('subtitle')}</Typography>
      <Box display="flex" flexGrow={1} flexShrink={0} width="100%">
        <Slider />
      </Box>
    </>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'slider', 'facts'])),
    },
  }
}

export default home
