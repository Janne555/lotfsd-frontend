import React from 'react'
import { createUseStyles } from 'react-jss'
import { SAVING_THROW_DETAILS } from '../../constants'

type Props = {
  title: keyof SavingThrows,
  value: number
}

const useStyles = createUseStyles((theme: Theme) => ({
  savingThrow: {
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: 'auto 40px auto',
    gridRowGap: 15,
    width: 100,
    textAlign: 'center',
  },
  title: {
  },
  value: {
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
  }
}))

export default function SavingThrow({ title, value }: Props) {
  const classes = useStyles()

  return (
    <div className={classes.savingThrow}>
      <label className={classes.title}>{title}</label>
      <div className={classes.value}>
        <span>{value}</span>
      </div>
      <span className={classes.details}>{SAVING_THROW_DETAILS[title]}</span>
    </div>
  )
}
