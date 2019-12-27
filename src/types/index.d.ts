type Theme = typeof import('../styles/theme').theme

type RootState = ReturnType<typeof import('../Redux/reducers/rootReducer').default>

type EndpointType = keyof typeof import('../constants').ENDPOINTS

type AppThunk = import('redux-thunk').ThunkAction<void, RootState, null, Action<string>>

type AppAction<T> = import('@reduxjs/toolkit').PayloadAction<T> & { payload: { id: string } }

type ModalContent = "addRetainer" | "addLanguage" | "addItem"

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

type BaseItemEffect = {
  method: "override" | "modify"
  id: string
}

type WeaponEffect = BaseItemEffect & {
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

type ArmorEffect = BaseItemEffect & {
  type: 'armorItemEffect'
  target: 'baseAC' | 'rangedAC' | 'withoutShieldAC' | 'surprisedAC'
  value: number
}

type InventoryItem = Item & ItemInstance

type Item = Armor | Weapon | PlainItem

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

type PlainItem = ItemBase & {
  type: 'item'
}

type Armor = ItemBase & {
  type: 'armor'
  baseArmorClass: number
}

type Weapon = ItemBase & {
  type: 'weapon'
  damage: string
  attackBonus: number
  range: Record<'short' | 'medium' | 'long', number | undefined>
}

type Wallet = {
  id: string
  copper: number
  silver: number
  gold: number
}

type EquipmentListItem = {
  name: string
  amount?: number
  stackSize?: number
  itemId?: string
  listItemId: string
  encumbrance?: number
} & Item

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
  improvedParry?: boolean
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
  attackBonus: number
  currentHp: number
  maxHp: number
  surpriseChance: number
}


type InfoBarData = Omit<Info, 'attackBonus' | 'currentHp' | 'maxHp' | 'surpriseChance'>

type Inventory = Id & { inventory: ItemInstance[] }

type Effects = Id & { effects: Effect[] }

type Languages = Id & { languages: Language[] }

type Retainers = Id & { retainers: Retainer[] }

type CharacterSheet = {
  attributes: Normalized<Id & Attributes>
  savingThrows: Normalized<Id & SavingThrows>
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
  characters: {
    byName: Record<string, string>
    byId: Record<string, string>
  },
  username: string
}

type NewCharacterForm = Record<keyof Attributes, HTMLInputElement> & {
  name: HTMLInputElement
  gender: HTMLInputElement
  race: HTMLInputElement
  alignment: HTMLSelectElement
  class: HTMLSelectElement
  age: HTMLInputElement
  money: HTMLInputElement
  maxHp: HTMLInputElement
}

type NewCharacterPayload = Attributes & {
  [P in keyof NewCharacterForm]: P extends ("age" | "money" | "maxHp" | keyof Attributes) ? number : P extends ("class") ? Classes : string
} & { id: string, player: string }

type AddRetainerForm = Record<keyof Omit<Retainer, 'uuid'>, HTMLInputElement>

type CharacterClass = {
  savingThrows: SavingThrows
  combatOptions: CombatOptions
  levels: number[]
  commonActivities: CommonActivities
  attackBonus: number
  surpriseChance: number
}

type Classes = "fighter" | "cleric" | "specialist" | "magic-user"

type CharacterClasses = Record<Classes, CharacterClass>

type ItemCreatorFormKeys = 'type' | 'name' | 'description' | 'stackSize' | 'encumbrance' | 'armorClass' | 'damage' | 'rangeShort' | 'rangeMedium' | 'rangeLong'

type ItemCreatorForm = Partial<Record<ItemCreatorFormKeys, HTMLInputElement>>