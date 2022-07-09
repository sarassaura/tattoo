import { search, mapImageResources } from '../utils/cloudinary'
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
  const exist = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/folders`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
        ).toString('base64')}`,
      },
    }
  )
  const { folders } = await exist.json()
  console.log(exist)
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
