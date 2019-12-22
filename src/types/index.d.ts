type Theme = typeof import('../styles/theme').theme

type RootState = ReturnType<typeof import('../Redux/reducers/rootReducer').default>

type EndpointType = keyof typeof import('../constants').ENDPOINTS

type AppThunk = import('redux-thunk').ThunkAction<void, RootState, null, Action<string>>

type AppAction<T> = import('@reduxjs/toolkit').PayloadAction<T> & { payload: { id?: string } }

type Normalized<T extends Id> = {
  byId: Record<string, T>
  allIds: string[]
}

type Id = {
  id: string
}

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
  id: string
  name: string
  stackSize: number
  encumbrancePoints: number
  encumbrance?: number
  effects: ItemEffect[]
  description: string
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
  id: string
  copper: number
  silver: number
  gold: number
}

type EquipmentListItem = {
  name: string
  amount: number
  stackSize: number
  itemId?: string
  listItemId: string
}

type EquipmentListItemOversized = {
  name: string
  itemId: string
  listItemId: string
  encumbrance: number
}

type Language = {
  known: boolean
  name: string
}

type Retainer = {
  name: string
  position?: string
  class?: string
  level?: number
  hitpoints?: number
  wage?: number
  share?: number
  uuid: string
}

type CombatOptions = {
  standard?: boolean
  parry?: boolean
  press?: boolean
  defensive?: boolean
}

type Info = {
  id: string
  name: string
  experience: number
  class: string
  race: string
  age: number
  gender: string
  alignment: string
  player: string
}

type Experience = Id & { experience: number }

type AttackBonus = Id & { attackBonus: number }

type CurrentHp = Id & { currentHp: number }

type MaxHp = Id & { maxHp: number }

type SurpriseChance = Id & { surpriseChance: number }

type Inventory = Id & { inventory: ItemInstance[] }

type Effects = Id & { effects: Effect[] }

type Languages = Id & { languages: Language[] }

type Retainers = Id & { retainers: Retainer[] }

type CharacterSheet = {
  experience: Normalized<Experience>
  attributes: Normalized<Id & Attributes>
  savingThrows: Normalized<Id & SavingThrows>
  attackBonus: Normalized<AttackBonus>
  currentHp: Normalized<CurrentHp>
  maxHp: Normalized<MaxHp>
  surpriseChance: Normalized<SurpriseChance>
  inventory: Normalized<Inventory>
  effects: Normalized<Effects>
  commonActivities: Normalized<Id & CommonActivities>
  wallet: Normalized<Wallet>
  languages: Normalized<Languages>
  retainers: Normalized<Retainers>
  combatOptions: Normalized<Id & CombatOptions>
  info: Normalized<Info>
}

type UserData = {
  username: string
  token: string
}

type System = {
  characterId?: string
}
