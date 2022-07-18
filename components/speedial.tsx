import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import { SpeedDialIcon, Link as MuiLink } from '@mui/material'

import { actions, iconButton } from '../constants/icons'

function Speed() {
  return (
    <SpeedDial
      ariaLabel={iconButton.aria}
      sx={{ position: 'fixed', bottom: 24, right: 24 }}
      icon={<SpeedDialIcon icon={iconButton.icon} />}
    >
      {actions.map((action) => (
        <MuiLink
          component={SpeedDialAction}
          href={action.href}
          key={action.name}
          icon={action.icon}
          title={action.name}
          target="_blank"
          rel="noopener"
        />
      ))}
    </SpeedDial>
  )
}

export default Speed
