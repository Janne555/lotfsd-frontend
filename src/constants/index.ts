const ATTRIBUTE_DETAILS = {
  charisma: "Retainer Recruitment, Loyalty",
  constitution: "Hit Points, Daily Travel Distance",
  dexterity: "AC, Ranged AB, Initiative",
  intelligence: "Saves vs Magic Effects",
  strength: "Mêlée AB, Open Doors",
  wisdom: "Saves vs Non-Magic Effects"
}

const SAVING_THROW_DETAILS = {
  paralyze: "Mobility Hazards (Petrification, Hold, Etc.)",
  poison: "Instant Death/KO Situations",
  breathWeapon: "Area Effects",
  magicalDevice: "Spell-Like Effects from Items",
  magic: "Spells or Innate Abilities"
}

const ATTRIBUTE_TITLES = {
  charisma: "Charisma",
  constitution: "Constitution",
  dexterity: "Dexterity",
  intelligence: "Intelligence",
  strength: "Strength",
  wisdom: "Wisdom"
}

const SAVING_THROW_TITLES = {
  paralyze: "Paralyze",
  poison: "Poison",
  breathWeapon: "Breath\xa0Weapon",
  magicalDevice: "Magical\xa0Device",
  magic: "Magic"
}

const COMMON_ACTIVITY_TITLES = {
  architecture: "Architecture",
  bushcraft: "Bushcraft",
  climbing: "Climbing",
  languages: "Languages",
  openDoors: "Open Doors",
  search: "Search",
  sleightOfHand: "Sleight of Hand",
  sneakAttack: "Sneak Attack",
  stealth: "Stealth",
  tinkering: "Tinkering"
}

const TITLES = {
  BASE_AB: "Base AB",
  MELEE_AB: "Mêlée AB",
  RANGED_AB: "Ranged AB"
}

const BASE_ARMOR_CLASS = 12

const MONEY = 'Money'

const RETAINER_KEYS: (keyof Omit<Retainer, 'uuid'>)[] = [
  "name",
  "position",
  "class",
  "level",
  "hitpoints",
  "wage",
  "share"
]

export {
  ATTRIBUTE_DETAILS,
  SAVING_THROW_DETAILS,
  ATTRIBUTE_TITLES,
  SAVING_THROW_TITLES,
  TITLES,
  BASE_ARMOR_CLASS,
  COMMON_ACTIVITY_TITLES,
  MONEY,
  RETAINER_KEYS
}