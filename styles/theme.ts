import { createTheme } from '@mui/material'
import { Shadows } from '@mui/material/styles/shadows'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  palette: {
    mode: 'dark',
  },
  spacing: 4,
  shape: {
    borderRadius: 0,
  },
  shadows: [
    'none',
    '0px 15px 60px rgba(0, 0, 0, 0.25)',
    '0px 35px 60px rgba(0, 0, 0, 0.25)',
    ...Array(22).fill('none'),
  ] as Shadows,
})

export default theme
