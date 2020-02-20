import { ItemsQuery } from "../../__generated__/apolloTypes/ItemsQuery"
import { MockedResponse } from "@apollo/react-testing"
import { CharacterListQuery } from "../../__generated__/apolloTypes/CharacterListQuery"
import { CHARACTER_LIST_QUERY, ITEMS_QUERY, CREATE_CHARACTER_MUTATION, CHARACTER_SHEET_QUERY, CHARACTER_SHEET_UPDATE_MUTATION } from "../constants"
import { CharacterCreatorMutation } from "../../__generated__/apolloTypes/CharacterCreatorMutation"
import { CharacterSheetQuery } from "../../__generated__/apolloTypes/CharacterSheetQuery"
import { CharacterSheetUpdateMutation } from "../../__generated__/apolloTypes/CharacterSheetUpdateMutation"

const ATTRIBUTES: Attributes = {
  charisma: 10,
  constitution: 11,
  dexterity: 12,
  intelligence: 13,
  strength: 14,
  wisdom: 15
}

const WALLET: Wallet = {
  copper: 10,
  gold: 20,
  silver: 30
}

const EQUIPMENT: EquipmentListItem[] = [
  {
    encumbrancePoints: 1,
    amount: 4,
    name: "thingy",
    itemId: "1",
    listItemId: "2",
    stackSize: 4
  },
  {
    encumbrancePoints: 4,
    amount: 4,
    name: "fooby",
    itemId: "3",
    listItemId: "4",
    stackSize: 4
  },
  {
    encumbrancePoints: 1,
    amount: 4,
    name: "baar",
    itemId: "5",
    listItemId: "6",
    stackSize: 4,
    encumbrance: 1
  }
]

type Result<T> = {
  data: T
}

const CHARACTER_LIST_MOCK: Result<CharacterListQuery> = {
  data: {
    characterSheets: [
      {
        __typename: "CharacterSheet",
        class: "fighter",
        id: "213123",
        name: "zoid"
      }
    ]
  }
}

const ITEM_INDEX_MOCK: Result<ItemsQuery> = {
  data: {
    items: [
      {
        __typename: "Item",
        attackBonus: null,
        baseArmorClass: null,
        damage: null,
        description: "a description",
        effects: null,
        encumbrance: null,
        encumbrancePoints: 1,
        id: "asd",
        name: "thingy",
        rangeLong: null,
        rangeMedium: null,
        rangeShort: null,
        stackSize: 1,
        type: "item"
      }
    ]
  }
}

const CHARACTER_MOCK: Result<CharacterSheetQuery> = {
  data: {
    characterSheet: {
      __typename: "CharacterSheet",
      age: 13,
      alignment: "chaotic",
      architecture: 1,
      attackBonus: 1,
      breathWeapon: 10,
      bushcraft: 1,
      charisma: 10,
      class: "fighter",
      climbing: 1,
      constitution: 16,
      copper: 1,
      currentHp: 13,
      defensive: true,
      dexterity: 10,
      effects: [],
      experience: 0,
      gender: "male",
      gold: 100,
      id: "asd",
      improvedParry: true,
      intelligence: 11,
      inventory: [],
      languages: 1,
      languagesList: [],
      magic: 11,
      magicalDevice: 12,
      maxHp: 13,
      name: "dyyd",
      openDoors: 1,
      paralyze: 13,
      parry: false,
      poison: 14,
      press: true,
      properties: [],
      race: "male",
      retainers: [],
      search: 1,
      silver: 1,
      sleightOfHand: 1,
      sneakAttack: 1,
      standard: true,
      stealth: 1,
      strength: 11,
      surpriseChance: 4,
      tinkering: 1,
      wisdom: 7
    }
  }
}

const CHARACTER_SHEET_UPDATE_MOCK: Result<CharacterSheetUpdateMutation> = {
  data: {
    updateCharacterSheet: {
      __typename: "CharacterSheet",
      age: 13,
      alignment: "chaotic",
      architecture: 1,
      attackBonus: 1,
      breathWeapon: 10,
      bushcraft: 1,
      charisma: 10,
      class: "fighter",
      climbing: 1,
      constitution: 16,
      copper: 1,
      currentHp: 13,
      defensive: true,
      dexterity: 10,
      effects: [],
      experience: 0,
      gender: "male",
      gold: 100,
      id: "asd",
      improvedParry: true,
      intelligence: 11,
      inventory: [],
      languages: 1,
      languagesList: [],
      magic: 11,
      magicalDevice: 12,
      maxHp: 13,
      name: "dyyd",
      openDoors: 1,
      paralyze: 13,
      parry: false,
      poison: 14,
      press: true,
      properties: [],
      race: "male",
      retainers: [],
      search: 1,
      silver: 1,
      sleightOfHand: 1,
      sneakAttack: 1,
      standard: true,
      stealth: 1,
      strength: 11,
      surpriseChance: 4,
      tinkering: 1,
      wisdom: 7
    }
  }
}

const APOLLO_MOCKS: MockedResponse[] = [
  {
    request: {
      query: CHARACTER_LIST_QUERY
    },
    result: CHARACTER_LIST_MOCK
  },
  {
    request: {
      query: ITEMS_QUERY
    },
    result: ITEM_INDEX_MOCK
  },
  {
    request: {
      query: CHARACTER_SHEET_QUERY,
      variables: { id: "asd" }
    },
    result: CHARACTER_MOCK
  },
  {
    request: {
      query: CHARACTER_SHEET_UPDATE_MUTATION,
      variables: { "ch": { "surpriseChance": 6 }, "id": "asd" }
    },
    result: CHARACTER_SHEET_UPDATE_MOCK
  }
]

export {
  ATTRIBUTES,
  WALLET,
  EQUIPMENT,
  APOLLO_MOCKS,
  CHARACTER_SHEET_UPDATE_MOCK
}