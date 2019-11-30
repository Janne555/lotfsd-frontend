import React from 'react'
import { createUseStyles } from 'react-jss'
import { SAVING_THROW_DETAILS, SAVING_THROW_TITLES } from '../../constants'

type Props = {
  title: keyof SavingThrows,
  value: number,
  index: number
}

const useStyles = createUseStyles((theme: Theme) => ({
  savingThrowRoot: {
    display: 'grid',
    gridTemplateRows: '20px 40px auto',
    gridRowGap: 15,
    textAlign: 'center',
    width: 100
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

export default function SavingThrow({ title, value, index }: Props) {
  const classes = useStyles(index)

  return (
    <div className={classes.savingThrowRoot}>
      <h3 className={classes.title}>{SAVING_THROW_TITLES[title]}</h3>
      <div className={classes.value}>
        <span>{value}</span>
      </div>
      <span className={classes.details}>{SAVING_THROW_DETAILS[title]}</span>
    </div>
  )
}
