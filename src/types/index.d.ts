type Theme = typeof import('../styles/theme').theme
type RootState = ReturnType<typeof import('../Redux/reducers/rootReducer').default>

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

type CommonActivities = {
  architecture: number,
  bushcraft: number,
  climbing: number,
  languages: number,
  openDoors: number,
  search: number,
  sleightOfHand: number,
  sneakAttack: number,
  stealth: number,
  tinkering: number
}

type Effect = AttributeModifierEffect | AttributeEffect | ArmorClassEffect | CommonActivityEffect

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

type ArmorClassEffect = {
  type: "armorClassEffect"
  target: ArmorClassEffectTarget
  method: "override" | "modify"
  value: number
}

type CommonActivityEffect = {
  type: "commonActivityEffect"
  target: keyof CommonActivities
  value: number
}

type ArmorClassEffectTarget = "base" | "ranged" | "surprised" | "withoutShield"

type Equipment = Armor | Weapon

type Armor = {
  type: 'armor',
  name: string,
  baseArmorClass: number,
  encumbrance: number,
  equipped: boolean
}

type Weapon = {
  type: 'weappon',
  name: string,
  encumbrance: number,
  damage: string,
  range: string,
  equipped: boolean
}