import React from 'react'
import { useSelector } from '../../hooks'
import { selectSavingThrows } from '../../Redux/selectors'
import { hasKey } from '../../services'
import SavingThrow from './SavingThrow'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  savingThrowsRoot: {
    display: 'grid',
    gridTemplateRows: 'auto 40px auto',
    gridTemplateColumns: (num: number) => `repeat(${num}, 100px)`,
    gridRowGap: 15,
    textAlign: 'center',
    border: theme.border,
    width: 500, //TODO: remove when composing the final sheet
    padding: theme.padding
  }
}))

export default function SavingThrows() {
  const savingThrows = useSelector(selectSavingThrows)
  const classes = useStyles(5)

  return (
    <div className={classes.savingThrowsRoot}>
      {
        Object.entries(savingThrows).map(([name, value], index) => (
          hasKey(savingThrows, name) && <SavingThrow key={name} title={name} value={value} index={index} />
        ))
      }
    </div>
  )
}
