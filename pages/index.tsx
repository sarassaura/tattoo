import { Box } from '@mui/material'
import Facts from '../components/facts'
import Slider from '../components/slider'

function home() {
  return (
    <>
      <Facts />
      <Box
        display="flex"
        flexGrow={1}
        flexShrink={0}
        bgcolor="teal"
        width="100%"
      >
        <Slider />
      </Box>
    </>
  )
}

export default home
