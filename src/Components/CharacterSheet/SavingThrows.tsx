import React from 'react'
import { useSelector } from '../../hooks'
import { selectSavingThrows } from '../../Redux/selectors'
import { hasKey } from '../../services'
import SavingThrow from './SavingThrow'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: 'flex',

  }
}))

export default function SavingThrows() {
  const savingThrows = useSelector(selectSavingThrows)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {
        Object.entries(savingThrows).map(([name, value]) => (
          hasKey(savingThrows, name) && <SavingThrow key={name} title={name} value={value} />
        ))
      }
    </div>
  )
}
