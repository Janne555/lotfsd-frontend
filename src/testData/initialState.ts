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

const itemIndex: { byId: { [name: string]: Item }, allIds: string[] } = {
  byId: {
    armor1: {
      type: 'armor',
      baseArmorClass: 16,
      encumbrancePoints: 1,
      encumbrance: 1,
      name: "Chain Mail",
      effects: [],
      stackSize: 1,
      itemId: 'armor1'
    },
    torch: {
      type: 'item',
      encumbrancePoints: 0.2,
      name: "Torch",
      effects: [],
      stackSize: 5,
      itemId: 'torch'
    },
    pavillion: {
      type: 'item',
      encumbrancePoints: 1,
      encumbrance: 1,
      name: "Pavillion",
      effects: [],
      stackSize: 1,
      itemId: 'pavillion'
    }
  },
  allIds: ['armor1', 'torch', 'pavillion']
}

const inventory: ItemInstance[] = [
  {
    equipped: true,
    instanceId: "1",
    itemId: 'armor1'
  },
  {
    instanceId: "2",
    itemId: 'torch'
  },
  {
    instanceId: "3",
    itemId: 'torch'
  },
  {
    instanceId: "4",
    itemId: 'torch'
  },
  {
    instanceId: "5",
    itemId: 'torch'
  },
  {
    instanceId: "6",
    itemId: 'torch'
  },
  {
    itemId: 'pavillion',
    instanceId: "7"
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

const languages: Language[] = [
  {
    name: "common",
    known: true
  },
  {
    name: 'gnomic',
    known: false
  }
]

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
    wallet,
    languages
  },
  itemIndex
}

export {
  attributes,
  savingThrows,
  initialState,
  inventory,
  effects,
  commonActivities,
  wallet,
  itemIndex,
  languages
}