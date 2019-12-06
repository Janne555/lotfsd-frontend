import { BASE_ARMOR_CLASS } from "../constants"
import { hasKey } from "./typeGuards"
import partition from 'lodash/partition'

function calculateAttributeModifiers(attributes: Attributes, effects: AttributeModifierEffect[]): AttributeModifiers {
  return Object.keys(attributes).reduce((attributes, key) => {
    hasKey(attributes, key) && (attributes[key] = calculateModifier(attributes[key]) + sumOfEffectsFor(key))
    return attributes
  }, { ...attributes })

  function sumOfEffectsFor(key: keyof Attributes): number {
    return effects.reduce((sum, { value, target }) => target === key ? value + sum : sum, 0)
  }
}

function calculateArmorClass(dexterityModifier: number, effects: ArmorClassEffect[], type: ArmorClassEffectTarget): number {
  const baseACEffect = effects.find(({ method }) => method === "override")
  const baseAC = baseACEffect ? baseACEffect.value : BASE_ARMOR_CLASS

  switch (type) {
    case "base":
      return baseAC + sumOfArmorClassEffects(effects, "base") + dexterityModifier
    case "ranged":
      return baseAC + sumOfArmorClassEffects(effects, "ranged") + dexterityModifier
    case "surprised":
      return baseAC - 2 + sumOfArmorClassEffects(effects, "surprised")
    case "withoutShield":
      return baseAC + dexterityModifier
  }
}

function sumOfArmorClassEffects(effects: ArmorClassEffect[], targetAC: ArmorClassEffectTarget) {
  return effects.filter(effect => effect.method !== 'override').reduce((sum, { value, target }) => target === targetAC ? value + sum : sum, 0)
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

function calculateCommonActivities(commonActivities: CommonActivities, strengthModifier: number, intelligenceModifier: number, effects: CommonActivityEffect[]): CommonActivities {
  return Object.keys(commonActivities).reduce((modifiedActivities, key) => {
    hasKey(commonActivities, key) && (modifiedActivities[key] += sumOfEffectsForTarget(effects, key) + addModifier(key))
    return modifiedActivities
  }, { ...commonActivities })

  function addModifier(key: keyof CommonActivities) {
    switch (key) {
      case 'languages':
        return intelligenceModifier
      case 'openDoors':
        return strengthModifier
      default:
        return 0
    }
  }
}

function sumOfEffectsForTarget(effects: Effect[], key: string) {
  return effects.reduce((sum, { value, target }) => target === key ? sum + value : sum, 0)
}

function mapInventoryToEffects(inventory: Item[]): Effect[] {
  const [equipped, items] = partition(inventory, item => item.equipped)

  return mapEquippedToEffects().concat(mapItemsToEffects())

  function mapEquippedToEffects() {
    return equipped.reduce((effects, item) => {
      switch (item.type) {
        case "armor":
          effects.push(makeArmorClassEffect(item))
      }

      return effects
    }, [] as Effect[])
  }

  function mapItemsToEffects() {
    return items.reduce((effects, item) => {
      switch (item.type) {

      }

      return effects
    }, [] as Effect[])
  }
}

function makeArmorClassEffect(item: Armor): ArmorClassEffect {
  return {
    method: 'override',
    target: "base",
    type: "armorClassEffect",
    value: item.baseArmorClass
  }
}

function calculateEncumbrance(inventory: Item[]): number {
  return inventory.reduce(reduceEncumbrance, 0)

  function reduceEncumbrance(encumbrance: number, item: Item): number {
    return 0
  }
}

export {
  calculateAttributeModifiers,
  calculateMeleeAttackBonus,
  calculateRangedAttackBonus,
  calculateSavingThrows,
  calculateArmorClass,
  calculateCommonActivities,
  mapInventoryToEffects,
  calculateEncumbrance
}