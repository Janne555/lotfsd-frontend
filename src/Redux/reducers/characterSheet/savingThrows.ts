import { savingThrows } from '../../../testData/initialState'
import { createSlice } from '@reduxjs/toolkit'
import { createCharacter } from '../../newCharacterAction'
import { CHARACTER_CLASSES } from '../../../constants/characterClasses'

const savingThrowsSlice = createSlice({
  name: 'savingThrows',
  initialState: savingThrows,
  reducers: {
    setSavingThrow(state, action: AppAction<{ savingThrow: keyof SavingThrows, value: number }>) {
      const { id, savingThrow, value } = action.payload
      state.byId[id][savingThrow] = value
    }
  },
  extraReducers: acmBuilder => {
    acmBuilder.addCase(createCharacter, (state, action) => {
      const { id, class: className } = action.payload
      state.byId[id] = { id, ...CHARACTER_CLASSES[className].savingThrows }
      state.allIds.push(id)
    })
  }
})

export const { setSavingThrow } = savingThrowsSlice.actions

export default savingThrowsSlice.reducer