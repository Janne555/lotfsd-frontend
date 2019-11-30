import React from 'react'
import { createUseStyles } from 'react-jss'
import { SAVING_THROW_DETAILS } from '../../constants'

type Props = {
  title: keyof SavingThrows,
  value: number
}

const useStyles = createUseStyles((theme: Theme) => ({
  savingThrow: {
    height: 40,
    width: 40,
    position: 'relative',
    '&:before': {
      position: 'absolute',
      content: '""',
      border: theme.border,
      width: '100%',
      height: '100%',
      transform: 'rotate(45deg)',
    },
    '& span': {
      position: 'absolute',
      
    }
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
