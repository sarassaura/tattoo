// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { search } from '../../utils/cloudinary'

require('dotenv').config()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const params = req.body
  const definitive = await search(params)

  res.setHeader('x-content-type-options', 'nosniff')
  res.status(200).json({
    ...definitive,
  })
}
