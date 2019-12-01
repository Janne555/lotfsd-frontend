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

const equipmentList: Equipment[] = [
  {
    type: 'armor',
    baseArmorClass: 16,
    encumberance: 1,
    equipped: true,
    name: "Chain Mail"
  }
]

const effects: Effect[] = [

]

const initialState: RootState = {
  characterSheet: {
    attributes,
    savingThrows,
    attackBonus: 1,
    currentHP: 5,
    maxHP: 10,
    surpriseChance: 4,
    equipmentList,
    effects
  }
}

export {
  attributes,
  savingThrows,
  initialState,
  equipmentList,
  effects
}