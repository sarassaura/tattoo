import { ResourceProp } from '../interfaces/trampos'

export async function search(options: any = {}) {
  const params = {
    ...options,
  }
  if (options.nextCursor) {
    params.next_cursor = options.nextCursor
    delete params.nextCursor
  }
  const paramString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&')
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/resources/image?${paramString}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
        ).toString('base64')}`,
        'Content-Type': 'application/json; charset=utf-8',
      },
    }
  ).then((r) => r.json())
  return results
}

export function mapImageResources(resources: ResourceProp[]) {
  return resources.map((resource: ResourceProp) => {
    const { width, height } = resource
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height,
    }
  })
}
