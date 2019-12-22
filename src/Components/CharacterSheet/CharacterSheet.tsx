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
import { useScreenResizeEvent } from '../../hooks'
import Languages from './Languages'
import InfoBar from './InfoBar'

const useStyles = createUseStyles((theme: Theme) => ({
  characterSheet: {
    backgroundColor: theme.colorGreyLightest,
    padding: '1rem',
    columnCount: 2,
    '& > *': {
      breakInside: 'avoid-column',
      marginBottom: '1rem'
    }
  }
}))

type Props = {
  character: string
}

export default function CharacterSheet({ character }: Props) {
  const classes = useStyles()
  return (
    <div className={classes.characterSheet}>
      <InfoBar />
      <Attributes />
      <CommonActivities />
      <EquipmentList />
      <Retainers />
      <SavingThrows />
      <AttackBonusAndHitPoints />
      <ArmorClassAndCombatOptions />
      <Encumbrance />
      <Languages />
    </div>
  )
}
