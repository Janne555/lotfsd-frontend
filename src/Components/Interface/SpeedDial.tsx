import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import MSpeedDial from '@material-ui/lab/SpeedDial'
import Add from '@material-ui/icons/Add'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { getSpeedDialActions } from '../../constants'

const useStyles = createUseStyles((theme: Theme) => ({
  speedDial: {
    position: 'fixed',
    right: '1rem',
    bottom: '1rem',
    '& > button': {
      backgroundColor: theme.colorPurpleButton,
      '&:hover': {
        backgroundColor: theme.colorPurpleButtonFocus,
      },
      '&:focus': {
        backgroundColor: theme.colorPurpleButtonFocus,
      }
    }
  },
  icon: {
  }
}))

function SpeedDial() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const history = useHistory()
  const characterNameMatch = useRouteMatch<{ character: string }>('/characters/:character')
  const pageMatch = useRouteMatch<{ page: string }>('/:page')
  const actions = getSpeedDialActions(pageMatch)

  function handleClick(action: string | ((root: string) => string)) {
    if (typeof action === "string") {
      history.push(action)
    } else {
      if (characterNameMatch?.params.character) {
        history.push(action(characterNameMatch?.params.character))
      }
    }
  }

  return (
    <MSpeedDial
      ariaLabel=""
      className={classes.speedDial}
      icon={<Add className={classes.icon} />}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      direction='up'
    >
      {
        actions.map(action => (
          <SpeedDialAction
            key={action.tooltip}
            tooltipTitle={action.tooltip}
            tooltipOpen
            icon={action.icon}
            onClick={() => handleClick(action.action)}
          />
        ))
      }

    </MSpeedDial>
  )
}

export default SpeedDial