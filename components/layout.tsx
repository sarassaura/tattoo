import { Box } from '@mui/material'
import { Router } from 'next/router'
import React from 'react'
import About from './about'
import Info from './Info'
import MenuComponent from './menu'

function Layout({
  children,
  router,
}: {
  children: React.ReactNode
  router: Router
}) {
  return (
    <Box
      bgcolor="#00126a"
      height="100vh"
      display="flex"
      sx={{
        overflowY: 'auto',
        overflowX: 'hidden',
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
          width: '0.4em',
        },
        '&::-webkit-scrollbar-track': {
          background: 'invisible',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#ffffff21',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#7E000041',
        },
      }}
    >
      <Box
        bgcolor="#000c46"
        display={{ xs: 'none', lg: 'flex' }}
        width="calc(((100% - 220px) / 4) + 40px)"
        height="100%"
        paddingRight="20px"
        paddingLeft="32px"
        paddingY="1.5rem"
        flexDirection="column"
        sx={{
          overflowX: 'hidden',
          overflowY: 'auto',
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '0.4em',
          },
          '&::-webkit-scrollbar-track': {
            background: 'invisible',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ffffff21',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#7E000041',
          },
        }}
      >
        <Info />
      </Box>
      <Box
        bgcolor="#00188"
        height="calc(100%-3rem)"
        display="flex"
        flexDirection="column"
        marginY="1.5rem"
        width={{ xs: '100%', lg: 'calc(((100% - 220px) * 0.75) + 180px)' }}
      >
        <Box
          bgcolor="#011eb1"
          height="3rem"
          marginBottom={3}
          paddingRight={{ xs: '32px', lg: '32px' }}
          paddingLeft="32px"
          paddingY="1rem"
          display="flex"
          justifyContent={{ xs: 'space-between', lg: 'flex-end' }}
          flexDirection={{ xs: 'row-reverse', lg: 'row' }}
        >
          <Box alignItems="center" display={{ xs: 'flex', lg: 'none' }}>
            <About />
          </Box>
          <MenuComponent path={router.asPath} />
        </Box>
        <Box
          bgcolor="#0125d4"
          flexGrow={1}
          marginRight={{ xs: '32px', lg: '32px' }}
          marginLeft={{ xs: '32px', lg: '0px' }}
          paddingLeft={{ xs: '0px', lg: '20px' }}
          justifyItems="center"
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default Layout
