import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import { Link as MuiLink } from '@mui/material'
import { actions, textSpeed } from '../constants/text'

function Speed() {
  return (
    <SpeedDial
      ariaLabel={textSpeed.aria}
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={textSpeed.icon}
    >
      {actions.map((action) => (
        <MuiLink
          title={action.name}
          href={action.href}
          key={action.name}
          target="_blank"
          rel="noopener"
        >
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        </MuiLink>
      ))}
    </SpeedDial>
  )
}

export default Speed
