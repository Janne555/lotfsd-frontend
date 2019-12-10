import React from 'react'
import Attributes from './Attributes'
import SavingThrows from './SavingThrows'
import AttackBonusAndHitPoints from './AttackBonusAndHitPoints'
import ArmorClass from './ArmorClass'
import CombatOptions from './CombatOptions'
import CommonActivities from './CommonActivities'
import EquipmentList from './EquipmentList'
import Encumbrance from './Encumbrance'
import Retainers from './Retainers'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  characterSheet: {
    maxWidth: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 33%)',
    gridRowGap: '1rem',
    gridColumGap: '1rem'
  }
}))

export default function CharacterSheet() {
  const classes = useStyles()
  return (
    <div className={classes.characterSheet}>
      <Attributes />
      <SavingThrows />
      <AttackBonusAndHitPoints />
      <ArmorClass />
      <CombatOptions />
      <CommonActivities />
      <EquipmentList />
      <Encumbrance />
      <Retainers />
    </div>
  )
}
