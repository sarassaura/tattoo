import { Avatar, Box, Stack, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import Link from 'next/link'

function Info() {
  return (
    <>
      <Box
        height="4.5rem"
        display="flex"
        paddingTop={1.5}
        justifyContent="center"
        paddingRight="32px"
      >
        <Link href="/">
          <Box display="flex" style={{ cursor: 'pointer' }}>
            <Typography variant="h3">Under</Typography>
            <Typography variant="h3">|</Typography>
            <Typography variant="h3">Ground</Typography>
          </Box>
        </Link>
      </Box>
      <Box display="flex" justifyContent="center" paddingRight="32px">
        <Avatar
          alt="Vitor Valentim"
          src="./123.png"
          sx={{ width: '6rem', height: '6rem' }}
        />
      </Box>
      <Box
        marginTop="1rem"
        marginBottom="0.5rem"
        display="flex"
        justifyContent="center"
        paddingRight="32px"
      >
        <Typography variant="h5">Vitor Valentim</Typography>
      </Box>
      <Typography>Desenhista, tatuador, pintor, grafiteiro e CEO</Typography>
      <Box
        height="1.5rem"
        display="flex"
        marginY="1rem"
        justifyContent="center"
        paddingRight="32px"
      >
        <WhatsAppIcon />
        <Box height="100%" width="12px" />
        <InstagramIcon />
      </Box>
      <Stack spacing="0.5rem">
        <Typography>Endereço: R. Pe. Manuel Luís de Vergueiro, 850A</Typography>
        <Typography>Fone: +55 11 99123-4567</Typography>
        <Typography>What’s: +55 11 99123-4567</Typography>
        <Typography>Gmail: vitor.underground</Typography>
      </Stack>
      <Box display="flex" flexGrow={1} />
      <Typography variant="subtitle1">
        ©Copyright 2022 Todos os direitos reservados
      </Typography>
    </>
  )
}

export default Info
