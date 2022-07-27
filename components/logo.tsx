import { Typography } from '@mui/material'
import { LogoText } from '../interfaces/trampos'

function Logo({ title, sub }: LogoText) {
  return (
    <>
      <Typography variant="h1">{title}</Typography>
      <Typography marginBottom={3}>{sub}</Typography>
    </>
  )
}

export default Logo
