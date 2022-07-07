/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, ImageListItem } from '@mui/material'
import Image from 'next/image'
import { ImageProp } from '../interfaces/trampos'
import { search, mapImageResources, getFolders } from '../utils/cloudinary'
import ScrollProps from '../helpers/scroll'

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
    const element = event.target as HTMLElement
    const { folderPath } = element.dataset
    setActiveFolder(folderPath!)
    setNextCursor(undefined)
    setImages([])
  }
  useEffect(() => {
    ;(async function run() {
      const results: any = await fetch('/api/search', {
        method: 'POST',
        body: JSON.stringify({
          nextCursor,
          expression: `folder="${activeFolder}"`,
        }),
      }).then((r) => r.json())
      const { resources, next_cursor: updatedNextCursor } = results
      const newimages: any = mapImageResources(resources)
      if (activeFolder !== '') {
        setImages((prev: any) => [...prev, ...newimages])
      }
      setNextCursor(updatedNextCursor)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFolder])
  return (
    <>
      <Grid
        container
        direction="row"
        spacing={1}
        paddingBottom="24px"
        paddingX={{ xs: 0, sm: 8, md: 8, lg: 0, xl: 0 }}
        justifyContent="center"
        onClick={(event) => handleOnFolderClick(event)}
      >
        {folders?.map((folder: any) => (
          <Grid item xs={3} sm={2.5} md={1.5} xl={1.7} key={folder.path}>
            <Button
              data-folder-path={folder.path}
              variant={folder.path === activeFolder ? 'active' : 'nav'}
            >
              {folder.name}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" flexGrow={1} width="100%" {...ScrollProps}>
        <Box
          component="ul"
          padding={0}
          margin={0}
          height="fit-content"
          sx={{
            columnGap: '10px',
            columnCount: {
              xs: 2,
              sm: 3,
              md: 4,
              lg: 5,
              xl: 5,
            },
          }}
        >
          {images?.map((image: ImageProp) => (
            <ImageListItem key={image.id}>
              <Image
                src={image.image}
                alt={image.title}
                width={image.width}
                height={image.height}
              />
            </ImageListItem>
          ))}
        </Box>
      </Box>
      {images?.length > 50 && (
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
      images: images || null,
      nextCursor: nextCursor || false,
      folders: folders || null,
    },
  }
}

export default trampos
