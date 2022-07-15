import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import React from 'react'

function Call() {
  const { t } = useTranslation('contato')
  const myvar = React.useRef(t('text'))
  return <Typography mt="24px">{myvar.current}</Typography>
}

export default Call
