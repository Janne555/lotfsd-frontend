import React from 'react'
import { useSelector } from '../../hooks'
import { selectSavingThrows } from '../../Redux/selectors'
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
    height: 'fit-content',
    backgroundColor: theme.componentBackgroundColor
  }
}))

export default function SavingThrows() {
  const savingThrows = useSelector(selectSavingThrows)
  const classes = useStyles()

  return (
    <div className={classes.savingThrowsRoot}>
      {
        Object.entries(savingThrows).map(([name, value]) => (
          hasKey(savingThrows, name) && <SavingThrow key={name} name={name} value={value} />
        ))
      }
    </div>
  )
}
