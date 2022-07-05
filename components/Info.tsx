import { Avatar, Box, Stack, Typography, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import { textIcons, textInfo } from '../constants/text'

function Info() {
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
            <Typography variant="h3">{textInfo.logo.start}</Typography>
            <Typography variant="h3">{textInfo.logo.mid}</Typography>
            <Typography variant="h3">{textInfo.logo.end}</Typography>
          </Box>
        </Link>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        paddingRight={{ xs: '0px', lg: '32px' }}
      >
        <Avatar
          alt={textInfo.name}
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
        <Typography variant="h5">{textInfo.name}</Typography>
      </Box>
      <Typography>{textInfo.description}</Typography>
      <Box
        height="1.5rem"
        display="flex"
        marginY="1rem"
        justifyContent="center"
        paddingRight={{ xs: '0px', lg: '32px' }}
      >
        {textIcons.map((icon) => (
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
        <Typography>{textInfo.address}</Typography>
        <Typography>{textInfo.phone}</Typography>
        <Typography>{textInfo.cell}</Typography>
        <Typography>{textInfo.gmail}</Typography>
      </Stack>
      <Box display="flex" flexGrow={1} />
      <Typography variant="subtitle1" mt={3} sx={{ userSelect: 'none' }}>
        {textInfo.copyright}
      </Typography>
    </>
  )
}

export default Info
