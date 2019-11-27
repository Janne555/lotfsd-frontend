import React from 'react'
import { createUseStyles } from 'react-jss'
import { SAVING_THROW_DETAILS } from '../../constants'

type Props = {
  title: keyof SavingThrows,
  value: number
}

const useStyles = createUseStyles((theme: Theme) => ({
  savingThrow: {
    border: theme.border
  }
}))

export default function SavingThrow({ title, value }: Props) {
  const classes = useStyles()

  return (
    <div>
      <label>{title}</label>
      <div className={classes.savingThrow}>
        <span>{value}</span>
      </div>
      <span>{SAVING_THROW_DETAILS[title]}</span>
    </div>
  )
}
