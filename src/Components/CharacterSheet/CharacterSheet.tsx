import React from 'react'
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
    // flexWrap: 'wrap'
    gridTemplateColumns: '50% 50%',
    gridRowGap: '1rem',
    gridColumnGap: '1rem',
    justifyContent: 'center'
  },
  attributes: {
  },
  savingThrows: {},
  abAndHp: {
  },
  ac: {},
  combatOptions: {},
  commonActivities: {},
  equipment: {},
  encumbrance: {},
  retainers: {}
}))

export default function CharacterSheet() {
  const classes = useStyles()
  return (
    <div className={classes.characterSheet}>
      <Attributes />
      <SavingThrows />
      <AttackBonusAndHitPoints />
      <ArmorClassAndCombatOptions />
      <CommonActivities />
      <EquipmentList />
      <Encumbrance />
      <Retainers />
    </div>
  )
}
