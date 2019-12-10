import React from 'react'
import ArmorClass from './ArmorClass'
import CombatOptions from './CombatOptions'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridColumnGap: '1rem',
    width: 'calc(100% - 1rem)'
  }
}))


export default function ArmorClassAndCombatOptions() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ArmorClass />
      <CombatOptions />
    </div>
  )
}
