import React from 'react'
import { useSelector, useCharacterContext } from '../../hooks'
import { selectSavingThrows } from '../../Redux/selectors'
import { hasKey } from '../../services'
import SavingThrow from './SavingThrow'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  savingThrowsRoot: {
    backgroundColor: theme.componentBackgroundColor,
    padding: theme.padding,
    border: theme.border,
    '& h2': {
      textAlign: 'center'
    }
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    textAlign: 'center',
  }
}))

export default function SavingThrows() {
  const { characterId } = useCharacterContext()
  const savingThrows = useSelector(selectSavingThrows(characterId))
  const classes = useStyles()

  return (
    <div className={classes.savingThrowsRoot}>
      <h2>Saving Throws</h2>
      <div className={classes.list}>
        {
          Object.entries(savingThrows).map(([name, value]) => (
            hasKey(savingThrows, name) && <SavingThrow key={name} name={name} value={value} />
          ))
        }
      </div>
    </div>
  )
}
