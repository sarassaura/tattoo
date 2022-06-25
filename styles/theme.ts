import { createTheme } from '@mui/material'
import { Shadows } from '@mui/material/styles/shadows'

declare module '@mui/material/Button' {
  // eslint-disable-next-line no-unused-vars
  interface ButtonPropsVariantOverrides {
    nav: true
    nav_active: true
    input: true
    input_active: true
  }
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
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'nav' },
          style: {
            backgroundColor: '#3C0000',
          },
        },
        {
          props: { variant: 'nav_active' },
          style: {
            backgroundColor: '#3C0000',
          },
        },
        {
          props: { variant: 'input' },
          style: {
            backgroundColor: '#7E0000',
          },
        },
        {
          props: { variant: 'input_active' },
          style: {
            backgroundColor: '#7E0000',
          },
        },
      ],
    },
  },
  palette: {
    mode: 'dark',
    background: {
      paper: '#101010',
      default: '#101010',
    },
  },
  spacing: 4,
  shape: {
    borderRadius: 0,
  },
  shadows: [
    'none',
    '8px 8px 0px #7E0000',
    '2px 3px 0px #7E0000',
    ...Array(22).fill('none'),
  ] as Shadows,
  typography: {
    fontFamily: "'Righteous', cursive",
    h1: {
      fontFamily: "'Sedgwick Ave Display', cursive;", // fontWeight, fontSize, lineHeight, letterSpacing - textTransform:"uppercase"
    },
  },
})

export default theme
