import React, { useState, ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import MSpeedDial from '@material-ui/lab/SpeedDial'
import Add from '@material-ui/icons/Add'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import { openModalWith } from '../../Redux/actions'
import { useDispatch } from '../../hooks'

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
  name: ModalContent
  icon: ReactNode | undefined,
  tooltip: string
}[] = [
    { name: 'addItem', icon: undefined, tooltip: 'Add\xa0Item' },
    { name: 'addRetainer', icon: undefined, tooltip: 'Add\xa0Retainer' },
    { name: 'addLanguage', icon: undefined, tooltip: 'Add\xa0Language' },
  ]

function SpeedDial() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  function handleClick(action: ModalContent) {
    dispatch(openModalWith(action))
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
            onClick={() => handleClick(action.name)}
          />
        ))
      }

    </MSpeedDial>
  )
}

export default SpeedDial