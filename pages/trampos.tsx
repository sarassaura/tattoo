import { search, mapImageResources, getFolders } from '../utils/cloudinary'
import Gallery from '../components/gallery'
import { TramProps } from '../interfaces/trampos'

function trampos({
  images: defaultImages,
  nextCursor: defaultNextCursor,
  folders,
}: TramProps) {
  return (
    <Gallery
      defaultimages={defaultImages}
      defaultcursor={defaultNextCursor}
      folders={folders}
    />
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
  }
}

export default trampos
