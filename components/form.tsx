import {
  Alert,
  Box,
  Button,
  FormControl,
  TextField,
  Snackbar,
  AlertTitle,
  CircularProgress,
  Typography,
} from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import React from 'react'
import axios from 'axios'
import { useTranslation } from 'next-i18next'

type Inputs = {
  nome: string
  email: string
  telefone: string
  textarea: string
}

interface InputProps {
  id: number
  name: string
  label: string
  type: string
  multi: boolean
  value: number
  message: string
  maxText: string | boolean
  required: boolean
}

function Form() {
  const { t } = useTranslation('common')
  const inputs: InputProps[] = t('input', {
    returnObjects: true,
  })
  const [open, setOpen] = React.useState(false)
  const loading = React.useRef(false)
  const handleClick = () => {
    loading.current = true
    setOpen(true)
  }
  const handleClose = (
    _event?: React.SyntheticEvent | Event,
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
    axios.post('/api/mail', data)
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
      {Array.isArray(inputs) &&
        inputs.length > 0 &&
        inputs.map((input) => (
          <FormControl
            sx={{ width: { xs: '60%', md: '50%', lg: '40%' } }}
            key={input.id}
          >
            <TextField
              error={!!errors[input.name as keyof Inputs]}
              helperText={
                errors[input.name as keyof Inputs] &&
                errors[input.name as keyof Inputs]!.message
              }
              label={input.label}
              type={input.type}
              variant="standard"
              multiline={input.multi}
              maxRows={3}
              {...register(input.name as keyof Inputs, {
                required: input.maxText,
                maxLength: {
                  value: input.value,
                  message: input.message,
                },
              })}
              required={input.required}
              fullWidth
            />
          </FormControl>
        ))}
      <Button variant="input" type="submit" title="submit">
        {loading.current ? (
          <CircularProgress size={20} title="loading" />
        ) : (
          <Typography variant="h4">{t('button')}</Typography>
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
          <AlertTitle color="success">{t('alert.title')}</AlertTitle>
          {t('alert.body')}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Form
