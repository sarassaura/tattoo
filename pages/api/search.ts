// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import 'dotenv/config.js'
import type { NextApiRequest, NextApiResponse } from 'next'
import { search } from '../../utils/cloudinary'

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
