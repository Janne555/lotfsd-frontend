import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import AddIcon from '@material-ui/icons/Add';
import { useScreenResizeEvent } from '../../hooks';

const useStyles = createUseStyles((theme: Theme) => ({
  ModuleContainer: {
    border: theme.border,
    paddingTop: theme.padding,
    backgroundColor: theme.componentBackgroundColor,
    minHeight: theme.minHeight,
    position: 'relative'
  },
  button: {
    float: 'right',
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 0,
    backgroundColor: theme.colorPurpleButton,
    color: 'white',
    boxShadow: '2px 2px 5px grey',
    border: 'none',
    transition: theme.transition,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.colorPurpleButtonFocus
    },
    '&:focus': {
      outline: 'none',
      backgroundColor: theme.colorPurpleButtonFocus,
      boxShadow: '0 0 5px blue'
    }
  }
}))

type Props = {
  children: ReactNode
  onAddClick?: () => void
}

function ModuleContainer({ children, onAddClick }: Props) {
  const isMobile = useScreenResizeEvent(width => width < 1100)
  const classes = useStyles()

  return (
    <div className={classes.ModuleContainer}>
      {children}
      {onAddClick && !isMobile &&
        <button className={classes.button} onClick={onAddClick}>
          <AddIcon fontSize="large" />
        </button>
      }
    </div>
  )
}

export default ModuleContainer