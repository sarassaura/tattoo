import React from 'react'
import { Link as MuiLink } from '@mui/material'

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
    <MuiLink href={href} variant="h4" underline={active ? 'always' : 'hover'}>
      {name}
    </MuiLink>
  )
}

export default LinkItem
