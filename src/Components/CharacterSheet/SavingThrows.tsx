import React from 'react'
import { isKeyOfSavingThrows } from '../../services'
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

type Props = {
  savingThrows: SavingThrowsWithModifications
  characterId?: string
}

function SavingThrows({ savingThrows, characterId }: Props) {
  const classes = useStyles()

  return (
    <div className={classes.savingThrowsRoot}>
      <h2>Saving Throws</h2>
      <div className={classes.list}>
        {
          Object.entries(savingThrows).map(([name, values]) => (
            isKeyOfSavingThrows(name) && <SavingThrow key={name} name={name} values={values} characterId={characterId} />
          ))
        }
      </div>
    </div>
  )
}

export default SavingThrows