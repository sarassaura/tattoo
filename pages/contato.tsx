import { Box, Button, FormControl, TextField, Typography } from '@mui/material'

function contato() {
  return (
    <>
      <Typography mb="24px" mt="24px">
        Respondemos qualquer dúvida pelo whatsapp!
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        flexGrow={1}
      >
        <FormControl sx={{ width: '40%' }}>
          <TextField
            name="name"
            label="Nome"
            helperText=" "
            type="text"
            variant="standard"
            required
            fullWidth
          />
        </FormControl>
        <FormControl sx={{ width: '40%' }}>
          <TextField
            name="mail"
            label="Email"
            helperText=" "
            type="email"
            variant="standard"
            required
            fullWidth
          />
        </FormControl>
        <FormControl sx={{ width: '40%' }}>
          <TextField
            name="phone"
            label="Telefone"
            helperText=" "
            type="tel"
            variant="standard"
            required
            fullWidth
          />
        </FormControl>
        <FormControl sx={{ width: '40%' }}>
          <TextField
            name="order"
            label="Escreva pedido aqui"
            helperText=" "
            type="text"
            variant="standard"
            multiline
            maxRows={3}
            fullWidth
          />
        </FormControl>
        <Button variant="input" type="submit">
          Enviar
        </Button>
      </Box>
    </>
  )
}

export default contato
