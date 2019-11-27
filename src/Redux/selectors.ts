const selectAttributes = (state: RootState): Attributes => state.characterSheet.attributes

const selectSavingThrows = (state: RootState): SavingThrows => state.characterSheet.savingThrows

export {
  selectAttributes,
  selectSavingThrows
}