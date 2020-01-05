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

const CHARACTER_CLASSES: CharacterClasses = {
  fighter: {
    savingThrows: {
      breathWeapon: 10,
      magic: 11,
      magicalDevice: 12,
      paralyze: 13,
      poison: 14
    },
    levels: [
      0, 2000, 4000, 8000, 16000, 32000, 64000
    ],
    combatOptions: {
      defensive: true,
      improvedParry: true,
      press: true,
      standard: true,
      parry: false
    },
    commonActivities,
    attackBonus: 1,
    surpriseChance: 4
  },
  "magic-user": {
    savingThrows: {
      breathWeapon: 10,
      magic: 11,
      magicalDevice: 12,
      paralyze: 13,
      poison: 14
    },
    levels: [
      0, 2000, 4000, 8000, 16000, 32000, 64000
    ],
    combatOptions: {
      parry: true,
      standard: true,
      defensive: false,
      improvedParry: false,
      press: false
    },
    commonActivities,
    attackBonus: 1,
    surpriseChance: 4
  },
  cleric: {
    savingThrows: {
      breathWeapon: 10,
      magic: 11,
      magicalDevice: 12,
      paralyze: 13,
      poison: 14
    },
    levels: [
      0, 2000, 4000, 8000, 16000, 32000, 64000
    ],
    combatOptions: {
      parry: true,
      standard: true,
      defensive: false,
      improvedParry: false,
      press: false
    },
    commonActivities,
    attackBonus: 1,
    surpriseChance: 4
  },
  specialist: {
    savingThrows: {
      breathWeapon: 10,
      magic: 11,
      magicalDevice: 12,
      paralyze: 13,
      poison: 14
    },
    levels: [
      0, 2000, 4000, 8000, 16000, 32000, 64000
    ],
    combatOptions: {
      parry: true,
      standard: true,
      defensive: false,
      improvedParry: false,
      press: false
    },
    commonActivities,
    attackBonus: 1,
    surpriseChance: 4
  }
}

export { CHARACTER_CLASSES }