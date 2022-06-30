import {
  Alert,
  Box,
  FormControl,
  TextField,
  Snackbar,
  AlertTitle,
} from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
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
  const handleClick = () => {
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
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch('api/mail', {
      method: 'post',
      body: JSON.stringify(data),
    })
    handleClick()
    reset()
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
      <LoadingButton variant="input" type="submit" loading={isSubmitting}>
        Enviar
      </LoadingButton>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          <AlertTitle>Mensagem Enviada com Sucesso!</AlertTitle>
          Entraremos em contato em breve.
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Form
