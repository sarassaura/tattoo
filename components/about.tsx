import MenuIcon from '@mui/icons-material/Menu'
import { SwipeableDrawer, IconButton, Box } from '@mui/material'
import { useState } from 'react'
import ScrollProps from '../helpers/scroll'
import Info from './Info'

function About() {
  const [state, setState] = useState(false)
  return (
    <>
      <IconButton aria-label="menu" onClick={() => setState(true)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={state}
        onClose={() => setState(false)}
        onOpen={() => setState(true)}
      >
        <Box
          bgcolor="#151616"
          display={{ xs: 'flex', lg: 'none' }}
          width="285px"
          height="auto"
          paddingRight="32px"
          paddingLeft="32px"
          paddingY="1.5rem"
          flexDirection="column"
          flexGrow={1}
          {...ScrollProps}
        >
          <Info />
        </Box>
      </SwipeableDrawer>
    </>
  )
}

export default About
