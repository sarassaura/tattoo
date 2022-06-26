import { createTheme } from '@mui/material'
import { Shadows } from '@mui/material/styles/shadows'

const colors = {
  white: '#fff',
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

const tempTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
})

const theme = createTheme(tempTheme, {
  ...tempTheme,
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
  shape: {
    borderRadius: 0,
  },
  shadows: [...Array(25).fill('none')] as Shadows,
  typography: {
    fontFamily: fonts.text,
    h1: {
      fontFamily: fonts.custom,
      fontSize: '3rem',
      color: colors.white,
      letterSpacing: '0.04rem',
      textTransform: 'uppercase',
      [tempTheme.breakpoints.up('sm')]: {
        color: colors.ice,
        fontSize: '1.5rem',
      },
    },
    h2: {
      fontFamily: fonts.custom,
      fontSize: '2.25rem',
      color: colors.white,
      letterSpacing: '0.04rem',
      textTransform: 'uppercase',
      [tempTheme.breakpoints.up('sm')]: {
        color: colors.ice,
      },
    },
    h3: {
      fontFamily: fonts.custom,
      fontSize: '1.5rem',
      color: colors.white,
      letterSpacing: '0.04rem',
      textTransform: 'capitalize',
      [tempTheme.breakpoints.up('sm')]: {
        color: colors.ice,
      },
    },
    h4: {
      fontFamily: fonts.text,
      fontSize: '0.875rem',
      color: colors.white,
      textTransform: 'uppercase',
      [tempTheme.breakpoints.up('sm')]: {
        color: colors.ice,
        fontSize: '1rem',
      },
    },
    h5: {
      fontFamily: fonts.text,
      fontSize: '1rem',
      color: colors.white,
      letterSpacing: '0.04rem',
      [tempTheme.breakpoints.up('sm')]: {
        color: colors.ice,
      },
    },
    h6: {
      fontFamily: fonts.text,
      fontSize: '0.875rem',
      color: colors.white,
      letterSpacing: '0.04rem',
      [tempTheme.breakpoints.up('sm')]: {
        color: colors.ice,
        fontSize: '1rem',
      },
    },
    body1: {
      fontFamily: fonts.text,
      fontSize: '0.75rem',
      lineHeight: 1,
      color: colors.white,
      letterSpacing: '0.04rem',
      [tempTheme.breakpoints.up('sm')]: {
        color: colors.ice,
        fontSize: '0.875rem',
        lineHeight: 1.5,
      },
    },
  },
})

export default theme
