import {
  Alert,
  Box,
  Button,
  FormControl,
  TextField,
  Snackbar,
  AlertTitle,
  CircularProgress,
} from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import React from 'react'

type Inputs = {
  nome: string
  email: string
  telefone: string
  textarea: string
}

function Form() {
  const [open, setOpen] = React.useState(false)
  const loading = React.useRef(false)
  const handleClick = () => {
    loading.current = true
    setOpen(true)
  }
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleClick()
    fetch('api/mail', {
      method: 'post',
      body: JSON.stringify(data),
    })
    reset()
    loading.current = false
  }
  return (
    <Box
      display="flex"
      component="form"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      flexGrow={1}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <FormControl sx={{ width: { xs: '60%', md: '50%', lg: '40%' } }}>
        <TextField
          error={!!errors.nome}
          helperText={errors.nome && errors.nome.message}
          label="Nome"
          type="text"
          variant="standard"
          {...register('nome', {
            required: 'Campo obrigatório',
            maxLength: {
              value: 255,
              message: 'Muito longo',
            },
          })}
          required
          fullWidth
        />
      </FormControl>
      <FormControl sx={{ width: { xs: '60%', md: '50%', lg: '40%' } }}>
        <TextField
          error={!!errors.email}
          helperText={errors.email && errors.email.message}
          label="Email"
          type="email"
          variant="standard"
          {...register('email', {
            required: 'Campo obrigatório',
            maxLength: {
              value: 255,
              message: 'Muito longo',
            },
          })}
          required
          fullWidth
        />
      </FormControl>
      <FormControl sx={{ width: { xs: '60%', md: '50%', lg: '40%' } }}>
        <TextField
          error={!!errors.telefone}
          helperText={errors.telefone && errors.telefone.message}
          label="Telefone"
          type="tel"
          variant="standard"
          {...register('telefone', {
            required: 'Campo obrigatório',
            maxLength: {
              value: 30,
              message: 'Muito longo',
            },
          })}
          required
          fullWidth
        />
      </FormControl>
      <FormControl sx={{ width: { xs: '60%', md: '50%', lg: '40%' } }}>
        <TextField
          error={!!errors.textarea}
          helperText={errors.textarea && errors.textarea.message}
          label="Escreva pedido aqui"
          type="text"
          variant="standard"
          multiline
          maxRows={3}
          {...register('textarea', {
            maxLength: {
              value: 2000,
              message: 'Muito longo',
            },
          })}
          fullWidth
        />
      </FormControl>
      <Button variant="input" type="submit" title="submit">
        {loading.current ? (
          <CircularProgress size={20} title="loading" />
        ) : (
          'Enviar'
        )}
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="outlined"
          sx={{ width: '100%', bgcolor: 'teal' }}
        >
          <AlertTitle color="success">Mensagem Enviada com Sucesso!</AlertTitle>
          Entraremos em contato em breve.
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Form
