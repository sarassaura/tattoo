import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import { SpeedDialIcon } from '@mui/material'
// import Link from 'next/link'
import { actions, textSpeed } from '../constants/text'

function Speed() {
  return (
    <SpeedDial
      ariaLabel={textSpeed.aria}
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon icon={textSpeed.icon} />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          title={action.name}
        />
      ))}
    </SpeedDial>
  )
}

/* <Link
      title={action.name}
      href={action.href}
      key={action.name}
      target="_blank"
      rel="noopener"
    /> */

export default Speed
