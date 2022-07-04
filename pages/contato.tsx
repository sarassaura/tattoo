import { Typography } from '@mui/material'
import Form from '../components/form'
import { textContact } from '../constants/text'

function contato() {
  return (
    <>
      <Typography mt="24px">{textContact}</Typography>
      <Form />
    </>
  )
}

export default contato
