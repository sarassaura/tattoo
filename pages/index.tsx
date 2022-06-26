import { Grid, Typography } from '@mui/material'

function Home() {
  return (
    <Grid container spacing={2}>
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
        <Typography>Subtitles</Typography>
      </Grid>
    </Grid>
  )
}

export default Home
