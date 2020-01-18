import React from 'react'
import Attributes from './Attributes'
import Retainers from './Retainers'
import { createUseStyles } from 'react-jss'
import Languages from './Languages'
import InfoBar from './InfoBar'
import Properties from './Properties'
import SavingThrows from './SavingThrows'
import { calculateAttributeModifiers } from '../../services'
import { useQuery } from '@apollo/react-hooks'
import characterSheetQuery from '../../constants/queries/characterSheetQuery'
import { CharacterSheetQuery, CharacterSheetQueryVariables, CharacterSheetQuery_characterSheet } from '../../constants/queries/__generated__/CharacterSheetQuery'

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
  characterId: string
  characterName: string
}

function CharacterSheet({ characterId, characterName }: Props) {
  const classes = useStyles()
  const { data } = useQuery<CharacterSheetQuery, CharacterSheetQueryVariables>(characterSheetQuery, { variables: { id: characterId } })
  // const isMobile = useScreenResizeEvent(width => width < 1100)

  if (!data || !data.characterSheet) {
    return null
  }

  const { characterSheet } = data

  return (
    <div className={classes.characterSheet}>
      <InfoBar info={selectInfo(characterSheet)} />
      <Attributes attributes={selectAttributes(characterSheet)} modifiers={calculateAttributeModifiers(selectAttributes(characterSheet))} />
      <SavingThrows savingThrows={selectSavingThrows(characterSheet)} />
      {/* <AttackBonusAndHitPoints baseAB={baseAB} currentHp={currentHp} maxHp={maxHp} meleeAB={meleeAB} rangedAB={rangedAB} surpriseChance={surpriseChance} /> */}
      {/* <ArmorClassAndCombatOptions baseAC={baseAC} combatOptions={combatOptions} rangedAC={rangedAC} surprisedAC={surprisedAC} withoutShieldAC={withoutShieldAC} /> */}
      {/* <CommonActivities commonActivities={commonActivities} /> */}
      {/* <EquipmentList /> */}
      {/* <Encumbrance /> */}
      <Retainers characterName={characterSheet.name} retainers={selectRetainers(characterSheet)} />
      <Languages characterName={characterSheet.name} languages={[]} />
      <Properties characterName={characterSheet.name} properties={selectProperties(characterSheet)} />
    </div>
  )
}


type QueryProps = {
  characterId: string
  characterName: string
}

function selectRetainers(
  {
    retainers
  }: CharacterSheetQuery_characterSheet
): Retainer[] {
  return retainers ? retainers.filter(retainer => retainer ? true : false) as Retainer[] : []
}

function selectProperties(
  {
    properties
  }: CharacterSheetQuery_characterSheet
): Property[] {
  return properties ? properties.filter(property => property ? true : false).map(property => ({ ...property, inventory: [] /* TODO: include inventory */ })) as Property[] : []
}

function selectEffects(
  {
    effects
  }: CharacterSheetQuery_characterSheet
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
  }: CharacterSheetQuery_characterSheet
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
  }: CharacterSheetQuery_characterSheet
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
  }: CharacterSheetQuery_characterSheet
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
  }: CharacterSheetQuery_characterSheet
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
    alignment
  }: CharacterSheetQuery_characterSheet
): Info {
  return {
    name,
    experience,
    class: className,
    race,
    age,
    gender,
    alignment
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
  }: CharacterSheetQuery_characterSheet
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

export default CharacterSheet