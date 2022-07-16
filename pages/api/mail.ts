// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

require('dotenv').config()

type Data = {
  status: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { nome, email, telefone, textarea } = req.body
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  })
  await new Promise((resolve, reject) => {
    transporter.verify((error, success) => {
      if (error) {
        reject(error)
      } else {
        resolve(success)
      }
    })
  })
  const mailOption = {
    from: `${process.env.EMAIL}`,
    to: `${process.env.EMAIL}`,
    subject: `Novo Cliente: ${nome}`,
    text: `
    nome : ${nome}
    email: ${email}
    telefone: ${telefone}
    mensagem: ${textarea}
    `,
  }
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOption, (err, info) => {
      if (err) {
        reject(err)
      } else {
        resolve(info)
      }
    })
  })
  res.setHeader('x-content-type-options', 'nosniff')
  res.setHeader('cache-control', 'no-cache')
  res.status(200).json({ status: 'Ok' })
}
