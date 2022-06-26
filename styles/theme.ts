import { createTheme } from '@mui/material'
import { Shadows } from '@mui/material/styles/shadows'

const colors = {
  ice: '#DAE4E9',
  shadow: '#202020',
  gray: '#151616',
  black: '#101010',
  wine: '#3C0000',
  red: '#7E0000',
}

const fonts = {
  text: "'Righteous', cursive",
  custom: "'Sedgwick Ave Display', cursive;",
}

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
    background: {
      paper: colors.black,
      default: colors.black,
    },
    primary: {
      main: colors.wine,
      contrastText: colors.ice,
    },
    action: {
      disabled: colors.ice,
      disabledBackground: colors.red,
      disabledOpacity: 1,
    },
  },
  spacing: 4,
  shape: {
    borderRadius: 0,
  },
  shadows: [...Array(25).fill('none')] as Shadows,
  typography: {
    fontFamily: fonts.text,
    h1: {
      fontFamily: fonts.custom,
    },
  },
})

export default theme
