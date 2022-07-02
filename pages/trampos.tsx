import { Box, Button, Grid } from '@mui/material'

function trampos() {
  return (
    <>
      <Grid
        container
        direction="row"
        spacing={1}
        paddingY="24px"
        paddingX={{ xs: 0, sm: 8, md: 8, lg: 0, xl: 0 }}
        justifyContent="center"
      >
        <Grid item xs={3} sm={2.5} md={1.5} xl={1.7}>
          <Button variant="nav">Lápis</Button>
        </Grid>
        <Grid item xs={3} sm={2.5} md={1.5} xl={1.7}>
          <Button variant="nav">Color</Button>
        </Grid>
        <Grid item xs={3} sm={2.5} md={1.5} xl={1.7}>
          <Button variant="nav">Ink</Button>
        </Grid>
        <Grid item xs={3} sm={2.5} md={1.5} xl={1.7}>
          <Button variant="nav">Oléo</Button>
        </Grid>
        <Grid item xs={3} sm={2.5} md={1.5} xl={1.7}>
          <Button variant="nav">digital</Button>
        </Grid>
        <Grid item xs={3} sm={2.5} md={1.5} xl={1.7}>
          <Button variant="nav">tatu</Button>
        </Grid>
        <Grid item xs={3} sm={2.5} md={1.5} xl={1.7}>
          <Button variant="nav">mural</Button>
        </Grid>
      </Grid>
      <Box display="flex" flexGrow={1} bgcolor="#1145f4" width="100%">
        asd
      </Box>
    </>
  )
}

export default trampos
