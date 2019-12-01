import { calculateSavingThrows, calculateMeleeAttackBonus } from "../services"

const selectAttributes = (state: RootState): Attributes => state.characterSheet.attributes

const selectSavingThrows = (state: RootState): SavingThrows => calculateSavingThrows(state.characterSheet.savingThrows, selectAttributes(state))

const selectMaxHP = (state: RootState): number => state.characterSheet.maxHP

const selecCurrentHP = (state: RootState): number => state.characterSheet.currentHP

const selectBaseAttackBonus = (state: RootState): number => state.characterSheet.attackBonus

const selectMeleeAttackBonus = (state: RootState): number => calculateMeleeAttackBonus(selectBaseAttackBonus(state), selectAttributes(state).strength)

const selectRangedAttackBonus = (state: RootState): number => calculateMeleeAttackBonus(selectBaseAttackBonus(state), selectAttributes(state).dexterity)

const selectSurpriseChance = (state: RootState): number => state.characterSheet.surpriseChance

export {
  selectAttributes,
  selectSavingThrows,
  selecCurrentHP,
  selectMaxHP,
  selectMeleeAttackBonus,
  selectRangedAttackBonus,
  selectBaseAttackBonus,
  selectSurpriseChance
}