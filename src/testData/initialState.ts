function normalize<T extends { id: string }>(obj: T): Normalized<T> {
  return {
    byId: {
      [obj.id]: obj
    },
    allIds: [obj.id]
  }
}

const singleAttributes: Id & Attributes = {
  id: 'a',
  charisma: 18,
  constitution: 17,
  dexterity: 16,
  intelligence: 15,
  strength: 14,
  wisdom: 13
}

const attributes = normalize(singleAttributes)

const singleSavingThrows: Id & SavingThrows = {
  id: 'a',
  breathWeapon: 10,
  magic: 11,
  magicalDevice: 12,
  paralyze: 13,
  poison: 14
}

const savingThrows = normalize(singleSavingThrows)

const itemIndex: Normalized<Item> = {
  byId: {
    armor1: {
      type: 'armor',
      baseArmorClass: 16,
      encumbrancePoints: 1,
      encumbrance: 1,
      name: "Chain Mail",
      effects: [],
      stackSize: 1,
      id: 'armor1',
      description: 'armor'
    },
    torch: {
      type: 'item',
      encumbrancePoints: 0.2,
      name: "Torch",
      effects: [],
      stackSize: 5,
      id: 'torch',
      description: 'torch'
    },
    pavillion: {
      type: 'item',
      encumbrancePoints: 1,
      encumbrance: 1,
      name: "Pavillion",
      effects: [],
      stackSize: 1,
      id: 'pavillion',
      description: 'tent'
    }
  },
  allIds: ['armor1', 'torch', 'pavillion']
}

const singleInventory: Inventory = {
  id: 'a',
  inventory: [
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
}

const inventory = normalize(singleInventory)

const singleEffects: Effects = {
  id: 'a',
  effects: []
}

const effects = normalize(singleEffects)

const singleCommonActivities: Id & CommonActivities = {
  id: 'a',
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

const commonActivities = normalize(singleCommonActivities)

const singleWallet: Wallet = {
  id: 'a',
  copper: 50,
  silver: 50,
  gold: 50
}

const wallet = normalize(singleWallet)

const singleLanguages: Languages = {
  id: 'a',
  languages: [
    {
      name: "common",
      known: true
    },
    {
      name: "elvish",
      known: true
    },
    {
      name: "undercommon",
      known: true
    },
    {
      name: 'gnomic',
      known: false
    }
  ]
}

const languages = normalize(singleLanguages)

const singleRetainers: Retainers = {
  id: 'a',
  retainers: [
    {
      level: 1,
      name: 'Mordick',
      class: 'Fighter',
      wage: 100,
      uuid: "1"
    },
    {
      name: 'Jeeves',
      class: 'Butler',
      wage: 150,
      uuid: "1"
    }
  ]
}

const retainers = normalize(singleRetainers)

const singleCombatOptions: Id & CombatOptions = {
  id: 'a',
  standard: true
}

const combatOptions = normalize(singleCombatOptions)

const singleInfo: Info = {
  id: 'a',
  age: 28,
  alignment: 'chaotic',
  class: 'fighter',
  experience: 4000,
  gender: 'male',
  name: 'Zoidberg',
  race: 'Crab',
  player: 'Janne'
}

const info = normalize(singleInfo)

const attackBonus = normalize<AttackBonus>({ id: 'a', attackBonus: 1 })

const currentHp = normalize<CurrentHp>({ id: 'a', currentHp: 5 })

const maxHp = normalize<MaxHp>({ id: 'a', maxHp: 10 })

const surpriseChance = normalize<SurpriseChance>({ id: 'a', surpriseChance: 4 })

const characterSheet: CharacterSheet = {
  attributes,
  savingThrows,
  attackBonus,
  currentHp,
  maxHp,
  surpriseChance,
  inventory,
  effects,
  commonActivities,
  wallet,
  languages,
  retainers,
  combatOptions,
  info
}

const system: System = {
  characters: {
    byId: {
      a: 'Zoidberg'
    },
    byName: {
      Zoidberg: 'a'
    }
  }
}

const initialState: RootState = {
  characterSheet,
  itemIndex,
  system
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
  languages,
  retainers,
  characterSheet,
  combatOptions,
  info,
  attackBonus,
  currentHp,
  maxHp,
  surpriseChance,
  system
}