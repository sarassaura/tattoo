import React from 'react'
import Link from 'next/link'
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
  const general = path.split('/')
  const active = general[1] === href
  return (
    <Link href={`/${href}`} passHref>
      <MuiLink variant="h4" underline={active ? 'always' : 'hover'}>
        {name}
      </MuiLink>
    </Link>
  )
}

export default LinkItem
