import { calculateModifier } from "."

function calculateSavingThrows(savingThrows: SavingThrows, attributes: Attributes) {
  const {
    breathWeapon,
    magic,
    magicalDevice,
    paralyze,
    poison
  } = savingThrows
  const { wisdom, intelligence } = attributes
  const wisdomModifier = calculateModifier(wisdom)
  const intelligenceModifier = calculateModifier(intelligence)

  return {
    breathWeapon: breathWeapon + wisdomModifier,
    magic: magic + intelligenceModifier,
    magicalDevice: magicalDevice + intelligenceModifier,
    paralyze: paralyze + wisdomModifier,
    poison: poison + wisdomModifier
  }
}

export default calculateSavingThrows