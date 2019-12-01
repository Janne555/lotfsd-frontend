import { calculateSavingThrows, calculateMeleeAttackBonus, calculateBaseArmorClass, isAttributeModifierEffect, calculateAttributeModifiers } from "../services"

const selectAttributes = (state: RootState): Attributes => state.characterSheet.attributes

const selectAttributeModifierEffects = (state: RootState): AttributeModifierEffect[] => state.characterSheet.effects.filter(isAttributeModifierEffect)

const selectAttributeModifiers = (state: RootState): AttributeModifiers => calculateAttributeModifiers(selectAttributes(state), selectAttributeModifierEffects(state))

const selectSavingThrows = (state: RootState): SavingThrows => calculateSavingThrows(state.characterSheet.savingThrows, selectAttributeModifiers(state))

const selectMaxHP = (state: RootState): number => state.characterSheet.maxHP

const selecCurrentHP = (state: RootState): number => state.characterSheet.currentHP

const selectBaseAttackBonus = (state: RootState): number => state.characterSheet.attackBonus

const selectMeleeAttackBonus = (state: RootState): number => calculateMeleeAttackBonus(selectBaseAttackBonus(state), selectAttributeModifiers(state).strength)

const selectRangedAttackBonus = (state: RootState): number => calculateMeleeAttackBonus(selectBaseAttackBonus(state), selectAttributeModifiers(state).dexterity)

const selectSurpriseChance = (state: RootState): number => state.characterSheet.surpriseChance

const selectBaseArmorClass = (state: RootState): number => calculateBaseArmorClass(state.characterSheet.equipmentList)

// const selectRangedArmorClass = (state: RootState): number => 

export {
  selectAttributes,
  selectSavingThrows,
  selecCurrentHP,
  selectMaxHP,
  selectMeleeAttackBonus,
  selectRangedAttackBonus,
  selectBaseAttackBonus,
  selectSurpriseChance,
  selectBaseArmorClass,
  selectAttributeModifierEffects,
  selectAttributeModifiers
}