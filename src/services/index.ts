import {
  hasKey,
  isArmor,
  isAttributeModifierEffect,
  isArmorClassEffect,
  isCommonActivityEffect
} from './typeGuards'

import {
  calculateAttributeModifiers,
  calculateMeleeAttackBonus,
  calculateRangedAttackBonus,
  calculateSavingThrows,
  calculateArmorClass,
  calculateCommonActivities
} from './characterSheetServices'

export {
  hasKey,
  calculateSavingThrows,
  calculateMeleeAttackBonus,
  calculateRangedAttackBonus,
  isArmor,
  isAttributeModifierEffect,
  calculateAttributeModifiers,
  isArmorClassEffect,
  calculateArmorClass,
  calculateCommonActivities,
  isCommonActivityEffect
}