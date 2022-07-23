// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

require('dotenv').config()

export default async function handler(req, res) {
  if (req.query.secret !== process.env.SECRET_TOKEN) {
    return res
      .status(401)
      .json({ message: 'Invalid token', received: req.query.secret })
  }
  try {
    await res.unstable_revalidate('/works')
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send(`Error revalidating: ${err}`)
  }
}
