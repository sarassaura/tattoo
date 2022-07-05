const ScrollProps = {
  sx: {
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
  },
}

export default ScrollProps
