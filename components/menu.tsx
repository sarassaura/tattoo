import { Stack } from '@mui/material'
import LinkItem from './link'

function MenuComponent({ path }: { path: string }) {
  return (
    <Stack direction="row" spacing="24px" component="menu">
      <LinkItem href="/" name="Start" path={path} />
      <LinkItem href="/trampos" name="Trampos" path={path} />
      <LinkItem href="/contato" name="Contato" path={path} />
    </Stack>
  )
}

export default MenuComponent
