import React from 'react'
import Link from 'next/link'
import { Link as MuiLink } from '@mui/material'

function LinkItem({
  href,
  name,
  path,
  locale,
}: {
  href: string
  name: string
  path: string
  locale: string | undefined
}) {
  const active = path === href
  return (
    <Link href={href} locale={locale} passHref>
      <MuiLink variant="h4" underline={active ? 'always' : 'hover'}>
        {name}
      </MuiLink>
    </Link>
  )
}

export default LinkItem
