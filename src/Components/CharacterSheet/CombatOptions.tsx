import React from 'react'
import { useSelector } from '../../hooks'
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
  const { defensive, parry, press, standard } = useSelector(selectCombatOptions)

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