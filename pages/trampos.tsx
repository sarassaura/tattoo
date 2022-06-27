import { Box, ImageList, ImageListItem } from '@mui/material'

function trampos() {
  const heights = [200, 100, 300, 400, 50, 300, 250]
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {heights.map((item) => (
        <ImageListItem key={item}>
          <Box height={item} bgcolor="#452388" />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default trampos
