import { gql } from 'apollo-boost'

var CHARACTER_SHEET_FRAGMENT = gql`
  fragment CharacterSheetFragment on CharacterSheet {
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
    languagesList {
      id
      name
      known
    }
  }
`

export { CHARACTER_SHEET_FRAGMENT }