import { ItemsQuery } from "../../__generated__/apolloTypes/ItemsQuery"
import { MockedResponse } from "@apollo/react-testing"
import { CharacterListQuery } from "../../__generated__/apolloTypes/CharacterListQuery"
import { CHARACTER_LIST_QUERY, ITEMS_QUERY } from "../constants"

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
  }
]

export {
  ATTRIBUTES,
  WALLET,
  EQUIPMENT,
  APOLLO_MOCKS
}