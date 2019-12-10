import React from 'react'
import { createUseStyles } from 'react-jss'
import { SAVING_THROW_DETAILS, SAVING_THROW_TITLES } from '../../constants'
import RotatedCube from '../_shared/RotatedCube'

type Props = {
  title: keyof SavingThrows,
  value: number
}

const useStyles = createUseStyles({
  savingThrowRoot: {
    display: 'grid',
    gridTemplateRows: '20px 40px auto',
    gridRowGap: 15,
    textAlign: 'center',
    maxWidth: 100,
    maxHeight: 150,
    '& span': {
      alignSelf: 'center'
    }
  }
})

export default function SavingThrow({ title, value }: Props) {
  const classes = useStyles()

  return (
    <div className={classes.savingThrowRoot}>
      <h3>{SAVING_THROW_TITLES[title]}</h3>
      <RotatedCube>{value}</RotatedCube>
      <span>{SAVING_THROW_DETAILS[title]}</span>
    </div>
  )
}
