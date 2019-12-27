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
import Languages from './Languages'
import InfoBar from './InfoBar'
import { useSelector } from '../../hooks'
import { selectAttributes, selectAttributeModifiers } from '../../Redux/selectors'
import { Redirect } from 'react-router-dom'
import SpeedDial from '../Interface/SpeedDial'

const useStyles = createUseStyles((theme: Theme) => ({
  characterSheet: {
    backgroundColor: theme.colorGreyLightest,
    padding: '1rem',
    columnCount: 2,
    '& > *': {
      breakInside: 'avoid-column',
      marginBottom: '1rem'
    }
  },
  '@media (max-width: 1100px)': {
    characterSheet: {
      display: 'flex',
      flexDirection: 'column',
      columnCount: 'unset',
      padding: 1
    }
  }
}))

const context = React.createContext({
  characterName: "default",
  characterId: 'default'
})

type Props = {
  characterId: string
  characterName: string
}

function CharacterSheet({ characterId, characterName }: Props) {
  const classes = useStyles()
  const modifiers = useSelector(selectAttributeModifiers(characterId))
  const { id, ...attributes } = useSelector(selectAttributes(characterId))

  function handleAttributeChange(key: keyof Attributes, value: string) {

  }

  if (!characterId) {
    return <Redirect to={{ pathname: '/' }} />
  }

  return (
    <context.Provider value={{ characterName, characterId }}>
      <div className={classes.characterSheet}>
        <InfoBar />
        <Attributes attributes={attributes} modifiers={modifiers} onChange={handleAttributeChange} />
        <CommonActivities />
        <EquipmentList />
        <Retainers />
        <SavingThrows />
        <AttackBonusAndHitPoints />
        <ArmorClassAndCombatOptions />
        <Encumbrance />
        <Languages />
      </div>
      <SpeedDial />
    </context.Provider>
  )
}

export {
  context as characterSheetContext
}

export default CharacterSheet