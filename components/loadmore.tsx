import { Button } from '@mui/material'
import React from 'react'
import { mapImageResources } from '../utils/cloudinary'
import { ImageProp } from '../interfaces/trampos'

interface LoadProps {
  images: ImageProp[] | false
  nextCursor: string | false
  setImages: (value: React.SetStateAction<false | ImageProp[]>) => void
  setNextCursor: React.Dispatch<React.SetStateAction<string | false>>
}

function Loadmore({ images, nextCursor, setImages, setNextCursor }: LoadProps) {
  const handleLoadMore = async () => {
    const results = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({
        nextCursor,
      }),
    }).then((r) => r.json())
    const { resources, next_cursor: updatedNextCursor } = results
    const newimages: ImageProp[] = mapImageResources(resources)
    const tempo = images && [...images, ...newimages]
    setImages(tempo)
    setNextCursor(updatedNextCursor)
  }

  return (
    <Button variant="nav" onClick={() => handleLoadMore()}>
      Ver Mais
    </Button>
  )
}

export default Loadmore
