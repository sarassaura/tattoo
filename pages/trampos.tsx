import { search, mapImageResources, getFolders } from '../utils/cloudinary'
import Gallery from '../components/gallery'
import { TramProps } from '../interfaces/trampos'
import Container from '../components/container'

function trampos({
  images: defaultImages,
  nextCursor: defaultNextCursor,
  folders,
}: TramProps) {
  return (
    <Container>
      <Gallery
        defaultimages={defaultImages}
        defaultcursor={defaultNextCursor}
        folders={folders}
      />
    </Container>
  )
}

export async function getStaticProps() {
  const results = await search({
    expression: 'folder=""',
  })
  const { resources, next_cursor: nextCursor } = results
  const images = mapImageResources(resources)
  const { folders } = await getFolders()
  const propina = {
    images,
    nextCursor: nextCursor || false,
    folders,
  }
  return {
    props: JSON.parse(JSON.stringify(propina)),
    revalidate: 60,
  }
}

export default trampos
