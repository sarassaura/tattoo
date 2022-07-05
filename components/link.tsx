import React from 'react'
import { Link as MuiLink } from '@mui/material'
import Link from 'next/link'

function LinkItem({
  href,
  name,
  path,
}: {
  href: string
  name: string
  path: string
}) {
  const active = path === href
  return (
    <Link href={href}>
      <MuiLink
        variant="h4"
        underline={active ? 'always' : 'hover'}
        component="menuitem"
      >
        {name}
      </MuiLink>
    </Link>
  )
}

export default LinkItem
