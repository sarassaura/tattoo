import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'

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

export const actions = [
  {
    icon: <WhatsAppIcon />,
    name: 'Whatsapp',
    href: 'https://wa.me/5511999999999',
  },
  { icon: <TwitterIcon />, name: 'Twitter', href: 'https://twitter.com/' },
  {
    icon: <InstagramIcon />,
    name: 'Instagram',
    href: 'https://www.instagram.com/',
  },
  {
    icon: <YouTubeIcon />,
    name: 'Youtube',
    href: 'https://www.youtube.com/',
  },
]

export const textSpeed = {
  aria: 'Social media',
  icon: <WhatsAppIcon />,
}
