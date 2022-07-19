import { Button, Grid } from '@mui/material'
import React from 'react'
import Link from 'next/link'

interface FolderProps {
  path: string
  name: string
}

function Folders({
  folders,
  active: activeFolder,
}: {
  folders: FolderProps[]
  active: string | string[] | undefined
}) {
  return (
    <Grid
      container
      direction="row"
      spacing={1}
      paddingBottom="24px"
      paddingX={{ xs: 0, sm: 8, md: 8, lg: 0, xl: 0 }}
      justifyContent="center"
    >
      {folders
        ? folders.map((folder) => (
            <Grid item xs={3} sm={2.5} md={1.5} xl={1.7} key={folder.path}>
              <Link href={`/works/${folder.path}`} passHref>
                <Button
                  data-folder-path={folder.path}
                  variant={folder.path === activeFolder ? 'active' : 'nav'}
                >
                  {folder.name}
                </Button>
              </Link>
            </Grid>
          ))
        : ''}
    </Grid>
  )
}

export default Folders
