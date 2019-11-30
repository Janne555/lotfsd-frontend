import { calculateModifier } from ".";

function calculateRangedAttackBonus(baseAttackBonus: number, dexterity: number) {
  return baseAttackBonus + calculateModifier(dexterity)
}

export default calculateRangedAttackBonus