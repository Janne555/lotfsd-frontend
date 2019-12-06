const attributes = {
  charisma: 18,
  constitution: 17,
  dexterity: 16,
  intelligence: 15,
  strength: 14,
  wisdom: 13
}

const savingThrows = {
  breathWeapon: 10,
  magic: 11,
  magicalDevice: 12,
  paralyze: 13,
  poison: 14
}

const inventory: Item[] = [
  {
    type: 'armor',
    baseArmorClass: 16,
    encumbrancePoints: 1,
    encumbrance: 1,
    equipped: true,
    name: "Chain Mail",
    effects: [],
    stackSize: 1,
    uuid: "123123"
  },
  {
    type: 'item',
    encumbrancePoints: 0.2,
    encumbrance: 1,
    name: "Torch",
    effects: [],
    stackSize: 5,
    uuid: "123123"
  },
  {
    type: 'item',
    encumbrancePoints: 0.2,
    name: "Torch",
    effects: [],
    stackSize: 5,
    uuid: "123123"
  },
  {
    type: 'item',
    encumbrancePoints: 0.2,
    name: "Torch",
    effects: [],
    stackSize: 5,
    uuid: "123123"
  },
  {
    type: 'item',
    encumbrancePoints: 0.2,
    name: "Torch",
    effects: [],
    stackSize: 5,
    uuid: "123123"
  },
  {
    type: 'item',
    encumbrancePoints: 0.2,
    name: "Torch",
    effects: [],
    stackSize: 5,
    uuid: "123123"
  },
  {
    type: 'item',
    encumbrancePoints: 1,
    encumbrance: 1,
    name: "Pavillion",
    effects: [],
    stackSize: 1,
    uuid: "123123"
  }
]

const effects: Effect[] = [

]

const commonActivities: CommonActivities = {
  architecture: 1,
  bushcraft: 1,
  climbing: 1,
  languages: 1,
  openDoors: 1,
  search: 1,
  sleightOfHand: 1,
  sneakAttack: 1,
  stealth: 1,
  tinkering: 1
}

const wallet: Wallet = {
  copper: 50,
  silver: 50,
  gold: 50
}

const initialState: RootState = {
  characterSheet: {
    attributes,
    savingThrows,
    attackBonus: 1,
    currentHP: 5,
    maxHP: 10,
    surpriseChance: 4,
    inventory,
    effects,
    commonActivities,
    wallet
  }
}

export {
  attributes,
  savingThrows,
  initialState,
  inventory,
  effects,
  commonActivities,
  wallet
}