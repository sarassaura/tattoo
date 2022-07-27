import { Stack } from '@mui/material'
import { LayoutProps } from '../interfaces/trampos'
import LinkItem from './link'

function MenuComponent({ router, t }: { router: string; t: LayoutProps }) {
  return (
    <Stack direction="row" spacing="24px">
      <LinkItem href="/" name={t.menu.first} path={router} />
      <LinkItem href="/works" name={t.menu.second} path={router} />
      <LinkItem href="/contato" name={t.menu.third} path={router} />
    </Stack>
  )
}

export default MenuComponent
