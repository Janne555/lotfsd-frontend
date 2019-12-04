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
    encumbrance: 1,
    equipped: true,
    name: "Chain Mail",
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
    commonActivities
  }
}

export {
  attributes,
  savingThrows,
  initialState,
  inventory,
  effects,
  commonActivities
}