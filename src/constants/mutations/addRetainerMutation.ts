import { gql } from 'apollo-boost'

const ADD_RETAINER_MUTATION = gql`
  mutation AddRetainerMutation($retainer: RetainerInput!, $characterId: String!) {
    addRetainer(retainer: $retainer, characterSheetId: $characterId) {
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

export { ADD_RETAINER_MUTATION }