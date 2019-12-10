import React, { useLayoutEffect, useState } from 'react'
import Attributes from './Attributes'
import SavingThrows from './SavingThrows'
import AttackBonusAndHitPoints from './AttackBonusAndHitPoints'
import ArmorClassAndCombatOptions from './ArmorClassAndCombatOptions'
import CommonActivities from './CommonActivities'
import EquipmentList from './EquipmentList'
import Encumbrance from './Encumbrance'
import Retainers from './Retainers'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  characterSheet: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridColumnGap: '1rem',
    maxWidth: 'calc(100vw - 2rem)'
  },
  '@media (max-width: 1024px)': {
    characterSheet: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyItems: 'center'
    },
    attributes: {
    },
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    '& > div': {
      marginBottom: '1em'
    },
    width: 'max-width'
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    '& > div': {
      marginBottom: '1em'
    }
  }
}))

export default function CharacterSheet() {
  const [dual, setDual] = useState(window.screen.width > 1024)

  const classes = useStyles()
  useLayoutEffect(() => {
    function listener() {
      setDual(window.screen.width > 1024)
    }
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  })

  if (dual)
    return (
      <div className={classes.characterSheet}>
        <div className={classes.left}>
          <Attributes />
          <EquipmentList />
          <Retainers />
        </div>
        <div className={classes.right}>
          <SavingThrows />
          <AttackBonusAndHitPoints />
          <ArmorClassAndCombatOptions />
          <CommonActivities />
          <Encumbrance />
        </div>
      </div>
    )
  else
    return (
      <div className={classes.characterSheet}>
        <div className={classes.left}>
          <Attributes />
          <SavingThrows />
          <AttackBonusAndHitPoints />
          <ArmorClassAndCombatOptions />
          <CommonActivities />
          <Encumbrance />
          <EquipmentList />
          <Retainers />
        </div>
      </div>
    )
}
