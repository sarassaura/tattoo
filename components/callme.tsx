import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import React from 'react'

function Call() {
  const { t, ready } = useTranslation('contato')
  const myvar = React.useRef(t('text'))
  if (!ready) {
    return <div>loading translations...</div>
  }
  return <Typography mt="24px">{myvar.current}</Typography>
}

export default Call
