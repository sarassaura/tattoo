import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import React from 'react'

function Logo() {
  const { t, ready } = useTranslation('home')
  const title = React.useRef(t('title'))
  const subtitle = React.useRef(t('subtitle'))
  if (!ready) {
    return <div>loading translations...</div>
  }
  return (
    <>
      <Typography variant="h1">{title.current}</Typography>
      <Typography marginBottom={3}>{subtitle.current}</Typography>
    </>
  )
}

export default Logo
