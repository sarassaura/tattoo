import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import { SpeedDialIcon, Link as MuiLink } from '@mui/material'

import { actions, textSpeed } from '../constants/text'

function Speed() {
  return (
    <SpeedDial
      ariaLabel={textSpeed.aria}
      sx={{ position: 'absolute', bottom: 16, right: 16, margin: '8px' }}
      icon={<SpeedDialIcon icon={textSpeed.icon} />}
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
