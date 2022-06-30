// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

require('dotenv').config()

type Data = {
  status: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { nome, email, telefone, textarea } = JSON.parse(req.body)
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
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
  transporter.sendMail(mailOption)
  res.status(200).json({ status: 'Ok' })
}
