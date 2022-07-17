import { Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'

function Call() {
  const { t } = useTranslation('contato')
  return <Typography mt="24px">{t('text')}</Typography>
}

export default Call
