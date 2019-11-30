import React from 'react'
import { useSelector } from '../../hooks'
import { selectSavingThrows } from '../../Redux/selectors'
import { hasKey } from '../../services'
import SavingThrow from './SavingThrow'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  savingThrowsRoot: {
    display: 'grid',
    gridTemplateColumns: '40',
    gridTemplateRows: 'auto 40px auto',
    gridRowGap: 15,
    gridColumnGap: 10,
    width: 100,
    textAlign: 'center'
  }
}))

export default function SavingThrows() {
  const savingThrows = useSelector(selectSavingThrows)
  const classes = useStyles()

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
