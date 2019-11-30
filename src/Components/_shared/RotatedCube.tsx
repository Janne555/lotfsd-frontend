import React from 'react'
import { createUseStyles } from 'react-jss'

type Props = {
  value: number
}

const useStyles = createUseStyles((theme: Theme) => ({
  rotatedCube: {
    width: 40,
    height: 40,
    display: 'flex',
    transform: 'rotate(45deg)',
    border: theme.border,
    justifyContent: 'space-around',
    justifySelf: 'center',
    '& span': {
      alignSelf: 'center',
      transform: 'rotate(-45deg)'
    }
  }
}))

export default function RotatedCube({ value }: Props) {
  const classes = useStyles()

  return (
    <div className={classes.rotatedCube}>
      <span>{value}</span>
    </div>
  )
}