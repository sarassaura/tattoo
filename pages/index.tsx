import { Grid } from '@mui/material'

function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <p>xs=8</p>
      </Grid>
      <Grid item xs={12}>
        <p>xs=4</p>
      </Grid>
      <Grid item xs={6}>
        <p>xs=8</p>
      </Grid>
      <Grid item xs={6}>
        <p>xs=4</p>
      </Grid>
    </Grid>
  )
}

export default Home
