import { Box } from '@mui/material'
import Info from '../components/Info'

function sobre() {
  return (
    <Box
      bgcolor="#000c46"
      display={{ xs: 'flex', lg: 'none' }}
      width="100%"
      paddingRight="32px"
      paddingLeft="32px"
      paddingY="1.5rem"
      flexDirection="column"
    >
      <Info />
    </Box>
  )
}

export default sobre
