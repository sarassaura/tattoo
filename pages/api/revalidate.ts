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
    const note = req.body.notification_type
    if (note === 'upload') {
      const id = req.body.public_id
      let folder = id.split('/')
      folder = folder.length > 1 ? `/${folder[0]}` : ''
      const final = `/works${folder}`
      await res.unstable_revalidate(final)
      return res.json({ revalidated: true })
    }
    if (note === 'delete') {
      const id = req.body.resources[0].public_id
      let folder = id.split('/')
      folder = folder.length > 1 ? `/${folder[0]}` : ''
      const final = `/works${folder}`
      await res.unstable_revalidate(final)
      return res.json({ revalidated: true })
    }
    await res.unstable_revalidate('/works')
    return res.status(501).json({ message: 'Not Implemented', note })
  } catch (err) {
    return res.status(500).json({
      message: 'Error revalidating',
      received: req.body.notification_type,
      error: err,
    })
  }
}
