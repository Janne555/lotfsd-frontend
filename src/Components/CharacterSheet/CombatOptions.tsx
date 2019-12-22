import React from 'react'
import { useSelector, useCharacterContext } from '../../hooks'
import { selectCombatOptions } from '../../Redux/selectors'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  combatOptions: {
    padding: theme.padding,
    border: theme.border,
    '& h2': {
      textAlign: 'center'
    },
    backgroundColor: theme.componentBackgroundColor
  }
}))

export default function CombatOptions() {
  const classes = useStyles()
  const { characterId } = useCharacterContext()
  const { defensive, parry, press, standard } = useSelector(selectCombatOptions(characterId))

  return (
    <div className={classes.combatOptions}>
      <h2>Combat Options</h2>
      <p>{defensive}</p>
      <p>{parry}</p>
      <p>{press}</p>
      <p>{standard}</p>
    </div>
  )
}
