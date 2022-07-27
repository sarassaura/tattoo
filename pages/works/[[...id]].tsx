import { GetStaticPaths, GetStaticProps } from 'next'
import { Box, Button, Dialog, ImageListItem } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import axios from 'axios'
import { getFolders, mapImageResources, search } from '../../utils/cloudinary'
import { ImageProp, TramProps } from '../../interfaces/trampos'
import Container from '../../components/container'
import Folders from '../../components/folders'
import ScrollProps from '../../helpers/scroll'
import ptl from '../../locales/pt-BR/common'
import enl from '../../locales/en/common'
import pt from '../../locales/pt-BR/works'
import en from '../../locales/en/works'
import Layout from '../../components/layout'

interface FolderProps {
  path?: string
  name?: string
}

function Post({ propina: pro }: { propina: TramProps }) {
  const [cursor, setCursor] = React.useState(pro.nextCursor)
  const [images, setImages] = React.useState(pro.images)
  React.useEffect(() => {
    setCursor(pro.nextCursor)
    setImages(pro.images)
  }, [pro.nextCursor, pro.images])
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
  async function handleMore() {
    const data = {
      expression: `folder="${pro.active}"`,
      next_cursor: cursor,
      max_results: 15,
    }
    const results = axios.post('/api/search', data)
    const { resources, next_cursor: next } = (await results).data
    const newImages = mapImageResources(resources)
    setCursor(next)
    setImages(newImages)
  }
  return (
    <Layout router="/works" text={pro.layout}>
      <Container>
        <Folders folders={pro.folders} active={pro.active} />
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
        {cursor && (
          <Button variant="active" onClick={() => handleMore()}>
            {pro.text.button}
          </Button>
        )}
      </Container>
    </Layout>
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
  const layout = locale === 'pt-BR' ? ptl : enl
  const text = locale === 'pt-BR' ? pt : en
  let folder = params!.id
  folder = folder === undefined ? '' : folder
  const results = await search({
    expression: `folder="${folder}"`,
    max_results: 15,
  })
  const active = params!.id ? params!.id[0] : ''
  const { resources, next_cursor: nextCursor } = results
  const images = mapImageResources(resources)
  const { folders } = await getFolders()
  let propina = {
    images,
    nextCursor: nextCursor || false,
    folders,
    active,
    layout,
    text,
  }
  propina = JSON.parse(JSON.stringify(propina))
  return {
    props: {
      propina,
    },
  }
}

export default Post
