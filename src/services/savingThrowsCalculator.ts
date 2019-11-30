import { calculateModifier } from "."
import { selectAttributes } from "../Redux/selectors"

function calculateSavingThrows(state: RootState) {
  const {
    breathWeapon,
    magic,
    magicalDevice,
    paralyze,
    poison
  } = state.characterSheet.savingThrows
  const { wisdom, intelligence } = selectAttributes(state)
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