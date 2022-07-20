import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

function Logo() {
  const { t } = useTranslation('common')
  return (
    <>
      <Typography variant="h1">{t('title')}</Typography>
      <Typography marginBottom={3}>{t('subtitle')}</Typography>
    </>
  )
}

export default Logo
