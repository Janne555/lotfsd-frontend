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
    margin: '0 2em',
    display: 'grid',
    // flexWrap: 'wrap'
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: 'max-content',
    gridRowGap: '1rem',
    gridColumnGap: '1rem',
    justifyContent: 'center',
    gridAutoFlow: 'dense'
  },
  '@media (max-width: 1024px)': {
    characterSheet: {
      display: 'flex',
      flexWrap: 'wrap',
    }
  },
  attributes: {
    gridArea: '1 / 1 / 3 / 1'
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
      <div className={classes.attributes}>
        <Attributes />
      </div>
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
