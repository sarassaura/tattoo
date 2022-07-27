import React from 'react'
import { motion } from 'framer-motion'
import { Box } from '@mui/material'
import variants from '../helpers/variants'

function Container({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component={motion.main}
      display="flex"
      flexGrow={1}
      flexShrink={1}
      marginRight={{ xs: '32px', lg: '32px' }}
      marginLeft={{ xs: '32px', lg: '0px' }}
      paddingLeft={{ xs: '0px', lg: '20px' }}
      alignItems="center"
      flexDirection="column"
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      {children}
    </Box>
  )
}

export default Container
