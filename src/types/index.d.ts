type Theme = typeof import('../styles/theme').theme
type RootState = ReturnType<typeof import('../Redux/store').reducer>

type Attributes = {
  charisma: number
  constitution: number
  dexterity: number
  intelligence: number
  strength: number
  wisdom: number
}

type AttributeModifiers = {
  charisma: number
  constitution: number
  dexterity: number
  intelligence: number
  strength: number
  wisdom: number
}

type SavingThrows = {
  paralyze: number
  poison: number
  breathWeapon: number
  magicalDevice: number
  magic: number
}

type Effect = AttributeModifierEffect | AttributeEffect

type AttributeModifierEffect = {
  type: "attributeModifierEffect"
  target: keyof AttributeModifiers
  value: number
}

type AttributeEffect = {
  type: "attributeEffect"
  target: keyof Attribute
  value: number
}

type Equipment = Armor | Weapon

type Armor = {
  type: 'armor',
  name: string,
  baseArmorClass: number,
  encumberance: number,
  equipped: boolean
}

type Weapon = {
  type: 'weappon',
  name: string,
  encumberance: number,
  damage: string,
  range: string,
  equipped: boolean
}