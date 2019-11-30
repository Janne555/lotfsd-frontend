import React from 'react'
import { useSelector } from '../../hooks'
import { calculateSavingThrows } from '../../Redux/selectors'
import { hasKey } from '../../services'
import SavingThrow from './SavingThrow'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  savingThrowsRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    textAlign: 'center',
    border: theme.border,
    padding: theme.padding,
    maxWidth: 500
  }
}))

export default function SavingThrows() {
  const savingThrows = useSelector(calculateSavingThrows)
  const classes = useStyles(5)

  return (
    <div className={classes.savingThrowsRoot}>
      {
        Object.entries(savingThrows).map(([name, value]) => (
          hasKey(savingThrows, name) && <SavingThrow key={name} title={name} value={value} />
        ))
      }
    </div>
  )
}
