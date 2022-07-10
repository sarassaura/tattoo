import { Box, Typography } from '@mui/material'
import Slider from '../components/slider'

function home() {
  return (
    <>
      <Typography variant="h1">Under\ground</Typography>
      <Typography marginBottom={3}>Tattoos - Desenhos - Pinturas</Typography>
      <Box display="flex" flexGrow={1} flexShrink={0} width="100%">
        <Slider />
      </Box>
    </>
  )
}

export default home
