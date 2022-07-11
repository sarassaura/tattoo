import { Box, Typography } from '@mui/material'
import Slider from '../components/slider'
import { textMain } from '../constants/text'

function home() {
  return (
    <>
      <Typography variant="h1">{textMain.title}</Typography>
      <Typography marginBottom={3}>{textMain.subtitle}</Typography>
      <Box display="flex" flexGrow={1} flexShrink={0} width="100%">
        <Slider />
      </Box>
    </>
  )
}

export default home
