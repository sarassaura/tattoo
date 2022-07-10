import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'

export const textContact = 'Qualquer dúvida chame pelo whatsapp!'

export const textFacts = [
  { id: 0, name: 'Clientes', number: 236 },
  { id: 1, name: 'Tatuagens', number: 578 },
  { id: 2, name: 'Desenhos', number: 1024 },
  { id: 3, name: 'Pinturas', number: 95 },
]

export const textForm = [
  {
    id: 0,
    name: 'nome',
    label: 'Nome',
    type: 'text',
    multi: false,
    value: 255,
    message: 'Muito Longo',
    maxText: 'Campo Obrigatório',
    required: true,
  },
  {
    id: 1,
    name: 'email',
    label: 'Email',
    type: 'email',
    multi: false,
    value: 255,
    message: 'Muito Longo',
    maxText: 'Campo Obrigatório',
    required: true,
  },
  {
    id: 2,
    name: 'telefone',
    label: 'Telefone',
    type: 'tel',
    multi: false,
    value: 30,
    message: 'Muito Longo',
    maxText: 'Campo Obrigatório',
    required: true,
  },
  {
    id: 3,
    name: 'textarea',
    label: 'Escreva pedido aqui',
    type: 'text',
    multi: true,
    value: 2000,
    message: 'Muito Longo',
    maxText: false,
    required: false,
  },
]

export const textAlert = {
  title: 'Mensagem Enviada com Sucesso!',
  body: 'Entraremos em contato em breve.',
}

export const textInfo = {
  logo: { start: 'Under', mid: '\u005C', end: 'Ground' },
  name: 'Vitor Valentim',
  description: 'Desenhista, tatuador, pintor, grafiteiro e CEO',
  address: 'Endereço: R. Pe. Vieira Machado de uvas, 200A',
  phone: 'Fone: +20 11 99123-4567',
  cell: 'What\u0060s: +20 11 99123-4567',
  gmail: 'Gmail: vitor.underground',
  copyright: '©Copyright 2022 Todos os direitos reservados',
}

export const textIcons = [
  {
    id: 0,
    href: 'https://wa.me/5511999999999',
    title: 'whatsapp',
    icon: <WhatsAppIcon />,
  },
  {
    id: 1,
    href: 'https://www.instagram.com/',
    title: 'instagram',
    icon: <InstagramIcon />,
  },
]

export const textCards = [
  { id: 1, text: 'Trabalho incrível, tu é monstro demais.  Parabéns irmão 🐨' },
  { id: 2, text: 'Vou te acompanhar pra aprender mn tu e fd 👏✍🤙' },
  { id: 3, text: 'Na moral, parabéns pela qualidade do trampo! 🔥🔥' },
  { id: 4, text: 'Trabalho fenomenal ! Parabéns irmão 🐨' },
  { id: 5, text: 'trabalho surreal, fico mais impressionado a cada trampo!!' },
  {
    id: 6,
    text: 'Que isso monstro so seu fã. Monstro dimais chama a Nasa!',
  },
  { id: 7, text: 'A tattoo ficou melhor do que a referência 😱😱😱' },
  {
    id: 8,
    text: 'Show .mano .eu chegar nesse nível ..vou embora do Brasil 🇧🇷 😂',
  },
  { id: 9, text: 'Estou acompanhando você pra depois fazer uma desse naip' },
  { id: 10, text: 'Trampo surreal slc' },
  {
    id: 11,
    text: 'Todo dia ver uma arte que você nunca vai se arrepender',
  },
  { id: 12, text: 'Uma mais top q a outra' },
]
