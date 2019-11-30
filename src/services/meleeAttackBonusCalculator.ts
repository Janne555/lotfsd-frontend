import { calculateModifier } from ".";

function calculateMeleeAttackBonus(baseAttackBonus: number, strength: number) {
  return baseAttackBonus + calculateModifier(strength)
}

export default calculateMeleeAttackBonus