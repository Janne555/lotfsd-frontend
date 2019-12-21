import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

type Props = {
  children: ReactNode
  borderColor?: string
}

const useStyles = createUseStyles((theme: Theme) => ({
  rotatedCube: {
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    justifySelf: 'center',
    position: 'relative',
    '&:before': {
      content: '""',
      height: '100%',
      width: '100%',
      transform: 'rotate(45deg)',
      outline: (borderColor?: string) => theme.borderColor(borderColor),
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginLeft: '-50%',
      marginTop: '-50%',
      pointerEvents: 'none'
    },
  },
}))

export default function RotatedCube({ children, borderColor }: Props) {
  const classes = useStyles(borderColor)

  return (
    <div className={classes.rotatedCube}>
      {children}
    </div>
  )
}