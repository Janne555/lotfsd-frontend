import React from 'react'
import Attributes, { Props as AttributeProps } from './Attributes'
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
import { useSelector, useScreenResizeEvent } from '../../hooks'
import { selectAttributes, selectAttributeModifiers } from '../../Redux/selectors'
import { Redirect } from 'react-router-dom'
import SpeedDial from '../Interface/SpeedDial'
import Properties from './Properties'

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

const MODULE_INDEX = {
  attributes: (props: AttributeProps) => <Attributes {...props} key='attributes' />,
  commonActivities: () => <CommonActivities key='commonActivities' />,
  equipmentList: () => <EquipmentList key='equipmentList' />,
  retainers: () => <Retainers key='retainers' />,
  properties: () => <Properties key='properties' />,
  savingThrows: () => <SavingThrows key='savingThrows' />,
  attacBonusAndHitpoints: () => <AttackBonusAndHitPoints key='attacBonusAndHitpoints' />,
  armorClassAndCombatOptions: () => <ArmorClassAndCombatOptions key='armorClassAndCombatOptions' />,
  encumbrance: () => <Encumbrance key='encumbrance' />,
  languages: () => <Languages key='languages' />,
}

const BASE_ORDER: (keyof typeof MODULE_INDEX)[] = [
  "attributes",
  "commonActivities",
  "equipmentList",
  "retainers",
  "properties",
  "savingThrows",
  "attacBonusAndHitpoints",
  "armorClassAndCombatOptions",
  "encumbrance",
  "languages",
]

const MOBILE_ORDER: (keyof typeof MODULE_INDEX)[] = [
  "attributes",
  "savingThrows",
  "attacBonusAndHitpoints",
  "armorClassAndCombatOptions",
  "commonActivities",
  "equipmentList",
  "retainers",
  "properties",
  "encumbrance",
  "languages",
]

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
  const { characterId: ignore, ...attributes } = useSelector(selectAttributes(characterId))
  const isMobile = useScreenResizeEvent(width => width < 1100)

  function handleAttributeChange(key: keyof Attributes, value: string) {

  }

  if (!characterId) {
    return <Redirect to={{ pathname: '/' }} />
  }

  return (
    <context.Provider value={{ characterName, characterId }}>
      <div className={classes.characterSheet}>
        <InfoBar />
        {isMobile
          ? MOBILE_ORDER.map(key => MODULE_INDEX[key]({ attributes, modifiers, onChange: handleAttributeChange }))
          : BASE_ORDER.map(key => MODULE_INDEX[key]({ attributes, modifiers, onChange: handleAttributeChange }))
        }
      </div>
      <SpeedDial />
    </context.Provider>
  )
}

export {
  context as characterSheetContext
}

export default CharacterSheet