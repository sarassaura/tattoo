import { Box, FormControl, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  nome: string
  email: string
  telefone: string
  textarea: string
}

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
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
    </Box>
  )
}

export default Form
