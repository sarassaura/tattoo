import { Stack, Link as MuiLink } from '@mui/material'
import Link from 'next/link'

function MenuComponent() {
  return (
    <Stack direction="row" spacing="24px">
      <Link href="/">
        <MuiLink variant="h4">Start</MuiLink>
      </Link>
      <Link href="/trampos">
        <MuiLink variant="h4">Trampos</MuiLink>
      </Link>
      <Link href="/contato">
        <MuiLink variant="h4">Contato</MuiLink>
      </Link>
    </Stack>
  )
}

export default MenuComponent
