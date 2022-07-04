import { Box, Typography, Grid } from '@mui/material'
import Slider from '../components/slider'
import { textFacts } from '../constants/text'

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
        {textFacts.map((fact) => (
          <Grid
            item
            xs={6}
            xl={3}
            display="flex"
            flexDirection={fact.id % 2 === 0 ? 'column' : 'column-reverse'}
            justifyContent={
              fact.id < 2
                ? { xs: 'center', sm: 'flex-start', lg: 'center' }
                : { xs: 'center', sm: 'flex-end', lg: 'center' }
            }
            alignItems={
              fact.id < 2
                ? { xs: 'center', sm: 'flex-start', lg: 'center' }
                : { xs: 'center', sm: 'flex-end', lg: 'center' }
            }
            key={fact.id}
          >
            <Typography variant="h1" display={{ xs: 'none', sm: 'flex' }}>
              {fact.name}
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
                {fact.name}
              </Typography>
              <Typography variant="h2">{fact.number}</Typography>
            </Box>
            <Typography
              variant="h1"
              display={{ xs: 'none', xl: 'flex' }}
              visibility="hidden"
            >
              {fact.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" flexGrow={1} bgcolor="silver" width="100%">
        <Slider />
      </Box>
    </>
  )
}

export default home
