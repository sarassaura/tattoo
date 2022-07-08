// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

require('dotenv').config()

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
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/resources/search?${paramString}`,
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const params = JSON.parse(req.body)
  const results = await search(params)
  res.status(200).json({
    ...results,
  })
}
