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

type ItemEffect = WeaponEffect | ArmorEffect

type ItemEffect = {
  method: "override" | "modify"
}

type WeaponEffect = ItemEffect & {
  type: 'weaponItemEffect'
}

type WeaponEffectNumeric = WeaponEffect & {
  target: 'attackBonus'
  value: number
}

type WeaponItemEffectString = WeaponEffect & {
  target: 'damage' | 'range'
  value: string
}

type ArmorEffect = ItemEffect & {
  type: 'armorItemEffect'
  target: 'armorClass'
}

type InventoryItem = Item & ItemInstance

type Item = Armor | Weapon | (ItemBase & { type: 'item' })

type ItemInstance = {
  itemId: string
  instanceId: string
  equipped?: boolean
}

type ItemBase = {
  itemId: string
  name: string
  stackSize: number
  encumbrancePoints: number
  encumbrance?: number
  effects: ItemEffect[]
}

type Armor = ItemBase & {
  type: 'armor'
  baseArmorClass: number
}

type Weapon = ItemBase & {
  type: 'weapon'
  damage: string
  range: string
}

type Wallet = {
  copper: number
  silver: number
  gold: number
}

type EquipmentListItem = {
  name: string
  amount: number
  stackSize: number
  equipped?: boolean
  itemId?: string
  listItemId: string
}