import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

type Props = {
  children: ReactNode
}

const useStyles = createUseStyles((theme: Theme) => ({
  cube: {
    width: 40,
    height: 40,
    display: 'flex',
    border: theme.border,
    justifyContent: 'space-around',
    justifySelf: 'center',
    '& span': {
      alignSelf: 'center',
    }
  }
}))

function Cube({ children }: Props) {
  const classes = useStyles()

  return (
    <div className={classes.cube}>
      <span>{children}</span>
    </div>
  )
}

export default Cube