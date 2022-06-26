import { Button, Grid, Typography } from '@mui/material'

function home() {
  return (
    <Grid container spacing={2.5}>
      <Grid item xs={12}>
        <Typography variant="h1">Hero text</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2">Hero numba</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3">titles-logo</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4">Headings</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h5">Text Icon-Input</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6">Text</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant="input">
          <Typography variant="h4">Tattoo</Typography>
        </Button>
        <Typography>Subtitles</Typography>
        <Button variant="nav">
          <Typography variant="h4">Enviar</Typography>
        </Button>
      </Grid>
    </Grid>
  )
}

export default home
