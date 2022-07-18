import React, { useState } from 'react'
import Image from 'next/image'
import { Box, ImageListItem } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import { motion } from 'framer-motion'
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
  const myLoader = ({ src }: { src: string }) => src
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const imageUrl = React.useRef<any>('')
  const imageAlt = React.useRef<string | undefined>('')
  function handleOnImageClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const element = event.target as HTMLElement
    const { image, alt } = element.dataset
    if (image) {
      imageUrl.current = image
      imageAlt.current = alt
      handleOpen()
    }
  }
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
          onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            handleOnImageClick(event)
          }
        >
          {images &&
            images.map((image: ImageProp) => (
              <ImageListItem
                key={image.id}
                sx={{ cursor: 'zoom-in' }}
                component={motion.li}
                whileHover={{ scale: 0.95 }}
              >
                <Image
                  loader={myLoader}
                  src={image.image}
                  alt={image.title}
                  width={image.width}
                  height={image.height}
                  data-image={image.image}
                  data-alt={image.title}
                  placeholder="blur"
                  blurDataURL="./profile.webp"
                />
              </ImageListItem>
            ))}
        </Box>
      </Box>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          onClick={handleClose}
        >
          <Image
            loader={myLoader}
            src={imageUrl.current}
            alt={imageAlt.current}
            objectFit="contain"
            layout="fill"
          />
        </Box>
      </Dialog>
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
