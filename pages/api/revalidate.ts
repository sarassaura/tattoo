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
      const finalen = `/en/works${folder}`
      console.log('coming from if upload:', req.body)
      console.log('final:', finalen)
      // const results = await res.revalidate(final)
      const resultsdois = await res.revalidate(finalen)
      return res.json({
        revalidated: true,
        final,
        finalen,
        resultsdois,
      })
    }
    if (note === 'delete') {
      const id = req.body.resources[0].public_id
      let folder = id.split('/')
      folder = folder.length > 1 ? `/${folder[0]}` : ''
      const final = `/works${folder}`
      const finalen = `/en/works${folder}`
      console.log('coming from if delete:', req.body)
      console.log('final:', final, finalen)
      // const results = await res.revalidate(final)
      const resultsdois = await res.revalidate(finalen)
      return res.json({
        revalidated: true,
        final,
        finalen,
        resultsdois,
      })
    }
    // const end = `/works`
    const ended = `/en/works`
    console.log('coming from not impremented:', req.body)
    // const justtobesure = await res.revalidate(end)
    const givememore = await res.revalidate(ended)
    return res
      .status(501)
      .json({ message: 'Not Implemented', note, givememore })
  } catch (err) {
    console.log('coming from catch:', req.body)
    return res.status(500).json({
      message: 'Error revalidating',
      received: req.body,
      error: err,
    })
  }
}
