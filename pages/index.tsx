import { Box } from '@mui/material'
import Container from '../components/container'
import Logo from '../components/logo'
import Slider from '../components/slider'

function home() {
  return (
    <Container>
      <Logo />
      <Box display="flex" flexGrow={1} flexShrink={0} width="100%">
        <Slider />
      </Box>
    </Container>
  )
}

export default home
