import React from 'react'
import { createUseStyles } from 'react-jss'
import { SAVING_THROW_DETAILS } from '../../constants'

type Props = {
  title: keyof SavingThrows,
  value: number,
  index: number
}

const useStyles = createUseStyles((theme: Theme) => ({
  title: {
    gridColumnStart: (index: number) => index + 1,
    gridRowStart: 1
  },
  value: {
    gridColumnStart: (index: number) => index + 1,
    gridRowStart: 2,
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
  },
  details: {
    gridColumnStart: (index: number) => index + 1,
    gridRowStart: 3
  }
}))

export default function SavingThrow({ title, value, index }: Props) {
  const classes = useStyles(index)

  return (
    <>
      <label className={classes.title}>{title}</label>
      <div className={classes.value}>
        <span>{value}</span>
      </div>
      <span className={classes.details}>{SAVING_THROW_DETAILS[title]}</span>
    </>
  )
}
