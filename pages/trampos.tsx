/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Grid } from '@mui/material'
import ImageListItem, {
  imageListItemClasses,
} from '@mui/material/ImageListItem'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { ImageProp } from '../interfaces/trampos'
import { search, mapImageResources, getFolders } from '../utils/cloudinary'

function trampos({
  images: defaultImages,
  nextCursor: defaultNextCursor,
  folders,
}: {
  images: any
  nextCursor?: string
  folders: any
}) {
  const [images, setImages] = useState(defaultImages)
  const [nextCursor, setNextCursor] = useState(defaultNextCursor)
  const [activeFolder, setActiveFolder] = useState('')
  const handleLoadMore = React.useCallback(async () => {
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
  }, [nextCursor])
  function handleOnFolderClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const { folderPath } = event.target.dataset
    setActiveFolder(folderPath)
    setNextCursor(undefined)
    setImages([])
  }
  useEffect(() => {
    ;(async function run() {
      const results = await fetch('/api/search', {
        method: 'POST',
        body: JSON.stringify({
          nextCursor,
          expression: `folder="${activeFolder}"`,
        }),
      }).then((r) => r.json())
      const { resources, next_cursor: updatedNextCursor } = results
      const newimages = mapImageResources(resources)
      setImages((prev: any) => [...prev, ...newimages])
      setNextCursor(updatedNextCursor)
    })()
  }, [activeFolder])
  return (
    <>
      <Grid
        container
        direction="row"
        spacing={1}
        paddingY="24px"
        paddingX={{ xs: 0, sm: 8, md: 8, lg: 0, xl: 0 }}
        justifyContent="center"
        onClick={(event) => handleOnFolderClick(event)}
      >
        {folders.map((folder: any) => (
          <Grid item xs={3} sm={2.5} md={1.5} xl={1.7} key={folder.path}>
            <Button data-folder-path={folder.path} variant="nav">
              {folder.name}
            </Button>
          </Grid>
        ))}
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
      {images.length > 50 && (
        <Button variant="nav" onClick={() => handleLoadMore()}>
          Ver Mais
        </Button>
      )}
    </>
  )
}

export async function getStaticProps() {
  const results = await search({
    expression: 'folder=""',
  })
  const { resources, next_cursor: nextCursor } = results
  const images = mapImageResources(resources)
  const { folders } = await getFolders()
  return {
    props: {
      images,
      nextCursor: nextCursor || null,
      folders,
    },
  }
}

export default trampos
