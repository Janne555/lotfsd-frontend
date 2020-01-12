import React from 'react'
import Attributes, { Props as AttributeProps } from './Attributes'
import AttackBonusAndHitPoints from './AttackBonusAndHitPoints'
import ArmorClassAndCombatOptions from './ArmorClassAndCombatOptions'
import CommonActivities from './CommonActivities'
import EquipmentList from './EquipmentList'
import Encumbrance from './Encumbrance'
import Retainers from './Retainers'
import { createUseStyles } from 'react-jss'
import Languages from './Languages'
import InfoBar from './InfoBar'
import { useScreenResizeEvent } from '../../hooks'
import { Redirect } from 'react-router-dom'
import SpeedDial from '../Interface/SpeedDial'
import Properties from './Properties'
import { QueryRenderer } from 'react-relay'
import { useRelayEnvironment } from 'relay-hooks'
import graphql from 'babel-plugin-relay/macro'
import { CharacterSheetQuery, CharacterSheetQueryResponse } from '../../__generated__/CharacterSheetQuery.graphql'

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
  savingThrows: () => /*<SavingThrows key='savingThrows' />*/ <div></div>,
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

function selectAttributes(
  {
    charisma,
    constitution,
    dexterity,
    intelligence,
    strength,
    wisdom
  }: NonNullable<CharacterSheetQueryResponse["characterSheet"]>
): Attributes {
  return {
    charisma,
    constitution,
    dexterity,
    intelligence,
    strength,
    wisdom
  }
}

function CharacterSheet({ attributes }: { attributes: Attributes }) {
  const classes = useStyles()
  // const isMobile = useScreenResizeEvent(width => width < 1100)

  return (
    <div className={classes.characterSheet}>
      <Attributes attributes={attributes} />
    </div>
  )

  // return (
  //   <context.Provider value={{ characterName, characterId }}>
  //     <div className={classes.characterSheet}>
  //       <InfoBar />
  //       {isMobile
  //         ? MOBILE_ORDER.map(key => MODULE_INDEX[key]({ attributes, modifiers, onChange: handleAttributeChange }))
  //         : BASE_ORDER.map(key => MODULE_INDEX[key]({ attributes, modifiers, onChange: handleAttributeChange }))
  //       }
  //     </div>
  //     <SpeedDial />
  //   </context.Provider>
  // )
}


type QueryProps = {
  characterId: string
  characterName: string
}

function Foo({ characterId }: QueryProps) {
  const environment = useRelayEnvironment()

  return (
    <QueryRenderer<CharacterSheetQuery>
      environment={environment}
      query={graphql`
        query CharacterSheetQuery($id: String!) {
          characterSheet(id: $id) {
            charisma
            constitution
            dexterity
            intelligence
            strength
            wisdom
          }
        }
      `}
      variables={{
        id: characterId
      }}
      render={({ props }) => {
        if (!props?.characterSheet) {
          return null
        }

        return <CharacterSheet attributes={selectAttributes(props.characterSheet)} />
      }}
    />
  )
}

export {
  context as characterSheetContext
}

export default Foo