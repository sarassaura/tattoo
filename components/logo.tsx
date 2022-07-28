import { Typography, Box } from '@mui/material'
import { LogoText } from '../interfaces/trampos'

function Logo({ title, sub }: LogoText) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      marginX={3}
      alignItems={{ xs: 'center', sm: 'flex-start' }}
    >
      <Typography variant="h1">{title}</Typography>
      <Typography marginBottom={3}>{sub}</Typography>
    </Box>
  )
}

export default Logo
