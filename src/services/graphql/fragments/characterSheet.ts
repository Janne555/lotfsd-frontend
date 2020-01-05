
import graphql from 'babel-plugin-relay/macro'

const info = graphql`
  fragment characterSheetInfo on Info {
    id
    characterId
    name
    experience
    class
    race
    age
    gender
    alignment
    player
    attackBonus
    currentHp
    maxHp
    surpriseChance
  }
`

const attributeModifiers = graphql`
  fragment characterSheetAttributeModifiers on AttributeModifiers {
    id
    characterId
    charisma
    constitution
    dexterity
    intelligence
    strength
    wisdom
  }
`

const attributes = graphql`
  fragment characterSheetAttributes on Attributes {
    id
    characterId
    charisma
    constitution
    dexterity
    intelligence
    strength
    wisdom
  }
`

const combatOptions = graphql`
  fragment characterSheetCombatOptions on CombatOptions {
    id
    characterId
    standard
    parry
    improvedParry
    press
    defensive
  }
`

const commonActivities = graphql`
  fragment characterSheetCommonActivities on CommonActivities {
    id
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
  }
`

const savingThrows = graphql`
  fragment characterSheetSavingThrows on SavingThrows {
    id
    characterId
    paralyze
    poison
    breathWeapon
    magicalDevice
    magic
  }
`

const effect = graphql`
  fragment characterSheetEffect on Effect {
    id
    characterId
    method
    target
    type
    value
  }
`

const retainer = graphql`
  fragment characterSheetRetainer on Retainer {
    id
    characterId
    name
    position
    class
    level
    hitpoints
    wage
    share
  }
`

const wallet = graphql`
  fragment characterSheetWallet on Wallet {
    id
    characterId
    copper
    gold
    silver
  }
`

export {
  info,
  attributeModifiers,
  attributes,
  combatOptions,
  commonActivities,
  savingThrows,
  effect,
  retainer,
  wallet
}