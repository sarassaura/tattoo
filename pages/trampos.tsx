/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Grid } from '@mui/material'
import ImageListItem, {
  imageListItemClasses,
} from '@mui/material/ImageListItem'
import Image from 'next/image'
import { useState } from 'react'
import { ImageProp } from '../interfaces/trampos'
import { search, mapImageResources } from '../utils/cloudinary'

function trampos({
  images: defaultImages,
  nextCursor: defaultNextCursor,
}: {
  images: any
  nextCursor: string
}) {
  const [images, setImages] = useState(defaultImages)
  const [nextCursor, setNextCursor] = useState(defaultNextCursor)
  async function handleLoadMore(e: Event) {
    e.preventDefault()
    const results = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({
        nextCursor,
      }),
    }).then((r) => r.json())
    const { resources, next_cursor: updatedNextCursor } = results
    const newimages = mapImageResources(resources)
    setImages((prev: any) => [...prev, ...newimages])
    setNextCursor(updatedNextCursor)
  }
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
        <Box
          component="ul"
          padding={0}
          margin={0}
          sx={{
            backgroundColor: 'pink',
            columnGap: '10px',
            columnCount: {
              xs: 2,
              sm: 3,
              md: 4,
              lg: 5,
              xl: 5,
            },
            [`& .${imageListItemClasses.root}`]: {
              display: 'flex',
              breakInside: 'avoid',
              margin: 0,
              marginBottom: '10px',
            },
          }}
        >
          {images.map((image: ImageProp) => (
            <ImageListItem key={image.id}>
              <Image
                src={image.image}
                alt={image.title}
                width={image.width}
                height={image.height}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </Box>
      </Box>
      <Button variant="nav" onClick={() => handleLoadMore}>
        Ver Mais
      </Button>
    </>
  )
}

export async function getStaticProps() {
  const results = await search()
  const { resources, next_cursor: nextCursor } = results
  const images = mapImageResources(resources)
  return {
    props: {
      images,
      nextCursor,
    },
  }
}

export default trampos
