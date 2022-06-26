import { Box, Typography } from '@mui/material'
import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box bgcolor="#00126a" height="100vh" display="flex">
      <Box
        bgcolor="#000c46"
        display={{ xs: 'none', xl: 'flex' }}
        width="calc(((100% - 220px) / 4) + 40px)"
        paddingRight="20px"
        paddingLeft="80px"
        paddingY="1.5rem"
      >
        <Typography variant="h3">Under/ground</Typography>
      </Box>
      <Box
        bgcolor="#00188"
        height="calc(100%-3rem)"
        display="flex"
        flexDirection="column"
        marginY="1.5rem"
        width={{ xs: '100%', xl: 'calc(((100% - 220px) * 0.75) + 180px)' }}
      >
        <Box
          bgcolor="#011eb1"
          height="56px"
          marginBottom={3}
          paddingRight={{ xs: '32px', xl: '80px' }}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          menu
        </Box>
        <Box
          bgcolor="#0125d4"
          flexGrow={1}
          marginRight={{ xs: '32px', xl: '80px' }}
          marginLeft={{ xs: '32px', xl: '0px' }}
          justifyItems="center"
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default Layout
