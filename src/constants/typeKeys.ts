const COMMON_ACTIVITY_KEYS = [
  "architecture",
  "bushcraft",
  "climbing",
  "languages",
  "openDoors",
  "search",
  "sleightOfHand",
  "sneakAttack",
  "stealth",
  "tinkering"
] as const

const ATTRIBUTE_KEYS = [
  'charisma',
  'constitution',
  'dexterity',
  'intelligence',
  'strength',
  'wisdom'
] as const


const RETAINER_KEYS = [
  "name",
  "position",
  "class",
  "level",
  "hitpoints",
  "wage",
  "share"
] as const


export {
  COMMON_ACTIVITY_KEYS,
  ATTRIBUTE_KEYS,
  RETAINER_KEYS
}

