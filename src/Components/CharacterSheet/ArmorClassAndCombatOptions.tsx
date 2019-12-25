import React from 'react'
import ArmorClass from './ArmorClass'
import CombatOptions from './CombatOptions'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  combatOptionsAndAC: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridColumnGap: '1rem',
    width: 'calc(100% - 1rem)'
  },
  '@media (max-width: 1100px)': {
    combatOptionsAndAC: {
      display: 'block',
      width: '100%',
      '& > div:first-child': {
        marginBottom: '1rem'
      }
    }
  }
}))


export default function ArmorClassAndCombatOptions() {
  const classes = useStyles()
  return (
    <div className={classes.combatOptionsAndAC}>
      <ArmorClass />
      <CombatOptions />
    </div>
  )
}
