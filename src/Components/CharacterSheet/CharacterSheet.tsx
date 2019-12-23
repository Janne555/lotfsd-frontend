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
import { selectCharacterId } from '../../Redux/selectors'
import { Redirect, useRouteMatch } from 'react-router-dom'

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

const context = React.createContext({
  characterName: "default",
  characterId: 'default'
})

function CharacterSheet() {
  const match = useRouteMatch<{ character: string }>('/characters/:character')
  const characterName = match?.params.character
  const classes = useStyles()
  const characterId = useSelector(selectCharacterId(characterName))

  if (!characterId || !characterName) {
    return <Redirect to={{ pathname: '/' }} />
  }

  return (
    <context.Provider value={{ characterName, characterId }}>
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
    </context.Provider>
  )
}

export {
  context as characterSheetContext
}

export default CharacterSheet