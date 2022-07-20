import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

function Call() {
  const { t } = useTranslation('common')
  return <Typography mt="24px">{t('text')}</Typography>
}

export default Call
