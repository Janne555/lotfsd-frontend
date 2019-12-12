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
import { useScreenResizeEvent } from '../../hooks'
import Languages from './Languages'

const useStyles = createUseStyles((theme: Theme) => ({
  characterSheet: {
    backgroundColor: theme.colorLightest,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, calc(50% - 0.5rem))',
    gridColumnGap: '1rem',
    maxWidth: '100%',
    padding: '0 1rem'
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
  const dual = useScreenResizeEvent(width => width > 1024)
  const classes = useStyles()

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
          <Languages />
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
