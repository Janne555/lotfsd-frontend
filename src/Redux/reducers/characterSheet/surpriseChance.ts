import { createSlice } from '@reduxjs/toolkit'
import { characterSheet } from '../../../testData/initialState'

const surpriseChanceSlice = createSlice({
  name: 'surpriseChance',
  initialState: characterSheet.surpriseChance,
  reducers: {
    setValue(state, action: AppAction<SurpriseChance>) {
      const { id, surpriseChance } = action.payload
      if (id) {
        state.byId[id].surpriseChance = surpriseChance
      }
    }
  }
})

export const { setValue } = surpriseChanceSlice.actions

export default surpriseChanceSlice.reducer