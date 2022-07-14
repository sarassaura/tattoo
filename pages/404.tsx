import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import variants from '../helpers/variants'

function no404() {
  return (
    <Box
      component={motion.main}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      display="flex"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h2">404</Typography>
    </Box>
  )
}

export default no404
