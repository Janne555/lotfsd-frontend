import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import range from 'lodash/range'
import { useScreenResizeEvent } from '../../hooks'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

type Props = {
  value: number
  disabled?: boolean
  onValueChange?: (value: number) => void
  loading?: boolean
}

const useStyles = createUseStyles((theme: Theme) => ({
  dieFaceRoot: {
    width: 50,
    height: 50,
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: '33% 33% 33%',
    gridAutoFlow: 'row',
    border: theme.border,
    borderRadius: '10%',
    padding: 1,
    position: 'relative'
  },
  bigDie: {
    width: 150,
    height: 150,
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: '33% 33% 33%',
    gridAutoFlow: 'row',
    border: theme.border,
    borderRadius: '10%',
    padding: 1,
    backgroundColor: 'white',
    zIndex: 4
  },
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -20,
    marginLeft: -20,
  }
}))

export default function DieFace({ value, onValueChange, disabled, loading }: Props) {
  const [isEditing, setIsEditing] = useState(false)
  const classes = useStyles(disabled || loading)
  const isMobile = useScreenResizeEvent(width => width < 1100)

  function handleClick(index: number) {
    if (!disabled && !loading) {
      onValueChange?.(index + 1)
    }
  }

  function handleDieClick() {
    if (isMobile) {
      setIsEditing(true)
    }
  }

  function handleBackdropClick(e: React.SyntheticEvent) {
    e.stopPropagation()
    setIsEditing(false)
  }

  return (
    <div className={classes.dieFaceRoot} onClick={handleDieClick} >
      {
        range(6).map(i => (
          <Circle key={i} filled={value > i} index={i} onClick={isMobile ? undefined : handleClick} disabled={disabled || loading} />
        ))
      }
      {isEditing &&
        <Backdrop
          style={{ zIndex: 3 }}
          open={isEditing}
          onClick={handleBackdropClick}
        >
          <div className={classes.bigDie} onClick={e => e.stopPropagation()}>
            {
              range(6).map(i => (
                <Circle key={i} filled={value > i} index={i} onClick={isMobile ? handleClick : undefined} big disabled={disabled || loading} />
              ))
            }
          </div>
        </Backdrop>
      }
      {loading && <CircularProgress className={classes.progress} />}
    </div>
  )
}

type StyleProps = {
  filled: boolean
  big?: boolean
  disabled?: boolean
}

const useSubStyles = createUseStyles({
  circleRoot: {
    border: '1px solid black',
    borderRadius: '100%',
    width: ({ big }: StyleProps) => big ? 21 : 7,
    height: ({ big }: StyleProps) => big ? 21 : 7,
    justifySelf: 'center',
    alignSelf: 'center',
    backgroundColor: ({ filled }: StyleProps) => filled ? 'black' : '',
    cursor: ({ disabled }: StyleProps) => disabled ? 'initial' : 'pointer'
  }
})

type SubProps = {
  filled: boolean
  index: number
  onClick?: (index: number) => void
  big?: boolean
  disabled?: boolean
}

function Circle({ filled, index, onClick, big, disabled }: SubProps) {
  const classes = useSubStyles({ filled, big, disabled })
  return (
    <div className={classes.circleRoot} onClick={() => onClick?.(index)} />
  )
}