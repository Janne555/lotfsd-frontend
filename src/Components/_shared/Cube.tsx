import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

type Props = {
  children: ReactNode
}

const useStyles = createUseStyles((theme: Theme) => ({
  rotatedCube: {
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
    <div className={classes.rotatedCube}>
      <span>{children}</span>
    </div>
  )
}

export default Cube