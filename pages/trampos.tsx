import { search, mapImageResources, getFolders } from '../utils/cloudinary'
import Gallery from '../components/gallery'
import { TramProps } from '../interfaces/trampos'

function trampos({
  images: defaultImages,
  nextCursor: defaultNextCursor,
  folders,
}: TramProps) {
  console.log('images', defaultImages)
  console.log('nextCursor', defaultNextCursor)
  console.log('folders 1', folders)
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
  return {
    props: {
      images,
      nextCursor: nextCursor || false,
      folders,
    },
  }
}

export default trampos
