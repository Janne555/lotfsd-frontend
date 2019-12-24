import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import AddIcon from '@material-ui/icons/Add';

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
    backgroundColor: '#a958d7',
    color: 'white',
    boxShadow: '2px 2px 5px grey',
    border: 'none',
    transition: theme.transition,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#9237c5'
    },
    '&:focus': {
      outline: 'none',
      backgroundColor: '#9237c5',
      boxShadow: '0 0 5px blue'
    }
  }
}))

type Props = {
  children: ReactNode
  onAddClick?: () => void
}

function ModuleContainer({ children, onAddClick }: Props) {
  const classes = useStyles()
  return (
    <div className={classes.ModuleContainer}>
      {children}
      {onAddClick &&
        <button className={classes.button} onClick={onAddClick}>
          <AddIcon fontSize="large" />
        </button>
      }
    </div>
  )
}

export default ModuleContainer