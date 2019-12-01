import { isArmor } from "."
import { BASE_ARMOR_CLASS } from "../constants"

function calculateAttributeModifiers(attributes: Attributes, effects: AttributeModifierEffect[]): AttributeModifiers {
  return {
    charisma: calculateModifier(attributes.charisma) + sumOfEffectsFor("charisma"),
    constitution: calculateModifier(attributes.constitution) + sumOfEffectsFor("constitution"),
    dexterity: calculateModifier(attributes.dexterity) + sumOfEffectsFor("dexterity"),
    intelligence: calculateModifier(attributes.intelligence) + sumOfEffectsFor("intelligence"),
    strength: calculateModifier(attributes.strength) + sumOfEffectsFor("strength"),
    wisdom: calculateModifier(attributes.wisdom) + sumOfEffectsFor("wisdom")
  }

  function sumOfEffectsFor(key: keyof Attributes): number {
    return effects.reduce((sum, { value, target }) => target === key ? value + sum : sum, 0)
  }
}

function calculateBaseArmorClass(equipmentList: Equipment[]): number {
  const armor = equipmentList.filter(isArmor).find(armor => armor.equipped)
  return armor ? armor.baseArmorClass : BASE_ARMOR_CLASS
}

function calculateRangedArmorClass(baseArmorClass: number, dexterity: number) {
  return
}

function calculateMeleeAttackBonus(baseAttackBonus: number, strengthModifier: number) {
  return baseAttackBonus + strengthModifier
}

function calculateRangedAttackBonus(baseAttackBonus: number, dexterityModifier: number) {
  return baseAttackBonus + dexterityModifier
}

function calculateSavingThrows(savingThrows: SavingThrows, attributeModifiers: AttributeModifiers) {
  const {
    breathWeapon,
    magic,
    magicalDevice,
    paralyze,
    poison
  } = savingThrows
  const { wisdom, intelligence } = attributeModifiers

  return {
    breathWeapon: breathWeapon + wisdom,
    magic: magic + intelligence,
    magicalDevice: magicalDevice + intelligence,
    paralyze: paralyze + wisdom,
    poison: poison + wisdom
  }
}

function calculateModifier(value: number) {
  if (value < 4)
    return -3
  if (value > 3 && value < 6)
    return -2
  if (value > 5 && value < 9)
    return -1
  if (value > 8 && value < 13)
    return 0
  if (value > 12 && value < 16)
    return 1
  if (value > 15 && value < 18)
    return 2
  return 3
}

export {
  calculateBaseArmorClass,
  calculateAttributeModifiers,
  calculateRangedArmorClass,
  calculateMeleeAttackBonus,
  calculateRangedAttackBonus,
  calculateSavingThrows
}