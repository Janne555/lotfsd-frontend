import React from 'react'
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

export default function CombatOptions({ defensive, improvedParry, parry, press, standard }: CombatOptions) {
  const classes = useStyles()
  return (
    <div className={classes.combatOptions}>
      <h2>Combat Options</h2>
      {standard && <p>Standard attack AB +0, AC +0</p>}
      {(parry || improvedParry) && <p>Parry AC {improvedParry ? 4 : 2}</p>}
      {press && <p>Press AB +2, AC -4</p>}
      {defensive && <p>Defensive AB -4, AC +2</p>}
    </div>
  )
}
