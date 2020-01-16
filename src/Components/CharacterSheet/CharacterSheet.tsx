import React from 'react'
import Attributes from './Attributes'
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
import SavingThrows from './SavingThrows'

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

type Props = {
  attributes: Attributes
  savingThrows: SavingThrows
  inventory: ItemInstance[]
  effects: Effect[]
  commonActivities: CommonActivities
  wallet: Wallet
  languages: Language[]
  retainers: Retainer[]
  combatOptions: CombatOptions
  info: Info
  properties: Property[]
  maxHp: number
  currentHp: number
  surpriseChance: number
}

function CharacterSheet({
  attributes,
  savingThrows,
  combatOptions,
  commonActivities,
  effects,
  info,
  inventory,
  languages,
  properties,
  retainers,
  wallet,
  currentHp,
  maxHp,
  surpriseChance
}: Props) {
  const classes = useStyles()
  // const isMobile = useScreenResizeEvent(width => width < 1100)

  return (
    <div className={classes.characterSheet}>
      <InfoBar info={info} />
      <Attributes attributes={attributes} />
      <SavingThrows savingThrows={savingThrows} />
      {/* <AttackBonusAndHitPoints baseAB={baseAB} currentHp={currentHp} maxHp={maxHp} meleeAB={meleeAB} rangedAB={rangedAB} surpriseChance={surpriseChance} /> */}
      {/* <ArmorClassAndCombatOptions baseAC={baseAC} combatOptions={combatOptions} rangedAC={rangedAC} surprisedAC={surprisedAC} withoutShieldAC={withoutShieldAC} /> */}
      {/* <CommonActivities commonActivities={commonActivities} /> */}
      {/* <EquipmentList /> */}
      {/* <Encumbrance /> */}
      <Retainers characterName={info.name} retainers={retainers} />
      <Languages characterName={info.name} languages={languages} />
      <Properties characterName={info.name} properties={properties} />
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

function Query({ characterId }: QueryProps) {
  const environment = useRelayEnvironment()

  return (
    <QueryRenderer<CharacterSheetQuery>
      environment={environment}
      query={query}
      variables={{
        id: characterId
      }}
      render={({ props }) => {
        if (!props?.characterSheet) {
          return null
        }

        return (
          <CharacterSheet
            attributes={selectAttributes(props.characterSheet)}
            info={selectInfo(props.characterSheet)}
            commonActivities={selectCommonActivities(props.characterSheet)}
            savingThrows={selectSavingThrows(props.characterSheet)}
            wallet={selectWallet(props.characterSheet)}
            combatOptions={selectCombatOptions(props.characterSheet)}
            effects={selectEffects(props.characterSheet)}
            properties={selectProperties(props.characterSheet)}
            retainers={selectRetainers(props.characterSheet)}
            currentHp={props.characterSheet.currentHp}
            maxHp={props.characterSheet.maxHp}
            surpriseChance={props.characterSheet.surpriseChance}
            inventory={[]}
            languages={[]}
          />
        )
      }}
    />
  )
}

function selectRetainers(
  {
    retainers
  }: NonNullable<CharacterSheetQueryResponse["characterSheet"]>
): Retainer[] {
  return retainers ? retainers.filter(retainer => retainer ? true : false) as Retainer[] : []
}

function selectProperties(
  {
    properties
  }: NonNullable<CharacterSheetQueryResponse["characterSheet"]>
): Property[] {
  return properties ? properties.filter(property => property ? true : false).map(property => ({ ...property, inventory: [] /* TODO: include inventory */ })) as Property[] : []
}

function selectEffects(
  {
    effects
  }: NonNullable<CharacterSheetQueryResponse["characterSheet"]>
): Effect[] {
  return effects ? effects.filter(effect => effect ? true : false) as Effect[] : []
}

function selectCombatOptions(
  {
    parry,
    improvedParry,
    press,
    standard,
    defensive
  }: NonNullable<CharacterSheetQueryResponse["characterSheet"]>
): CombatOptions {
  return {
    parry,
    improvedParry,
    press,
    standard,
    defensive
  }
}

function selectWallet(
  {
    copper,
    silver,
    gold
  }: NonNullable<CharacterSheetQueryResponse["characterSheet"]>
): Wallet {
  return {
    copper,
    silver,
    gold
  }
}

function selectSavingThrows(
  {
    paralyze,
    poison,
    breathWeapon,
    magic,
    magicalDevice
  }: NonNullable<CharacterSheetQueryResponse["characterSheet"]>
): SavingThrows {
  return {
    paralyze,
    poison,
    breathWeapon,
    magic,
    magicalDevice
  }
}

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

function selectInfo(
  {
    name,
    experience,
    class: className,
    race,
    age,
    gender,
    alignment,
    attackBonus,
    currentHp,
    maxHp,
    surpriseChance
  }: NonNullable<CharacterSheetQueryResponse["characterSheet"]>
): Info {
  return {
    name,
    experience,
    class: className,
    race,
    age,
    gender,
    alignment,
    attackBonus,
    currentHp,
    maxHp,
    surpriseChance
  }
}

function selectCommonActivities(
  {
    architecture,
    bushcraft,
    climbing,
    languages,
    openDoors,
    search,
    sleightOfHand,
    sneakAttack,
    stealth,
    tinkering,
  }: NonNullable<CharacterSheetQueryResponse["characterSheet"]>
): CommonActivities {
  return {
    architecture,
    bushcraft,
    climbing,
    languages,
    openDoors,
    search,
    sleightOfHand,
    sneakAttack,
    stealth,
    tinkering,
  }
}

export default Query

var query = graphql`
  query CharacterSheetQuery($id: String!) {
    characterSheet(id: $id) {
      id
      name
      experience
      class
      race
      age
      gender
      alignment
      attackBonus
      currentHp
      maxHp
      surpriseChance
      paralyze
      poison
      breathWeapon
      magicalDevice
      magic
      charisma
      constitution
      dexterity
      intelligence
      strength
      wisdom
      architecture
      bushcraft
      climbing
      languages
      openDoors
      search
      sleightOfHand
      sneakAttack
      stealth
      tinkering
      copper
      silver
      gold
      standard
      parry
      improvedParry
      press
      defensive
      effects {
        id
        method
        target
        type
        value
      }
      retainers {
        class
        hitpoints
        id
        level
        name
        position
        share
        wage
      }
      properties {
        description
        id
        location
        name
        rent
        value
      }
    }
  }
`