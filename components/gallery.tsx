import React, { useState } from 'react'
import Image from 'next/image'
import { Box, ImageListItem } from '@mui/material'
import ScrollProps from '../helpers/scroll'
import { ImageProp } from '../interfaces/trampos'
import Loadmore from './loadmore'
import Navigation from './navigation'

interface FolderProps {
  path: string
  name: string
}

interface GalProps {
  defaultimages: ImageProp[] | false
  defaultcursor: string | false
  folders: FolderProps[]
}

function Gallery({ defaultimages, defaultcursor, folders }: GalProps) {
  const [images, setImages] = useState<ImageProp[] | false>(defaultimages)
  const [nextCursor, setNextCursor] = useState(defaultcursor)
  const myLoader = ({ src }: any) =>
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${src}`
  return (
    <>
      <Navigation
        folders={folders}
        setImages={setImages}
        setNextCursor={setNextCursor}
        images={images}
        nextCursor={nextCursor}
      />
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
          {images &&
            images.map((image: ImageProp) => (
              <ImageListItem key={image.id}>
                <Image
                  loader={myLoader}
                  src={image.title}
                  alt={image.title}
                  width={image.width}
                  height={image.height}
                />
              </ImageListItem>
            ))}
        </Box>
      </Box>
      {images && images.length > 50 && (
        <Loadmore
          images={images}
          setImages={setImages}
          nextCursor={nextCursor}
          setNextCursor={setNextCursor}
        />
      )}
    </>
  )
}

export default Gallery
