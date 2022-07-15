import React, { useEffect, useState } from 'react'
import { Button, Grid } from '@mui/material'
import axios from 'axios'
import { ImageProp, Result } from '../interfaces/trampos'
import { mapImageResources } from '../utils/cloudinary'

interface FolderProps {
  path: string
  name: string
}

interface navigationProps {
  folders: FolderProps[]
  setNextCursor: React.Dispatch<React.SetStateAction<string | false>>
  setImages: React.Dispatch<React.SetStateAction<false | ImageProp[]>>
  images: false | ImageProp[]
  nextCursor: string | false
}

function Navigation({
  folders,
  setNextCursor,
  setImages,
  images,
  nextCursor,
}: navigationProps) {
  const [activeFolder, setActiveFolder] = useState('')
  useEffect(() => {
    ;(async () => {
      const results = axios.post('/api/search', {
        nextCursor,
        expression: `folder="${activeFolder}"`,
      })
      const definitive: Result = (await results).data
      const { resources, next_cursor: updatedNextCursor } = definitive
      const newimages: ImageProp[] = mapImageResources(resources)
      if (activeFolder !== '') {
        const tempo = images ? [...images, ...newimages] : [...newimages]
        setImages(tempo)
      }
      setNextCursor(updatedNextCursor)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFolder])
  function handleOnFolderClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const element = event.target as HTMLElement
    const { folderPath } = element.dataset
    setActiveFolder(folderPath!)
    setImages(false)
    setNextCursor(false)
  }
  return (
    <Grid
      container
      direction="row"
      spacing={1}
      paddingBottom="24px"
      paddingX={{ xs: 0, sm: 8, md: 8, lg: 0, xl: 0 }}
      justifyContent="center"
      onClick={(event) => handleOnFolderClick(event)}
    >
      {folders
        ? folders.map((folder) => (
            <Grid item xs={3} sm={2.5} md={1.5} xl={1.7} key={folder.path}>
              <Button
                data-folder-path={folder.path}
                variant={folder.path === activeFolder ? 'active' : 'nav'}
              >
                {folder.name}
              </Button>
            </Grid>
          ))
        : ''}
    </Grid>
  )
}

export default Navigation
