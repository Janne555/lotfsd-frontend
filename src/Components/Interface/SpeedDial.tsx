import React, { useState, ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import MSpeedDial from '@material-ui/lab/SpeedDial'
import Add from '@material-ui/icons/Add'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import { useCharacterContext, useScreenResizeEvent } from '../../hooks'
import { useHistory } from 'react-router-dom'
import Icon from '@material-ui/icons/AcUnit'

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

type Props = {

}

const actions: {
  name: string
  icon: ReactNode | undefined,
  tooltip: string
}[] = [
    { name: 'addItem', icon: <Icon />, tooltip: 'Add\xa0Item' },
    { name: 'addRetainer', icon: <Icon />, tooltip: 'Add\xa0Retainer' },
    { name: 'addLanguage', icon: <Icon />, tooltip: 'Add\xa0Language' },
  ]

function SpeedDial() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const history = useHistory()
  const { characterName } = useCharacterContext()
  const isMobile = useScreenResizeEvent(width => width < 1100)

  function handleClick(action: string) {
    history.push(`/characters/${characterName}/${action}`)
  }

  if (!isMobile) {
    return null
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
            key={action.name}
            tooltipTitle={action.tooltip}
            tooltipOpen
            icon={action.icon}
            onClick={() => handleClick(action.name)}
          />
        ))
      }

    </MSpeedDial>
  )
}

export default SpeedDial