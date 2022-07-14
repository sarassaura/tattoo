import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'

export const icons = [
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

export const iconButton = {
  aria: 'Social media',
  icon: <WhatsAppIcon />,
}
