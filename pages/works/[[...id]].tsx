import { GetStaticPaths, GetStaticProps } from 'next'
import { Box, Dialog, ImageListItem } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'
import { getFolders, mapImageResources, search } from '../../utils/cloudinary'
import { ImageProp, TramProps } from '../../interfaces/trampos'
import Container from '../../components/container'
import Folders from '../../components/folders'
import ScrollProps from '../../helpers/scroll'

interface FolderProps {
  path?: string
  name?: string
}

function Post({ images, nextCursor, folders, active }: TramProps) {
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
      <NextSeo
        title="/works - Underground"
        description="Veja mais em: /works"
      />
      <Container>
        <Folders folders={folders} active={active} />
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
                    unoptimized
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
              unoptimized
            />
          </Box>
        </Dialog>
        {nextCursor && <Box>A</Box>}
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  let { folders }: { folders: FolderProps[] } = await getFolders()
  folders = [...folders, {}]
  const paths = folders
    .map((folder) =>
      locales!.map((locale) => ({
        params: { id: folder.path ? [folder.path] : [] },
        locale,
      }))
    )
    .flat()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  let folder = params!.id
  folder = folder === undefined ? '' : folder
  const results = await search({
    expression: `folder="${folder}"`,
  })
  const active = params!.id ? params!.id[0] : ''
  const { resources, next_cursor: nextCursor } = results
  const images = mapImageResources(resources)
  const { folders } = await getFolders()
  const propina = {
    images,
    nextCursor: nextCursor || false,
    folders,
    active,
    ...(await serverSideTranslations(locale!, ['common'])),
  }
  return {
    props: JSON.parse(JSON.stringify(propina)),
    revalidate: 60,
  }
}

export default Post
