import { Button } from '@mui/material'
import React from 'react'
import axios from 'axios'
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
    const results = axios.post('/api/search', { nextCursor })
    const definitive = (await results).data
    const { resources, next_cursor: updatedNextCursor } = definitive
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
