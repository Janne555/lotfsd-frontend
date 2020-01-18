function normalize<T extends CharacterId>(obj: T): Normalized<T> {
  return {
    byId: {
      [obj.characterId]: obj
    },
    allIds: [obj.characterId]
  }
}

const singleAttributes: CharacterId & Attributes = {
  characterId: 'a',
  charisma: 18,
  constitution: 17,
  dexterity: 16,
  intelligence: 15,
  strength: 14,
  wisdom: 13
}

const attributes = normalize(singleAttributes)

const singleSavingThrows: CharacterId & SavingThrows = {
  characterId: 'a',
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
    },
    shield: {
      type: "armor",
      encumbrancePoints: 1,
      encumbrance: 1,
      name: "Shield",
      effects: [
        {
          method: "modify",
          target: "baseAC",
          type: "armorItemEffect",
          value: 1,
          id: 'effect1'
        },
        {
          method: "modify",
          target: "rangedAC",
          type: "armorItemEffect",
          value: 2,
          id: 'effect2'
        },
      ],
      stackSize: 1,
      id: 'shield',
      description: 'Shield of the Ten Spears',
      baseArmorClass: 1
    }
  },
  allIds: ['armor1', 'torch', 'pavillion', 'shield']
}

const singleInventory: Inventory = {
  characterId: 'a',
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
  characterId: 'a',
  effects: []
}

const effects = normalize(singleEffects)

const singleCommonActivities: CharacterId & CommonActivities = {
  characterId: 'a',
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

const singleWallet: CharacterId & Wallet = {
  characterId: 'a',
  copper: 50,
  silver: 50,
  gold: 50
}

const wallet = normalize(singleWallet)

const singleLanguages: Languages = {
  characterId: 'a',
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
  characterId: 'a',
  retainers: [
    {
      level: 1,
      name: 'Mordick',
      class: 'Fighter',
      wage: 100,
      id: "1"
    },
    {
      name: 'Jeeves',
      class: 'Butler',
      wage: 150,
      id: "2"
    }
  ]
}

const retainers = normalize(singleRetainers)

const singleCombatOptions: CharacterId & CombatOptions = {
  characterId: 'a',
  standard: true,
  defensive: false,
  improvedParry: false,
  press: false,
  parry: false
}

const combatOptions = normalize(singleCombatOptions)

const singleInfo: CharacterId & Info = {
  characterId: 'a',
  age: 28,
  alignment: 'chaotic',
  class: 'fighter',
  experience: 4000,
  gender: 'male',
  name: 'Zoidberg',
  race: 'Crab',
}

const info = normalize(singleInfo)

const baseProperties: Properties = {
  characterId: 'a',
  properties: [{
    id: 'prop1',
    inventory: [
      {
        instanceId: 'propitem1',
        itemId: 'torch'
      }
    ],
    location: 'Crabstown',
    name: 'Shack',
    description: "A bad place",
    rent: 100
  },
  {
    id: 'prop2',
    inventory: [
      {
        instanceId: 'propitem2',
        itemId: 'armor1'
      }
    ],
    location: 'New York',
    name: 'Empire state building',
    description: "Big tower",
    rent: 300
  }
  ]
}

const properties = normalize(baseProperties)

const characterSheet: NormalizedCharacterSheet = {
  attributes,
  savingThrows,
  inventory,
  effects,
  commonActivities,
  wallet,
  languages,
  retainers,
  combatOptions,
  info,
  properties
}

export {
  attributes,
  savingThrows,
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
  properties
}