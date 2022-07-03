import { Box, Typography, Grid } from '@mui/material'

function home() {
  return (
    <>
      <Grid
        container
        bgcolor="black"
        rowSpacing="10px"
        columnSpacing="10px"
        paddingBottom={{ xs: '12px', lg: '24px' }}
      >
        <Grid
          item
          xs={6}
          xl={3}
          display="flex"
          flexDirection="column"
          justifyContent={{ xs: 'center', sm: 'flex-start', lg: 'center' }}
          alignItems={{ xs: 'center', sm: 'flex-start', lg: 'center' }}
        >
          <Typography variant="h1" display={{ xs: 'none', sm: 'flex' }}>
            Clientes
          </Typography>
          <Box
            height="96px"
            width={{ xs: '152px', xl: '180px' }}
            bgcolor="cadetblue"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            marginBottom={2}
            boxShadow="8px 8px 0px #7E0000"
          >
            <Typography variant="h1" display={{ sm: 'none' }}>
              Clientes
            </Typography>
            <Typography variant="h2">236</Typography>
          </Box>
          <Typography
            variant="h1"
            display={{ xs: 'none', xl: 'flex' }}
            visibility="hidden"
          >
            Clientes
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          xl={3}
          display="flex"
          flexDirection="column-reverse"
          justifyContent={{ xs: 'center', sm: 'flex-start', lg: 'center' }}
          alignItems={{ xs: 'center', sm: 'flex-start', lg: 'center' }}
        >
          <Typography variant="h1" display={{ xs: 'none', sm: 'flex' }}>
            Tatuagens
          </Typography>
          <Box
            height="96px"
            width={{ xs: '152px', xl: '180px' }}
            bgcolor="purple"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            marginBottom={2}
            boxShadow="8px 8px 0px #7E0000"
          >
            <Typography variant="h1" display={{ sm: 'none' }}>
              Tatuagens
            </Typography>
            <Typography variant="h2">1024</Typography>
          </Box>
          <Typography
            variant="h1"
            display={{ xs: 'none', xl: 'flex' }}
            visibility="hidden"
          >
            Tatuagens
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          xl={3}
          display="flex"
          flexDirection="column"
          justifyContent={{ xs: 'center', md: 'flex-end', lg: 'center' }}
          alignItems={{ xs: 'center', md: 'flex-end', lg: 'center' }}
        >
          <Typography variant="h1" display={{ xs: 'none', sm: 'flex' }}>
            Desenhos
          </Typography>
          <Box
            height="96px"
            width={{ xs: '152px', xl: '180px' }}
            bgcolor="fuchsia"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            marginBottom={2}
            boxShadow="8px 8px 0px #7E0000"
          >
            <Typography variant="h1" display={{ sm: 'none' }}>
              Desenhos
            </Typography>
            <Typography variant="h2">768</Typography>
          </Box>
          <Typography
            variant="h1"
            display={{ xs: 'none', xl: 'flex' }}
            visibility="hidden"
          >
            Desenhos
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          xl={3}
          display="flex"
          flexDirection="column-reverse"
          justifyContent={{ xs: 'center', md: 'flex-end', lg: 'center' }}
          alignItems={{ xs: 'center', md: 'flex-end', lg: 'center' }}
        >
          <Typography variant="h1" display={{ xs: 'none', sm: 'flex' }}>
            Pinturas
          </Typography>
          <Box
            height="96px"
            width={{ xs: '152px', xl: '180px' }}
            bgcolor="violet"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            marginBottom={2}
            boxShadow="8px 8px 0px #7E0000"
          >
            <Typography variant="h1" display={{ sm: 'none' }}>
              Pinturas
            </Typography>
            <Typography variant="h2">95</Typography>
          </Box>
          <Typography
            variant="h1"
            display={{ xs: 'none', xl: 'flex' }}
            visibility="hidden"
          >
            Pinturas
          </Typography>
        </Grid>
      </Grid>
      <Box display="flex" flexGrow={1} bgcolor="silver" width="100%">
        ok
      </Box>
    </>
  )
}

export default home
