import { calculateSavingThrows } from "../services"

const selectAttributes = (state: RootState): Attributes => state.characterSheet.attributes

const selectSavingThrows = (state: RootState): SavingThrows => calculateSavingThrows(state)

export {
  selectAttributes,
  selectSavingThrows
}