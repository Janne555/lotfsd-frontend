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

const initialState: RootState = {
  characterSheet: {
    attributes,
    savingThrows,
    attackBonus: 1,
    currentHP: 5,
    maxHP: 10
  }
}

export {
  attributes,
  savingThrows,
  initialState
}