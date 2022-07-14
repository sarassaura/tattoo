import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Container from '../components/container'
import Slider from '../components/slider'

function home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation('home')
  return (
    <Container>
      <Typography variant="h1">{t('title')}</Typography>
      <Typography marginBottom={3}>{t('subtitle')}</Typography>
      <Box display="flex" flexGrow={1} flexShrink={0} width="100%">
        <Slider />
      </Box>
    </Container>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
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
}

export default home
