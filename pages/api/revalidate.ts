// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

require('dotenv').config()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.SECRET_TOKEN) {
    return res
      .status(401)
      .json({ message: 'Invalid token', received: req.query.secret })
  }
  try {
    const { notification_type: note } = req.body
    if (note === 'upload') {
      const { public_id: name } = req.body
      const folder = name.split('/')
      const path = folder.length > 1 ? `/${folder[0]}` : ''
      // @ts-ignore
      await res.revalidate(`/works${path}`)
      return res.json({ revalidated: true })
    }
    if (note === 'delete') {
      const { resources } = req.body
      const name = resources.public_id
      const folder = name.split('/')
      const path = folder.length > 1 ? `/${folder[0]}` : ''
      // @ts-ignore
      await res.revalidate(`/works${path}`)
      return res.json({ revalidated: true })
    }
    return res.status(200).send('Rejected')
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
