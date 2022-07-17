import { Avatar, Box, Stack, Typography, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { icons } from '../constants/icons'

function Info() {
  const { t, ready } = useTranslation('common')
  if (!ready) {
    return <div>loading translations...</div>
  }
  return (
    <>
      <Box
        paddingBottom="2rem"
        display="flex"
        paddingTop={1.5}
        justifyContent="center"
        paddingRight={{ xs: '0px', lg: '32px' }}
      >
        <Link href="/">
          <Box display="flex" sx={{ cursor: 'pointer' }}>
            <Typography variant="h3">{t('logo')}</Typography>
          </Box>
        </Link>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        paddingRight={{ xs: '0px', lg: '32px' }}
      >
        <Avatar
          alt={t('name')}
          src="./profile.webp"
          sx={{ width: '6rem', height: '6rem' }}
        />
      </Box>
      <Box
        marginTop="1rem"
        marginBottom="0.5rem"
        display="flex"
        justifyContent="center"
        paddingRight={{ xs: '0px', lg: '32px' }}
      >
        <Typography variant="h5">{t('name')}</Typography>
      </Box>
      <Typography>{t('description')}</Typography>
      <Box
        height="1.5rem"
        display="flex"
        marginY="1rem"
        justifyContent="center"
        paddingRight={{ xs: '0px', lg: '32px' }}
      >
        {icons.map((icon) => (
          <MuiLink
            href={icon.href}
            target="_blank"
            rel="noopener"
            title={icon.title}
            marginX="6px"
            key={icon.id}
          >
            {icon.icon}
          </MuiLink>
        ))}
      </Box>
      <Stack spacing="0.5rem">
        <Typography>{t('address')}</Typography>
        <Typography>{t('phone')}</Typography>
        <Typography>{t('cell')}</Typography>
        <Typography>{t('gmail')}</Typography>
      </Stack>
      <Box display="flex" flexGrow={1} />
      <Typography variant="subtitle1" mt={3} sx={{ userSelect: 'none' }}>
        {t('copyright')}
      </Typography>
    </>
  )
}

export default Info
