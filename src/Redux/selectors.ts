import {
  calculateSavingThrows,
  calculateMeleeAttackBonus,
  isAttributeModifierEffect,
  calculateAttributeModifiers,
  isArmorClassEffect,
  calculateArmorClass
} from "../services"

const selectAttributes = (state: RootState): Attributes => state.characterSheet.attributes

const selectAttributeModifierEffects = (state: RootState): AttributeModifierEffect[] => state.characterSheet.effects.filter(isAttributeModifierEffect)

const selectArmorClassEffects = (state: RootState): ArmorClassEffect[] => state.characterSheet.effects.filter(isArmorClassEffect)

const selectAttributeModifiers = (state: RootState): AttributeModifiers => calculateAttributeModifiers(selectAttributes(state), selectAttributeModifierEffects(state))

const selectSavingThrows = (state: RootState): SavingThrows => calculateSavingThrows(state.characterSheet.savingThrows, selectAttributeModifiers(state))

const selectMaxHP = (state: RootState): number => state.characterSheet.maxHP

const selecCurrentHP = (state: RootState): number => state.characterSheet.currentHP

const selectBaseAttackBonus = (state: RootState): number => state.characterSheet.attackBonus

const selectMeleeAttackBonus = (state: RootState): number => calculateMeleeAttackBonus(selectBaseAttackBonus(state), selectAttributeModifiers(state).strength)

const selectRangedAttackBonus = (state: RootState): number => calculateMeleeAttackBonus(selectBaseAttackBonus(state), selectAttributeModifiers(state).dexterity)

const selectSurpriseChance = (state: RootState): number => state.characterSheet.surpriseChance

const selectBaseArmorClass = (state: RootState): number => calculateArmorClass(selectAttributeModifiers(state).dexterity, selectArmorClassEffects(state), "base")

const selectRangedArmorClass = (state: RootState): number => calculateArmorClass(selectAttributeModifiers(state).dexterity, selectArmorClassEffects(state), "ranged")

const selectWithoutShieldArmorClass = (state: RootState): number => calculateArmorClass(selectAttributeModifiers(state).dexterity, selectArmorClassEffects(state), "withoutShield")

const selectSurprisedArmorClass = (state: RootState): number => calculateArmorClass(selectAttributeModifiers(state).dexterity, selectArmorClassEffects(state), "surprised")

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
  selectAttributeModifiers,
  selectRangedArmorClass,
  selectWithoutShieldArmorClass,
  selectSurprisedArmorClass
}