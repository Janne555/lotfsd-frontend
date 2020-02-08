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

export {
  ATTRIBUTES,
  WALLET,
  EQUIPMENT
}