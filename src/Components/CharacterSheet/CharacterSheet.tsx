import React from 'react'
import Attributes from './Attributes'
import Retainers from './Retainers'
import { createUseStyles } from 'react-jss'
import Languages from './Languages'
import InfoBar from './InfoBar'
import Properties from './Properties'
import SavingThrows from './SavingThrows'
import {
  calculateAttributeModifiers,
  calculateCommonActivities,
  calculateMeleeAttackBonus,
  calculateRangedAttackBonus,
  calculateArmorClass,
  isArmorClassEffect,
  isCommonActivityEffect,
  calculateSavingThrows,
} from '../../services'
import { useQuery } from '@apollo/react-hooks'
import { CHARACTER_SHEET_QUERY } from '../../constants'
import { CharacterSheetQuery, CharacterSheetQueryVariables, CharacterSheetQuery_characterSheet } from '../../../__generated__/apolloTypes/CharacterSheetQuery'
import CommonActivities from './CommonActivities'
import AttackBonusAndHitPoints from './AttackBonusAndHitPoints'
import ArmorClassAndCombatOptions from './ArmorClassAndCombatOptions'

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
  const { data } = useQuery<CharacterSheetQuery, CharacterSheetQueryVariables>(CHARACTER_SHEET_QUERY, { variables: { id: characterId } })
  // const isMobile = useScreenResizeEvent(width => width < 1100)

  if (!data || !data.characterSheet) {
    return null
  }

  const { characterSheet } = data
  const armorClassEffects = characterSheet.effects.filter(isArmorClassEffect) as ArmorClassEffect[]
  const commonActivityEffects = characterSheet.effects.filter(isCommonActivityEffect) as CommonActivityEffect[]
  const attributeModifiers = calculateAttributeModifiers(selectAttributes(characterSheet))
  const commonActivities = calculateCommonActivities(selectCommonActivities(characterSheet), attributeModifiers.strength, attributeModifiers.intelligence, commonActivityEffects)
  const savingThrows = calculateSavingThrows(selectSavingThrows(characterSheet), attributeModifiers)

  return (
    <div className={classes.characterSheet}>
      <InfoBar info={selectInfo(characterSheet)} />
      <Attributes attributes={selectAttributes(characterSheet)} modifiers={attributeModifiers} characterId={characterId} />
      <SavingThrows savingThrows={savingThrows} characterId={characterId} />
      <AttackBonusAndHitPoints
        baseAB={characterSheet.attackBonus}
        currentHp={characterSheet.currentHp}
        maxHp={characterSheet.maxHp}
        meleeAB={calculateMeleeAttackBonus(characterSheet.attackBonus, attributeModifiers.strength)}
        rangedAB={calculateRangedAttackBonus(characterSheet.attackBonus, attributeModifiers.dexterity)}
        surpriseChance={characterSheet.surpriseChance}
        characterId={characterId}
      />
      <ArmorClassAndCombatOptions
        baseAC={calculateArmorClass(attributeModifiers.dexterity, armorClassEffects, "base")}
        combatOptions={selectCombatOptions(characterSheet)}
        rangedAC={calculateArmorClass(attributeModifiers.dexterity, armorClassEffects, "ranged")}
        surprisedAC={calculateArmorClass(attributeModifiers.dexterity, armorClassEffects, "surprised")}
        withoutShieldAC={calculateArmorClass(attributeModifiers.dexterity, armorClassEffects, "withoutShield")}

      />
      <CommonActivities commonActivities={commonActivities} characterId={characterId} />
      {/* <EquipmentList /> */}
      {/* <Encumbrance /> */}
      <Retainers characterName={characterSheet.name} retainers={selectRetainers(characterSheet)} />
      <Languages characterName={characterSheet.name} languages={characterSheet.languagesList} />
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