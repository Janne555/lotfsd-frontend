import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  triangleRoot: {
    display: 'flex',
    position: 'relative',
    backgroundColor: 'black',
    height: 54,
    width: 54,
    clipPath: 'polygon(50% 100%, 0 0%, 100% 0%)',
    '&:after': {
      position: 'absolute',
      top: 2,
      left: 3,
      content: '""',
      backgroundColor: 'white',
      height: 48,
      width: 48,
      clipPath: 'polygon(50% 100%, 0 0%, 100% 0%)'
    },
    '& span': {
      margin: '20% auto',
      zIndex: 1
    }
  },
}))

type Props = {
  children: ReactNode
}

function Triangle({ children }: Props) {
  const classes = useStyles()
  return (
    <div className={classes.triangleRoot}>
      <span>{children}</span>
    </div>
  )
}

export default Triangle